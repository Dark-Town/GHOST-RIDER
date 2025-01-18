FROM quay.io/zwcoder/ghost-rider:latest

WORKDIR /GHOST-RIDER
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["pm2-runtime", "ecosystem.config.js"]
