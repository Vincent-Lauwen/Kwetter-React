FROM node as base
RUN apt-get update && apt-get install chromium -y
WORKDIR /buildapp
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
RUN npm run build

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN npm i -g serve
RUN bash -c "serve -s build" & npm run test:e2e