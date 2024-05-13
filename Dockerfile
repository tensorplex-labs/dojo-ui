FROM node:21.7.3

WORKDIR /dojo-ui

COPY . .

CMD ["npm", "run", "start"]