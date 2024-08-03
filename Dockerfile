FROM node:21.7.3

WORKDIR /dojo-ui

COPY . .

RUN npm i next

RUN chmod +x entrypoint.sh

ENTRYPOINT ["/dojo-ui/entrypoint.sh"]