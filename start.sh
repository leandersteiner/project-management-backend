#!/bin/bash

docker compose rm -f
docker image rm mauw-ss2023-backend-backend

docker compose up
