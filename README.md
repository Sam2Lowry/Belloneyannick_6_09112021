# Piiquante
Projet 6 du parcours développeur web d'OpenClassrooms : Construisez une API sécurisée pour une application
d'avis gastronomiques

![Piiquante](https://i.imgur.com/cgjpZ6o.png)

## :notebook_with_decorative_cover: Objectifs attendus
- l'API de cette application est construite selon des pratiques de **code sécurisées** 
- L'API doit respecter le **RGPD** et les standards **OWASP**
- La base de données utilisée devra être **MongoDB**
- Toutes les erreurs de la base de données doivent être suivies par un plugin (**Mongoose-morgan** dans notre cas)
- Nous devons vérifier les adresses éléctroniques pour éviter tout doublon dans la DB.
- Toutes les routes passeront par une authentification par **token** (JWT ici)

## :label: Compétences évaluées
- Implémenter un modèle logique de données conformément à la réglementation
- Stocker des données de manière sécurisée
- Mettre en œuvre des opérations CRUD de manière sécurisée

## Sources : 
- Voici le repo du [Frontend](https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6)
- Ici vous trouverez les spécifications liées à [l'API](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf)


## :old_key: Installation du backend
Installer `nodejs` et `npm` sur votre machine en local. Après, se positionner sur le dossier backend à partir du projet.
```
> cd backend
```
Ensuite, installer les composants du projet.
```
> npm install
```
Enfin, lancer le projet avec `nodemon serve`
```
> nodemon serve
```
Le serveur sera accessible sur http://localhost:3000 par défaut.

## :rocket: Installation du frontend
Le projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.
Pour le faire fonctionner, installer `node-sass` à part.
Après, se positionner sur le dossier frontend à partir du projet.
Ouvrez le fichier Package.json et modifiez la version de run-script-os en **"run-script-os": "^1.1.6"**

```
> cd frontend
```
Ensuite, installer les composants du projet.
```
> npm install
```
Enfin, démarrer `ng serve` pour avoir accès au serveur de développement. Rendez-vous sur `http://localhost:4200/`.
```
> ng serve
```