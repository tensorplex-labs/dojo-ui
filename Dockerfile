FROM node:21.7.3

WORKDIR /dojo-ui

COPY . .
RUN npm install --force
RUN export NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL && npm run build

RUN chmod 755 entrypoint.sh

ENTRYPOINT ["/dojo-ui/entrypoint.sh"]
