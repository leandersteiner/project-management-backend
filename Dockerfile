# Build
FROM node:19-alpine as builder
WORKDIR /service
COPY .. .
RUN npm install
RUN npm run build

# Run
FROM alpine:latest
RUN apk update && apk add nodejs npm && rm -rf /var/cache/apk/*
WORKDIR /service
COPY package.json .
COPY --from=builder /service/dist ./dist
COPY client ./client
RUN npm install --omit=dev
EXPOSE 8081
ENV NODE_ENV=prod

CMD [ "npm", "run", "start:prod" ]
