const express = require('express');
const NodeCache = require('node-cache');

class LeProxyServer {
  constructor(port, origin) {
    this.port = port;
    this.origin = origin;
    this.cache = new NodeCache({ stdTTL: 3600 });
    this.app = express();
  }

  async cleanCache(){
    this.cache.flushAll()
  }

  async getRequest(req, res) {
    const url = `${this.origin}${req._parsedUrl.pathname}`;
    const cachedData = this.cache.get(url);

    if (cachedData) {
      res.setHeader('X-Cache', 'MISS');
      return res.send(cachedData);
    }

    try {
      const response = await fetch(url);
      const cleanData = await response.json();
      res.setHeader('X-Cache', 'HIT');
      this.cache.set(url, cleanData);
      return res.send(cleanData);
    } catch (error) {
      console.error(error);
      res.status(error?.response?.status || 500).send(error);
    }
  }

  startServer() {
    this.app.get('*', this.getRequest.bind(this));
    this.app.listen(this.port, () => {
      console.log(`listeing on port ${this.port}`);
    });
  }
}

module.exports = LeProxyServer;
