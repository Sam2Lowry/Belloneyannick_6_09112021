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
Installer [`nodejs`](https://nodejs.org/fr/download/) et [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) sur votre machine en local. Après, se positionner sur le dossier backend à partir du projet.
```
> cd backend
```
Ensuite, installer les composants du projet.
```
> npm install
```
Enfin, lancer le projet :
```
> npm run devStart
```
Le serveur sera accessible sur http://localhost:3000 par défaut.

## :rocket: Installation du frontend
Le projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2. <br />
Pour le faire fonctionner, installer le `node-sass` correspondant en suivant ce lien : [Node-sass](https://www.npmjs.com/package/node-sass)  <br />
Après, se positionner sur le dossier frontend à partir du projet.  <br />
Ouvrez le fichier *Package.json* et modifiez la **version** de *run-script-os* en **"run-script-os": "^1.1.6"**

```
> cd frontend
```
Ensuite, installer les composants du projet.
```
> npm install
```
Enfin, démarrer votre frontend avec la commande : 
```
> npm run start
```
Si jamais le port 3000 est déjà utilisé : 
```	
npx kill-port 3000
```

Avec l'utilisation de variables environnementales (dotenv), pour le bon fonctionnement de l'application il faut substituer trois clefs : 

**App.js**
*ligne 14*
process.env.DATABASE_URL 
A remplacer par votre vos identifiants de connexion MongoDB
 
**user.js**
*ligne 35*
process.env.SECRET_KEY
A remplacer par une clef X de votre choix.
           
**auth.js**
*ligne 15*
process.env.SECRET_KEY
Remplacer par la clef X utilisé ci-dessus

