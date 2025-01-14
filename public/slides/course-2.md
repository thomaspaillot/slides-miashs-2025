## Introduction à javascript

du JS coté serveur avec Node 
et de la programmation asynchrone : vous devez gérer des temps de réponse de serveur externe, des problemes réseaux, etc. 

## Node 

`node index.js` : exécute le fichier index.js dans un terminal 

Merci d'avoir au moins Node 20 ou plus récent (genre node 22) 

## Fetch 

Récupérer une ressource en ligne 

```
const result = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json") 
```

## Asynchrone 

```
const result = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
const text = await result.text()
const jsonData = JSON.parse(text)
```

## Asynchrone avec les erreurs

```
const result = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
if ( result.ok ) {
  const jsonData = await result.json() 
}  else {
  // do whatever the fuck you need here
} 
```

When in doubt, refer to MDN doc : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Exemple dans le navigateur avec themoviedb 


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




