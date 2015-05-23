npm install forever -g

export NODE_ENV="production"

cd dist

forever start -v --spinSleepTime 10000 server/app.js