# FROM node:latest-alpine
FROM node:16-alpine
MAINTAINER lck
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /data/app
COPY . /data/app
WORKDIR /data/app
EXPOSE 3000
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build
CMD ["npm", "start"]