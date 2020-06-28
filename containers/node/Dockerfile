FROM node:alpine

WORKDIR /usr/containers/node

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]