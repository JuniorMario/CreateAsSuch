FROM alpine/node


WORKDIR /

COPY package.json ./
RUN npm install


COPY . .

EXPOSE 3000 9229 6379 3308 3306
CMD [ "npm", "start" ]
