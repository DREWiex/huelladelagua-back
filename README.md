# huelladelagua-back
Desafío de tripulaciones ENE23.
***

## BACK-END proyecto huella del agua 
Éste es el proyecto back-end de La Huella Del Agua, del desafío de tripulaciones de
The Bridge de Enero 2023.
***

## PARA COMENZAR
Deberemos descargar el repositorio en nuestro ordenador con un git clone .

Luego deberemos añadir los datos proporcionados en el archivo ```.env.template``` , y eliminar el ```.template```.

A continuación, instalaremos las dependencias del proyecto, con el
comando ```npm install``` .

Y para finalizar, deberemos iniciar el proyecto con el comando
```npm run start``` .

***

# Endpoints
- GET http://localhost:3000/api/v1/getfulldata : Recoge los datos de todos los formularios guardados.

- POST http://localhost:3000/api/v1/saveQuestionnaire : Guarda un questionario, con un objeto con las quiz del 1 al 15. ejemplo: ```"quiz1":"Menor de 18 años"```.

-DELETE http://localhost:3000/api/v1/deleteone/:id : Borra un questionario mandando por parámetros el ObjectId de Mongo.