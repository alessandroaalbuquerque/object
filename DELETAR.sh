#!/bin/bash 

echo "Qual o ID da tarefa que deseja deletar?"
read "tarefa"

curl -X DELETE http://localhost:8080/artigo/$tarefa -H 'Content-Type: application/json'
