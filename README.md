# Test Final Devops

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

