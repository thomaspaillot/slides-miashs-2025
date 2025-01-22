## Introduction à javascript

du JS coté serveur avec Node 
et de la programmation asynchrone : vous devez gérer des temps de réponse de serveur externe, des problemes réseaux, etc. 

---

## Node 

`node index.js` : exécute le fichier index.js dans un terminal 

Merci d'avoir au moins Node 20 ou plus récent (node 22) 

---

## Fetch 

Récupérer une ressource en ligne 

```js
const result = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json") 
```

---

## Asynchrone 

```js
const result = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
const text = await result.text()
const jsonData = JSON.parse(text)
```

---

## Asynchrone avec les erreurs

```js
const result = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
if ( result.ok ) {
  const jsonData = await result.json() 
}  else {
  // do whatever the fuck you need here
} 
```

When in doubt, refer to MDN doc : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

---

## Exemple dans le navigateur avec themoviedb 


---

## Alternative avec les callbacks 

```js
fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
  .then((response) => {
      return response.json()
  })
  .then((body) => {
    console.log(body.movies);
  });
```

---

## Séparer la logique dans votre code 

```js
const getMovies = async () => {
  const fetchResult = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
  if ( fetchResult.ok ) {
    return fetchResult.json()
  }
  throw new Error("Failed to get movies... " + fetchResult.statusText) 
} 

const movieList = await getMovies() 

```

---

## Exercice 

0. Si pas de compte : `thomaspaillot` :  `u592Y6%YkBod`
1. Si pas node >= 20 : 
  - linux ou mac : installer node avec nvm: `nvm install 22` (pour installer nvm: `https://github.com/nvm-sh/nvm`)
  - windows : installer node depuis https://nodejs.org/
2. Chercher un film sur themoviedb
4. Ajouter le film dans la watch list
5. Récupérer votre watch list 

  ```
