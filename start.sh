#!/bin/bash

docker compose down
docker image rm mauw-ss2023-backend-backend

docker compose -f docker-compose.dev.yaml up db -d
npm run start:dev
