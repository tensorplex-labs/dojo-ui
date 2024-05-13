FROM node:21.7.3

WORKDIR /dojo-ui

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]