## Projet Javascript

Structurer votre code dans un projet Javascript en utilisant `Npm`

---

## Rappel des derniers cours 

- Exploration des différentes API web (weatherAPI, TMDB…)
- Introduction à la programmation asynchrone avec les `Promises`

Est-ce qu'il y a des questions sur les `Promises` ?

---

## Création du projet 

Structure d’un projet Javascript
- index.js
- package.json 
- package-lock.json
- node_modules/ (généré par npm)

Optionnel:
- README.md 
- .gitignore
- .editorconfig

---

## package.json 

Le fichier package.json est utilisé par Npm (Node Package Manager) pour gérer les dépendances, les scripts de votre projet (équivalent Javascript de PIP et virtualenv)

Utilisation :
```shell
npm init # initialise un projet
npm install # installe toutes les dépendances du projet
npm install express # installe la librairie “express”
```

---

## package.json

```json
{
	"name": "my awesome API",
	"version": "1.0.0",
	  "type": "module",
		"main": "index.js",
		"scripts": {
	    "start": "node index.js"
		},
		"author": "Hugo Gresse",
		"license": "MIT",
	  "dependencies": {
		  "express": "^4.18.2"
	  },
	  "devDependencies": {
		  "nodemon": "^3.0.2",
	  }
}
```

---

## package-lock.json

Ne pas modifier ce fichier, il est généré automatiquement par Npm

---

## node_modules/

Ce dossier est généré automatiquement par Npm, il contient toutes les dépendances du projet
- Ajouter le dans `.gitignore`
- Les dépendances sont installé localement dans chaque projet

---

## Autres

- `.gitignore` : Permet de définir les fichiers et dossiers que vous ne souhaitez pas gérer avec `Git` (.env, node_modules, .motdepasse…) 
- `.editorconfig` : Permet de définir des options de mise en forme des fichiers (espace ou tabulation, taille des tabulations…), votre éditeur de texte se base sur ce fichier
- `README.md`: Pour expliquer comment lancer votre projet, à quoi il sert

---

## Exercice

- Créer un projet Javascript avec `Npm`
- Ajouter `"type": "module"` dans votre fichier `package.json`
- Installer `fastify` avec `Npm`
- Créer un fichier `index.js` et y écrire le code permettant de lancer un serveur web avec Fastify
- Créer plusieurs routes d'API sur votre serveur
  - Une route permettant de rechercher un film
  - Une route permettant d'ajouter un film à sa “watch list” en utilisant son id
  - Une route permettant d'ajouter un film à sa “watch list” en utilisant son titre
  - Une route permettant de retirer un film de sa “watch list” en utilisant son id
  - Une route permettant de retirer un film de sa “watch list” en utilisant son titre
 
  
