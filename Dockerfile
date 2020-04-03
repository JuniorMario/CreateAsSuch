FROM keymetrics/pm2:10-alpine


RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./ 
COPY ecosystem.config.js ./ 
RUN npm install



COPY . . 
COPY --chown=node:node . . 

USER node
EXPOSE 3000 9229 6379 3308 3306

CMD pm2 start --no-daemon --watch ecosystem.config.js