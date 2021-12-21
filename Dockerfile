FROM node:14-alpine

WORKDIR /var/www

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 80

CMD ["yarn", "start"]