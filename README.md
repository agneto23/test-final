# Test Final Devops

## Local

Para ejecutar el proyecto en un ambiente local tener en cuenta lo siguiente:
1. Colocarse en la ruta del proyecto
1. Instalar dependencias `npm install`
2. Generar minified/concatenated del proyecto `npm run build:all`
4.  Ejecutar tests `npm run test`
5. Ejecutar server local `npm run server`

## Local con Docker

Para ejecutar el proyecto en un ambiente local dockerizado tener en cuenta lo siguiente:
1. Colocarse en la ruta del proyecto
1. Contruir imagen docker `docker build -t test:1.0.0 -f Dockerfile .`
2. Ejecutar contededor `docker run -p 3000:3000 test:1.0.0`

## Internet

La ip asignada al Load Balancer creado en google cloud es: http://35.226.59.235

## Prueba CURL

### Request

curl -X POST -H "X-Parse-REST-API-Key:2f5ae96c-b558-4c7b-a590-a501ae1c3f6c" -H "X-JWT-KWY:token" -H "Content-Type: application/json" -d '{ "message" : "This is a test", "to": "Juan Perez", "from": "Rita Asturia", "timeToLifeSec" : 45 }' http://35.226.59.235/DevOps

### Response

{
    "message": "Hello Juan Perez your message will be send"
}

## Generacion de token para pruebas

Si se desea generar un token para la prueba con jwt, se creo servicio especifico para la generacion

### Request

curl -X GET http://35.226.59.235/token

### Response

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2MTU1MzA5NDksImV4cCI6MTYxNTUzMjc0OX0.ZpfMnr-pGGDs5Ckh39q65TG139WL9wq-LcYb-lc8fI4"}

