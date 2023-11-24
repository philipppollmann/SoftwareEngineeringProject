![Test](https://res.cloudinary.com/hl8zoliad/image/fetch/f_auto/https%3A%2F%2Fraw.githubusercontent.com%2Fnuxt%2Fnuxt%2Fmaster%2F.%2F.github%2Fassets%2Fbanner.png)

## technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## IDEs
![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)



## Table of contents

### 01. Project Structure
### 02. Installation
### 03. Development
### 04. Deployment

## Project structure
``` markdown
├── .github/         GitHub Actions Pipeline 
├── .nuxt/           
├── assets/          Images and CSS Files
├── components/      Vue Components
├── layouts/         Nuxt3 Layout with Header and Footer from components
├── pages/           Vue Pages components
├── public/          favicon and Robots.txt
├── server/          TypeScript Logic Files for backend
├── tests/           Unittests
├── .eslintrc.js     Linter Configuration
├── .gitignore       ignore non tracked files
├── .npmrc
├── CNAME            mapping for philipppollmann.github.io => philipp.pollmann.rocks
├── Dockerfile       Dockerfile for Nuxt3 App
├── error.vue        error Page
├── nuxt.config.ts   Nuxt project configuration
├── package.json     list of all npm packages
├── package-lock.json
├── README.md        Documentation
├── RunDocker.sh     Start Dockerfile
└── tsconfig.json    TypeScript Configuration
```

## Installation
````shell
npm install
npm install -D @nuxtjs/tailwindcss
npm install --save-dev jest @vue/test-utils vue-jest babel-jest jest-serializer-vue
npm install --save-dev @vue/eslint-config-jest
````

## Development

```shell
npm run dev
npm test

docker build -t nuxt-app .
docker run -p 3000:3000 nuxt-app

# or

docker-compose up -d
```

## Deployment
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

```shell
npm run generate
```


### `packages`
1. [eslint](https://nuxt.com/modules/eslint)
2. [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)
3. [tailwindcss](https://tailwindcss.nuxtjs.org/)
4. [nuxt-vuetify](https://vuetifyjs.com/en/getting-started/installation/)
5. [vitest](https://nuxt.com/docs/getting-started/testing)

