---
title: Comment installer Tailwind CSS avec Next.js
description: Tailwind CSS, un framework facile a installer et configurer dans un projet Next.js. Un jeu d'enfant 😃
keywords: Tailwind CSS, Next.js, Installation Tailwind CSS
date: 2022-11-17T20:00:00.000Z
image: /assets/img/maik-jonietz-_yMciiStJyY-unsplash.jpg
categories:
  - CSS
  - Tailwind CSS
  - Next.js
  - SCSS
---

![Un saut dans le vide!](/assets/img/maik-jonietz-_yMciiStJyY-unsplash.jpg "Un saut dans le vide")

<div class="caption">
Photo de <a href="https://unsplash.com/@der_maik_">Maik Jonietz</a> sur <a href="https://unsplash.com">Unsplash</a>.
</div>

Nous allons passer en détail les étapes à suivre pour installer et configurer [Tailwind CSS](https://tailwindcss.com/) avec [Next.js](https://nextjs.org/). Vous allez voir, c'est simple et facile, un vrai jeu d'enfant 🙈🙉🙈🙉

## 1. Création d'un projet Next.js, dahhhh

Évidemment, si vous voulez installer __Tailwind CSS__ sur votre projet existant, vous pouvez sauter cette étape. 🤪

```shell
npx create-next-app@latest
```

## 2. Installation de Tailwind CSS

Nous allons maintenant installer __`tailwindcss`__, __`postcss`__ et __`autoprefixer`__ via npm.

Par la suite, nous allons lancer la commande __init__ pour générer 2 fichiers de configuration. __`./tailwind.config.js`__ et __`./postcss.config.js`__ 

```shell
npm i tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 3. Configuration des paths pour nos vues

Dans le fichier __`./tailwind.config.js`__, il faut ajouter les paths pour nos vues.
Dans un projet Next.js, habituellement, nous avons les __`./pages`__ et les __`./components`__.
Si vous avez d'autres chemins à configurer pour votre projet, vous pourrez les ajouter à cet endroit.

```js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Comme vous le constater, vous pouvez ajouter d'autres sections de votre application.
Ces chemins dictent où se trouvent vos pages / components utilisant des classes de Tailwind CSS.

Une des forces de __Tailwind CSS__ c'est que votre fichier de feuille de style est ultra léger. 
En effet, __Tailwind CSS__ compilera seulement les classes qui sont utilisées dans votre projet. 😃

## 4. Ajout des directives Tailwind CSS sur votre CSS

Nous allons maintenant ajouter les directives de __Tailwind CSS__ sur notre fichier __`./styles/globals.[scss,css]`__.  
*Si vous vous dites : heuuuu, scss ??? [voir la doc](https://sass-lang.com/documentation/syntax)*

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

On ne lâche pas, on en y est presque 😉

## 5. Démarrer l'application 🚀

On peut maintenant redémarrer l'application, toutes nos étapes de configuration de __Tailwind CSS__ sont terminées.

```shell
npm run dev
```

## 6. Exemple d'utilisation

Vous pouvez maintenant utiliser les classes utilitaires de Tailwind CSS afin de donner du style et de la gueule à votre application web. 😎 

### Dans une page/component
```js
export default function Test() {
  return (
    <h1 className="font-bold text-2xl my-5">J'ai réussi!!!</h1>
  )
}
```

### Dans le fichier ./styles/globals.scss
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  /* Applique la couleur de texte gray-700 sur le body */
  @apply text-gray-700;
}
```

### Dans un fichier css de module ./styles/Test.module.scss
```scss
/* ./styles/Test.module.scss */
.container {
  h1 {
    @apply text-gray-500 font-bold text-2xl my-5;
  }
}
```

```js
/* ./pages/test.jsx */
import styles from "../styles/Test.module.scss";

export default function Test() {
    return (
        <div className={styles.container}>
            <h1>J'ai réussi!!!</h1>
        </div>
    )
}
```

--------

## Conclusion

Nous avons vu comment il est simple d'installer et configurer __Tailwind CSS__ dans une application __Next.js__. 
Dans votre prochain projet __react__, j'espère vous avoir donner l'envie d'essayer __Tailwind CSS__ afin de styliser et designer votre app.
