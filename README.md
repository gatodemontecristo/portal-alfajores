<br />
<div align="center">
  <a href="https://github.com/gatodemontecristo/portal-alfajores">
     <img src="https://github.com/gatodemontecristo/portal-alfajores/blob/onebranchtoconquerthemall/public/logo/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Alfajor portal - Payment report vs4</h3>

  <p align="center">
    Payment report to manage money owed for late attendance, made with Typescript, React.js and Tailwind.css
    <br />
  </p>
</div>

### Technologies

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* 	![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* 	![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* 	![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
* 	![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* 	![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

### Used Pages/Libraries

Icons page (1) -> https://heroicons.com/

Icons page (2) -> https://www.flaticon.es/icono-gratis/alfajor_4457051

Mockups page -> https://shots.so/

Identifiers generator -> https://www.npmjs.com/package/uuid

Zustand -> https://zustand-demo.pmnd.rs/

### Desktop screenshots

![image](https://github.com/user-attachments/assets/1de20bb2-1823-4559-9cb8-f87486dcc10d)
![image](https://github.com/user-attachments/assets/4a19953b-45c5-4baa-8051-90f9de4b870c)

### Mobile screenshots

![image](https://github.com/user-attachments/assets/8784aed4-0518-4af5-9951-8b58fbf4be08)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
