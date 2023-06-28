# NestJS RabbitMQ Microservice

This is a microservice architecture built with NestJS that interacts with the other server via RabbitMQ message broker.

## Description

This microservice demonstrates how to integrate NestJS with RabbitMQ, allowing for asynchronous communication between services.

## Features

- Create, fetch, update and delete posts from a user into a elephant postgres database
- Create a comment of a specific post into a cloud mongo database
- The main posts server commuincates with the comments server through the message broker