# Reserlab

## Instalación

Antes de instalar el proyecto, debes de tener [Node.js](nodejs.org) y el npm package manager instalados, después abrir una terminal y comenzar:

npm install -g @angular/cli (instalará y actualizará Angular)

npm install (creará la carpeta node_modules y su contenido)

## Desplegar aplicación

Para desplegar la app hay que acceder a la carpeta "reserlab-server" en una terminal separada y ejecutar

### json-server --watch db.json

Después puedes ir a la carpeta del proyecto y ejecutar

### ng serve -o

El comando compliará la aplicación y la ejecutará en el localhost:4200 ya lista para usar (el -o es para que abra una pestaña de navegador automáticamente en cuanto compile)
