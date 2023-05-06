#!/bin/bash

docker compose -f ./deployment/docker-compose.yaml down
docker image rm mauw-ss2023-backend-backend

docker compose -f ./deployment/docker-compose.yaml up db -d
npm run start:dev
