FROM ubuntu

# Create app directory
WORKDIR /home
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
RUN apt-get update -y && apt-get install -y redis-server && apt-get install -y npm
RUN npm install
RUN service redis-server stop
RUN redis-server --port 5000 &
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000 9229 6379
CMD [ "npm", "start" ]
