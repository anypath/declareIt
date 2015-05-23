# declareIt

#### Deploymnet steps
https://github.com/anypath/declareIt/tree/master/wiki/DEPLOY.md

#### Run locally

    npm install
    bower install
    grunt serve
    
#### Verify working of app:

Try adding an entry

    curl -X POST http://localhost:9000/api/items -H "Content-Type: application/json" -d '{"name":"item3"}'
