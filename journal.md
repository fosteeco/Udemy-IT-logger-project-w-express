# Replacing JSON-server with express

```
npm init -y
npm i express mongoose express-validator
npm i -D nodemon concurrently
```

Added to package.json scripts:

```
    "start": "node server.js",
    "server": "nodemon server.js",
```

Created a git repo for this project \
created a server.js file \
Forgot to install config

```
npm i config
```

Added scripts to run react and express concurrently

```
    "react-it-logger-app": "npm start --prefix react-it-logger-app",
    "dev": "concurrently \"npm run server\" \"npm run react-it-logger-app \" "
```
