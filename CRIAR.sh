#!/bin/bash 

echo -e "Qual o nome da tarefa que deseja criar?"
read tarefa

curl -X POST http://localhost:8080/artigo  -H 'Content-Type: application/json' -d '{"nome": "'$tarefa'", "status": "200"}'
