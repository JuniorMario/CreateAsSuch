FROM keymetrics/pm2:10-alpine


WORKDIR /app

COPY package.json ./
RUN npm install


COPY . .

EXPOSE 3000 9229 6379 3308 3306
CMD pm2 start --no-daemon --watch ./bin/www
