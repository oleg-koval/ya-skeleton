FROM node:10.10.0
MAINTAINER kvl.olg@gmail.com

RUN useradd --user-group --create-home --shell /bin/false nodejs

ENV HOME="/home/nodejs"
ENV LOGS="/home/nodejs/logs"
ENV NODE_ENV="production"
ENV LOGGER="$HOME/app/node_modules/.bin/bunyan"

COPY package.json $HOME/app/
RUN chown -R nodejs:nodejs $HOME/*
RUN mkdir $LOGS
RUN chown -R nodejs:nodejs $LOGS/

USER nodejs
WORKDIR $HOME/app
RUN npm install

CMD ["npm", "start"]
