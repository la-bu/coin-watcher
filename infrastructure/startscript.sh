#!/bin/bash

echo -e "\033[32m--- Build Docker-Image for core backend service ---\033[0m"
docker build -t grpc_core_backend ../core

echo -e "\033[32m--- Build Docker-Image for frontend-client ---\033[0m"
docker build -t grpc_frontend_client ../frontend-client

echo -e "\033[32m--- Build Docker-Image for envoy proxy ---\033[0m"
docker build -t grpc_envoy ../envoy

echo -e "\033[32m--- Bringing up the project ---\033[0m"
docker-compose up