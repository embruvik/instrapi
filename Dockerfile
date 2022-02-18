FROM node:latest
WORKDIR /gp
RUN git clone https://github.com/embruvik/instrapi.git
WORKDIR /gp/instrapi
RUN npm install
CMD ["node", "main.js"]