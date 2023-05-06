#!/bin/bash
# Build service
docker build --tag leandersteiner/mauwss2023 ./deployment
docker image push leandersteiner/mauwss2023
