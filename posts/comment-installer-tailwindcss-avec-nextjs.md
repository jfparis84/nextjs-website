---
title: Comment installer Tailwind CSS avec Next.js
description: Nous allons voir ensemble comment installer et configurer Tailwind CSS pour vos projets Next.js.
keywords: Tailwind CSS, Next.js, Installation Tailwind CSS
date: 2022-11-17T20:00:00.000Z
image: /assets/img/victor-rodriguez-pWOdBS_l9LQ-unsplash.jpg
categories:
  - CSS
  - Tailwind CSS
  - Next.js
---

![Un saut dans le vide!](/assets/img/victor-rodriguez-pWOdBS_l9LQ-unsplash.jpg "Un saut dans le vide")

<div class="caption">
Photo de <a href="https://unsplash.com/@vimarovi">Victor Rodriguez</a> sur <a href="https://unsplash.com">Unsplash</a>.
</div>

Nous allons passer en détails les étapes à suivre pour installer et configurer [Tailwind CSS](https://tailwindcss.com/) avec [Next.js](https://nextjs.org/). Vous allez voir, c'est un jeu d'enfant 😃

## 1. Création d'un projet Next.js

Évidement, si vous voulez installer __Tailwind CSS__ sur votre projet existant, vous pouvez sauter cette étape. 🤪

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

## 3. Configuration des chemins pour nos vues

Dans le fichier __`./tailwind.config.js`__, il faut ajouter les chemins pour nos vues.
Dans un projet Next.js, habituellement, nous avons les __`./pages`__ et les __`./components`__.
Si vous avez d'autres chemins à configurer pour votre projet, vous pourriez les ajouter à cet endroit.

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
Ces chemins dicteront où se trouvent vos pages / components utilisant des classes de Tailwind CSS.

Une des forces de __Tailwind CSS__ c'est que votre fichier de feuille de style est ultra léger. 
En effet, __Tailwind CSS__ compilera seulement les classes qui sont utilisé dans votre projet. 😃

## 4. Ajout des directives Tailwind CSS sur votre CSS

Nous allons maintenant ajouter les directives de __Tailwind CSS__ sur notre fichier __`./styles/globals.[scss,css]`__

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

On ne lâche pas, on en y est preque 😉

## 5. Démarrer l'application

On peut maintenant redémarrer l'application, toutes nos étapes de configuration de __Tailwind CSS__ sont terminées.

```shell
npm run dev
```

## 6. Exemple d'utilisation

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
.container {
  h1 {
    @apply text-gray-500 font-bold text-2xl my-5;
  }
}
```

```js
import styles from "../styles/Test.module.scss";

export default function Test() {
    return (
        <div className={styles.container}>
            <h1>J'ai réussi!!!</h1>
        </div>
    )
}
```

-----

## Conclusion

