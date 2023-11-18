#!/bin/bash

docker compose down
docker image rm project-management-backend

docker compose -f docker-compose.dev.yaml up db -d
npm run start:dev
