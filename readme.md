git init  
git add readme.md 
git commit -m "Start of react"
git branch -M main
git remote add origin https://github.com/sadat8418/Reactjs.git
git push -u origin main

300Mbps
1. npx create-react-app 01basicReact
npx ..needa loto time

react dom 
ract native

jest-dom
react scripts
web vitals (koto fast choltese webste, tracks)

scripts:
start :dev env te 
build : production
test
eject : eituku kaj cilo ract er .. baki ta kore nibo ...

lint : error, red line dekhay 

#   Vite
2. npm create vite@latest
3. npm i

#   Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# 1 tailwind.config.js
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
# 2 index.css
@tailwind base;
@tailwind components;
@tailwind utilities;