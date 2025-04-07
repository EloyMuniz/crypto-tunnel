FROM node:16-alpine

WORKDIR /usr/app


COPY package*.json ./


RUN npm install --legacy-peer-deps


COPY . .


RUN npm run build


EXPOSE 443

CMD ["npm", "run", "start"]
