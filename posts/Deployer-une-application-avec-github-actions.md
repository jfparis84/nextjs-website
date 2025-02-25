---
title: Déployer une app Next.js avec les GitHub Actions.
description: Déployer une application Next.js sur AWS avec les GitHub Actions. Suis moi étape par étape dans l'élaboration de cette solution.
keywords: GitHub, DevOps, Next.js, AWS
date: 2025-02-24T20:00:00.000Z
image: /assets/img/andy-hermawan-bVBvv5xlX3g-unsplash.jpg
categories:
  - GitHub
  - DevOps
  - Next.js
  - AWS
---

![Déployer une app Next.js avec les GitHub Actions!](/assets/img/andy-hermawan-bVBvv5xlX3g-unsplash.jpg "Déployer une app Next.js avec les GitHub Actions")

<div class="caption">
Photo de <a href="https://unsplash.com/@kolamdigital">Andy Hermawan</a> sur <a href="https://unsplash.com">Unsplash</a>.
</div>

## Avant d'aller plus loin 🛑
Je vous montrerai comment déployer une application Next.js en format statique ([SSG](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)). Cette technique génère une application web en mode statique (HTML / CSS / JS) ultra rapide. Évidemment aucun calcul ou opération n'est nécessaire pour ce type d'application.

Si vous avez des services dans votre application qui nécessite des opérations à votre backend (BDD, ressources sécurisées).
On parle alors de Server Side Rendering ([SSR](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering))

## Définition

### [GitHub Actions](https://github.com/features/actions)

GitHub Actions est un outil de CI/CD directement inclus dans votre abonnement GitHub.
À l'aide d'un simple fichier YML, nous allons être en mesure d'orchestrer tout le processus.

Si c'est disponible, pourquoi ne pas l'utiliser pour automatiser le déploiement de notre application [Next.js](https://nextjs.org/) sur 
l'environnement de production.

### [AWS](https://aws.amazon.com/)

Amazon Web Services est l'un des grands fournisseurs d'infonuagique dans le monde.
Nous allons utiliser quelques services (IAM, S3, CloudFront) pour les besoins de cette solutions.

- **AWS IAM** : afin de limité l'accès (ZeroTrust) à nos ressources par le CI/CD.
- **AWS S3** : où nos fichiers seront stockés. 
- **AWS CloudFront** : notre réseau de diffusion de contenu (CDN)

<div class="bg-amber-100 p-4 rounded-md text-amber-800 mb-3">
  Je prends pour acquis que vous avez déjà tout configuré dans votre environnement de AWS.
</div>

<small>

*Vous pouvez utiliser un autre fournisseur infonuagique, AWS est à titre d'exemple*

</small>

## 1. Création du fichier workflows YML

Vous devez créer un fichier __`.github/workflows/[actions].yml`__ à la racine de votre projet afin de commencer à utiliser les GitHub Actions.

```shell
mkdir ./.github && mkdir ./.github/workflows && touch ./.github/workflows/deploy.yml
```

Avec cette commande, vous aurez un fichier prêt à être utilisé pour commencer à configurer votre workflow.

Vous pouvez aussi créer le fichier sur GitHub dans l'onglet **Actions** de votre projet.

## 2. Configuration de notre fichier

Dans votre éditeur de code préféré, vscode bien sûr 👨‍💻, vous pouvez commencer à configurer le CI/CD

### 2.1 Nom de l'action

Le nom permet de différencier les différentes actions qui peuvent d'exécuter dans le CI/CD

```yml
name: Deploy on s3 bucket
```

### 2.2 Les déclencheurs (on)

Les déclencheurs sont les règles lorsque l'action sera exécutée.

```yml
on:
    push:
        branches:
            - main
```

Dans ce cas-ci, le déclenchement se fait à chaque __`push`__ sur la branche __`main`__ 

### 2.3. Les tâches (jobs) 💪

Les tâches sont les différentes étapes à effectuer pour construire l'application et la déployer dans ce cas-ci.

```yml
jobs: 
    build:
        runs-on: ubuntu-latest

        steps:
            - name: Checkout repository
              uses: actions/checkout@v4

            - name: Set up Node.js
              uses: actions/setup-node@v4
              with:
                node-version: 22

            - name: Install dependencies
              run: npm install

            - name: Build Next.js app
              run: npm run build

            - name: Upload to S3
              uses: jakejarvis/s3-sync-action@v0.5.1
              with:
                args: --delete
              env:
                AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
                AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
                AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
                AWS_REGION: "us-east-1"
                SOURCE_DIR: "out"

            - name: Invalidate CloudFront cache
              run: |
                  aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
              env:
                AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
                AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
                AWS_REGION: "us-east-1"
```

Ce fichier peut paraître intimidant 😱 au départ mais si on le regarde tranquillement c'est assez clair.

On commence par une tâche que j'ai nommée __build__, celle-ci sera rouler dans un conteneur __ubuntu-latest__ dans 
l'infrastructure de GitHub. Par la suite, toutes les étapes seront appelées de façon séquentielle.

- __Checkout repository__ : checkout le code dans le conteneur
- __Set up Node.js__ : installation de node.js dans le conteneur
- __Install dependencies__ : installation des dépendances de notre projet
- __Build Next.js app__ : build de notre application next.js
- __Upload to S3__ : téléverser les fichiers de votre build sur S3
- __Invalidate CloudFront cache__ : vider la cache de notre CDN

## 3. Gestionnaire de secrets 🔒

Dans le fichier précédent, vous avez surement remarqué l'utilisation de variable comme  
__`${{ secrets.AWS_ACCESS_KEY_ID }}`__.

C'est variable sont importantes car on ne veut pas exposer nos secrets dans notre codebase.

Ce qui est bien, c'est que GitHub Actions y a pensé :)  
Dans GitHub, sous l'onglet __Settings__ - __Secrets and variables__ - __Actions__  
Vous pouvez définir vos secrets sous forme de clé/valeur. De cette façon le tout reste sécuritaire et on aime ça. ❤️

Si vous utilisez vscode, une extension est disponible pour la gestion de vos secrets.  
[GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)

## Conclusion

Nous avons vu comment il est facile avec simplement un fichier __YML__ d'utiliser les __GitHub Actions__ afin de déployer
notre application sur un AWS.

J'espère vous avoir donné l'envie d'essayer __GitHub Actions__ afin d'automatiser des tâches de CI/CD.
Vous allez voir, vous n'allez plus vous en passez. 😍

Merci d'avoir suivi jusqu'à la fin. 🤪
