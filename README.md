# Proxy Cache CLI Application

## Overview

The Proxy Cache CLI application allows you to manage caching for your web applications. It requires specific parameters to function correctly, including cache settings, port, and origin. 

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Installation

Follow these steps to set up the Proxy Cache CLI application:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/proxy-cache-cli.git
   cd proxy-cache-cli

2. **Install the node modules**
    ```bash
    npm install
    ```

3. **Activate the library with link**
    ```bash
    npm link
    ```

## Usage

To start the caching proxy server, run the following command:

```bash
proxy-cache -p --port <number> -o --origin <url>
```

- `--port`: The port on the caching proxy server.
- `--origin`: The URL of the origin server.

Example:

```bash
proxy-cache --port 4040 --origin http://dummyjson.com
```

### Cleaning cache

The cache can be cleared with the following command:

```bash
proxy-cache -c --clean
```