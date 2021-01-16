# JWT Authentication with Node, MongoDB, and Express

This repo is based off of the tutorial [here](https://www.youtube.com/watch?v=2jqok-WgelI&t=1s&ab_channel=DevEd)

I have added a simple deployment with `docker-compose` so you don't have to create a Mongo DB yourself.
## Run locally

Create a `config.env` file styled after `config.env.example`. Its usually good practice not to put
your URI in github but in this case you will want to use `mongodb://mongo:27017/jwt` since we will
be using Docker to setup our Mongo DB with collection name `jwt`. Your `TOKEN_SECRET` can just be
a random string like `43987594387pdkufhg8734` for demo purposes.

Once this is setup run `docker-compose up` which will create your DB and expose your backend on port 3000.