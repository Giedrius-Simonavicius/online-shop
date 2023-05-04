## eslint instal

1. `npm install vite-plugin-eslint eslint eslint-config-react-app --save-dev`
2. .eslintrc > `{"extends": ["react-app"]}`
3. vite.config.js >> import eslint from 'vite-plugin-eslint';
4. vite.config.js >> plugins: [react(), eslint()],

## React router

https://www.npmjs.com/package/react-router - npm https://reactrouter.com/en/main - docs

npm i react-router-dom
prideti BrowserRouter i main.jsx import { BrowserRouter } from 'react-router-dom';
susikurti Routes ten kur bus generuojami koponentai.
Navigacijai naudojam Link ir NavLink komponentus.
