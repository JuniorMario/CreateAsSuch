FROM node:10




RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

RUN npm install
RUN npm install nodemon -g


COPY . .
COPY --chown=node:node . .
USER node
EXPOSE 3000 9229 6379 3308 3306
CMD nodemon ./bin/www