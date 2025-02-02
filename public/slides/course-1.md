## Introduction aux APIs et au web connecté

Thomas Paillot – Ingénieur frontend

Hugo Gresse – Ingénieur mobile 

---

## Qu’est-ce qu’une API ?

### Application Programming Interface

> On parle d'API à partir du moment où une entité informatique cherche à agir avec ou sur un système tiers et que cette interaction se fait de manière normalisée en respectant les contraintes d'accès définies par le système tiers. On dit alors que le système tiers « expose une API ».
> Source : *Wikipedia*

---

## Qu’est-ce qu’une API ?

### Examples

![Numpy API documentation 1](/slides-miashs-2025/images/numpy-api-1.png)

------

![Numpy API documentation 2](/slides-miashs-2025/images/numpy-api-2.png)

------

![iOS API documentation 2](/slides-miashs-2025/images/ios-api-1.png)

---

## API REST

- APIs qui adhèrent à un standard particulier, celui de l'architecture REST, décrite dans les années 2000 par Roy Fielding au cours de sa thèse de doctorat.
- Massivement utilisé aujourd’hui pour les communications client-serveur sur le web

[Définition (tinyurl.com/5b3kk5zp)](https://about.gitlab.com/fr-fr/blog/2024/09/04/what-is-rest-api/)

---

## API REST

### Architecture client-serveur

![Web architecture client-server](/slides-miashs-2025/images/web-architecture.jpg)

---

## API REST

### Protocole HTTP

![Procole HTTP](/slides-miashs-2025/images/client-server-architecture.png)

<a href="/dist/reveal.js" target="_blank">Example requête HTTP</a>

---

## API REST

### Protocole HTTP

#### Request

- URL : `https://...`
- Query params: `?key=value&another_key=value // part of the url`
- Method : `GET | POST | PUT | PATCH | DELETE`
- Headers: `key=value, ...`
- Body: `Something you want to send to the server`

---

## API REST

## Protocole HTTP

### Response

- Status code : `200 | 401 | 500...`
- Headers: `key=value, ...`
- Body : `Some content the server is sending back to you`

---

## API REST

### Ressource

L’abstraction clé de l’information dans REST est une ressource. Toute information que nous pouvons nommer peut être une ressource. Par exemple, une ressource REST peut être un document ou une image, une collection d'autres ressources, ou un objet non virtuel (par exemple, une utilisateur).

Dans une application de messagerie par exemple, “messages" est une ressource de collection et “message” est une ressource *singleton*.

------

- `GET /messages`
- `└1┘  └──2───┘`
- `    └───3───┘`
  - Permet de récupérer tous les messages
  - 1. Verbe
  - 2. Collection
  - 3. URI
- `GET /messages/{messageId}`
- `└1┘  └──2───┘ └────3────┘`
- `    └────────4──────────┘`
  - Permet de récupérer un message en particulier
  - 1. Verbe
  - 2. Collection
  - 3. Paramètre
  - 4. URI

------

- `POST /messages`
- `└─1┘  └──2───┘`
- `     └───3───┘`
  - Permet de créer un nouveau message
  - 1. Verbe
  - 2. Collection
  - 3. URI
- `DELETE /messages/{messageId}`
- `└──1─┘  └──2───┘ └────3────┘`
- `       └────────4──────────┘`
  - Permet de supprimer un message en particulier
  - 1. Verbe
  - 2. Collection
  - 3. Paramètre
  - 4. URI

---

## API REST

### Exemple

[Weather API](https://www.weatherapi.com/) / [Weather API docs](https://www.weatherapi.com/docs/) / [Weather API swagger](https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2)


- Url de base : [http://api.weatherapi.com/v1](http://api.weatherapi.com/v1)
- Route permettant de récupérer les alertes [http://api.weatherapi.com/v1/alerts](http://api.weatherapi.com/v1/alerts.json?key=c75e9f077e38431b8fc84752251301&q=43.6109200,3.8772300)
- Route permettant de récupérer les prévisions [http://api.weatherapi.com/v1/forecast](http://api.weatherapi.com/v1/forecast.json?key=c75e9f077e38431b8fc84752251301&q=43.6109200,3.8772300&days=5)

---

## API REST

### Exercice

- Créez votre compte sur weatherapi.com
- Récupérez votre clé d'API dans votre compte
- Utiliser la documentation ou la page swagger pour prendre connaissance de l'API
- Trouver quelle était la température maximale le 24 décembre 2024 à Papeete et quelle était la phase de lune ce jour là

---

## QCM 

https://forms.gle/kPXpAaH6MiYAQQBe6

<img src="https://github.com/user-attachments/assets/fa424d55-883f-4d67-b2a4-8969cd601db3" width="300" height="300" alt="qr-code">
