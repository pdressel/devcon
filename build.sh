#!/bin/bash

docker build -t pdressel/devcon:frontend2 frontend
docker build -t pdressel/devcon:backend backend
docker push pdressel/devcon:frontend2
docker push pdressel/devcon:backend
