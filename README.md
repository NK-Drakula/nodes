# Learning Node.js

A hands-on Node.js learning project by **EmmaNkem**, covering core Node.js concepts through practical scripts.

> 📌 Project reference: [https://roadmap.sh/projects/nodejs-folder-info](https://roadmap.sh/projects/nodejs-folder-info)

## Project Structure

```
.
├── app.js           # Entry point — basic Node.js hello world
├── folder-info.js   # CLI tool to inspect folder contents
├── package.json     # Project metadata and scripts
└── README.md        # Project documentation
```

## Scripts

### `app.js`
The main entry point. Currently prints a "Hello World" message to get started with Node.js.

```bash
npm start
# or
node app.js
```

### `folder-info.js`
A CLI tool that prints information about a given folder — its name, absolute path, number of files, and number of subfolders.

```bash
node folder-info.js [path/to/folder]
```

**Arguments:**
- `[path/to/folder]` *(optional)* — Path to the folder you want to inspect. Defaults to the current working directory if omitted.

**Example output:**
```
Folder:  node
Path:    /Users/EmmaNkem/Public/www/Learn/node
Files:   5
Folders: 1
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
# Clone or navigate to the project
cd /path/to/node

# No dependencies required — uses Node.js built-in modules only
```

### Running Tests

```bash
npm test
```

## Author

**EmmaNkem**

## License

ISC
