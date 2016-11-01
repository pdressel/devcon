#!/bin/bash

docker build -t pdressel/devcon:frontend frontend
docker build -t pdressel/devcon:backend backend
docker push pdressel/devcon:frontend
docker push pdressel/devcon:backend
