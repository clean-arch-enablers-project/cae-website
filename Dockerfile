FROM node:22.7.0 AS BUILDER

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22.7.0

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]