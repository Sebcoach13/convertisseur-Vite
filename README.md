# React + Vite

# Convertisseur de Vitesse (React & Vite)

Voici notre projet de convertisseur de vitesse, une application web interactive développée avec React et Vite. Ce projet a été le fruit d'une collaboration étroite entre moi-même Sébastien et Émeline, dans le cadre de notre Licence pr LDCWCA. Il incarne notre démarche d'apprentissage et de mise en pratique des technologies modernes du web.

Initialement, nous avions développé ce convertisseur en utilisant React de manière "pure", avant d'intégrer **Vite** suite aux consignes de notre formation. Cette transition nous a permis d'appréhender les avantages des outils de build modernes pour le développement front-end.

##  Vue d'ensemble du Projet

Ce convertisseur de vitesse a été conçu pour offrir une interface utilisateur simple et efficace, permettant de convertir diverses unités de vitesse de manière intuitive. Notre objectif était de créer une application rapide, réactive et facile à utiliser, tout en explorant les capacités de React pour la gestion de l'état et la construction de composants modulaires.

Nous avons choisi Vite comme outil de build pour sa rapidité fulgurante en développement (Hot Module Replacement) et son processus de build optimisé pour la production. Cela nous a permis de travailler efficacement et de voir nos changements en temps réel.

## Fonctionnalités Clés

  * Conversion Rapide : Convertissez instantanément des vitesses entre différentes unités (par exemple, km/h en m/s etc.).
  * Interface Utilisateur Intuitive : Un design clair et épuré pour une expérience utilisateur agréable.
  * Réactivité : L'application est entièrement réactive et s'adapte à différentes tailles d'écran.
  * Basée sur React : Développée avec la librairie React pour une gestion efficace de l'interface et de l'état des composants (comme la lecture du contenu des champs de formulaire de type `number` ou `text` via le système de `state` de React, comme nous l'avons abordé). Les composants `SpeedInput.jsx`, `SpeedButtons.jsx`, et `SpeedResult.jsx` interagissent avec cet état pour afficher et récupérer les valeurs.
  * Performance Optimale : Grâce à Vite, l'application bénéficie d'une compilation rapide et d'un bundle optimisé pour la production.

##  Technologies Utilisées

  * React : La bibliothèque JavaScript pour la construction de l'interface utilisateur.
  * Vite : L'outil de build de nouvelle génération qui offre un environnement de développement frontend extrêmement rapide.
  * JavaScript (ES6+)
  * ESLint : Pour maintenir la qualité et la cohérence de notre code.
  * Git & GitHub : Pour le contrôle de version et la collaboration.

## Démarrage Rapide

Pour cloner et exécuter ce projet en local :

1.  Cloner le dépôt :
    ```bash
    git clone https://github.com/Sebcoachl13/convertisseur-Vite.git
    ```
2.  Naviguer dans le répertoire du projet :
    ```bash
    cd convertisseur-Vite
    ```
3.  Installer les dépendances :
    ```bash
    npm install
    ```
4.  Lancer le serveur de développement :
    ```bash
    npm run dev
    ```
    L'application sera alors accessible dans votre navigateur à l'adresse indiquée par Vite (généralement `http://localhost:5173` ou un autre port disponible, comme `http://localhost:5174` si 5173 est déjà utilisé).

##  Build pour la Production

Pour créer une version optimisée de l'application prête pour le déploiement :

```bash
npm run build
```

Ceci générera un dossier `dist/` à la racine du projet, contenant tous les fichiers statiques optimisés (HTML, CSS, JavaScript). C'est le contenu de ce dossier `dist` que nous avons déployé sur Alwaysdata.

##  Contribution

Ce projet est une démonstration de nos compétences et de notre collaboration dans le cadre de notre formation. Nous sommes ouverts aux retours et suggestions.

##  Licence

Ce projet est sous licence [Ajoutez le type de licence ici, par exemple : MIT].

##  Nos Contributeurs (Étudiants en Licence 3 LDCWCA)

  * Sébastien
  * Émeline
  * [Votre Nom]

-----

##  Références Techniques

Voici les documentations et ressources officielles des outils et technologies clés que nous avons utilisés pour ce projet :

  * Vite.js : [https://vitejs.dev/](https://vitejs.dev/)
  * React : [https://react.dev/](https://react.dev/)
  * @vitejs/plugin-react : [https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  * Babel : [https://babeljs.io/](https://babeljs.io/)
  * @vitejs/plugin-react-swc : [https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  * SWC : [https://swc.rs/](https://swc.rs/)
  * ESLint : [https://eslint.org/](https://eslint.org/)
  * TypeScript (si utilisé) : [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
  * typescript-eslint (si utilisé avec TypeScript) : [https://typescript-eslint.io/](https://typescript-eslint.io/)

-----
