FROM node:14-slim

WORKDIR /usr/src/app

# Copy over package and package lock files
COPY ./package*.json ./

# Install from lock file
RUN npm install

# copy rest of app over (except what is in .dockerignore)
COPY . .

USER node

EXPOSE 3000

CMD ["npm", "start"]

