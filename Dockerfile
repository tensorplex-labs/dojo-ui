FROM node:21.7.3

WORKDIR /dojo-ui

COPY . .

ENTRYPOINT ["entrypoint.sh"]