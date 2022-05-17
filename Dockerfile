FROM node as base
RUN apt-get update && apt-get install chromium -y
WORKDIR /buildapp
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
RUN npm run build


FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=base /buildapp/build /usr/share/nginx/html
