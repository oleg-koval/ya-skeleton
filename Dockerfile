FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false nodejs

ENV HOME=/home/nodejs
ENV NODE_ENV=production

COPY package.json $HOME/app/
RUN chown -R nodejs:nodejs /home/nodejs/*

USER nodejs
WORKDIR /home/nodejs/app
RUN yarn

CMD ["npm", "start"]
