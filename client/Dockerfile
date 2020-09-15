FROM node:14-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --only=prod
RUN npm install react-scripts -g --silent
COPY . .
RUN npm run build
CMD [ "npm", "start" ]

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]