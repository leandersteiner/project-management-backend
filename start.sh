#!/bin/bash

docker compose down
docker image rm mauw-ss2023-backend-backend

docker compose up -d db
npm run start:dev
