FROM node:21.7.3

WORKDIR /dojo-ui

COPY . .

RUN chmod 755 entrypoint.sh

ENTRYPOINT ["/dojo-ui/entrypoint.sh"]
