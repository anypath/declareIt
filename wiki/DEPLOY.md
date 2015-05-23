
## Deploying to server

#### Configure the app
```
mv server/config/local.env.sample.js server/config/local.env.js
vi server/config/local.env.js
-- replace with the configuration items to env specific values
```

#### Build the app
```
npm install
bower install
grunt build --force
```


#### Start the app
```
export export NODE_ENV="production"
sh start.sh
```

#### Verify the running of the app
```
curl http://localhost:8080/api/items
```
(or)
Open http://localhost:8080/api/items in browser


#### Stop the app
```
sh stop.sh
```
