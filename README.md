# TodoList NestJS - Évaluation Finale

## Membres du Groupe
- ANGO Shalom
- Maxime DIVERT

## Description du Projet
Ce projet évalue notre maîtrise du framework NestJS en implémentant une application TodoList. Nous avons utilisé MongoDB comme base de données NoSQL et configuré TypeORM pour la gestion de la base de données relationnelle.

## Utilisation de la Base de Données
Nous avons utilisé MongoDB comme base de données NoSQL pour ce projet. TypeORM a été configuré pour interagir avec la base de données relationnelle.

## Configuration et Exécution du Projet
Pour exécuter le projet, nous utilisons Docker pour lancer la base de données. Ensuite, nous utilisons la commande `npm start` pour démarrer le serveur NestJS.

## Exécution des Tests (Windows)
Sur Windows, pour lancer les tests, nous utilisons la commande suivante :

```
$env:DBMS = "mongodb"; docker-compose --env-file ./.env -f ./docker/docker-compose-mongodb.yml up -d; npx jest --config ./test/jest-e2e.json
```

Cette commande configure la base de données MongoDB via Docker, puis exécute les tests à l'aide de Jest avec la configuration spécifiée.