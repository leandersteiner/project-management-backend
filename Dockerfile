# Build
FROM node:19-alpine as builder
RUN mkdir -p /home/service
WORKDIR /home/service
COPY . .
RUN npm install
RUN npm run build

# Run
FROM alpine:latest
RUN apk update && apk add nodejs npm && rm -rf /var/cache/apk/*
RUN mkdir -p /home/service
WORKDIR /home/service
COPY ./package.json ./
WORKDIR /home/service
COPY --from=builder /home/service/dist ./dist
RUN npm install --omit=dev

CMD [ "npm", "run", "start:prod" ]
