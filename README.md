## How to use:

```
- clone the project locally
- cd project
- in api directory rename .env.example file to .env and add your own value for JWT_KEY
- run docker-compose build --no-cache
- run docker-compose up
- navigate to http://localhost:3000
```

## Testing:

```
- make sure you are using node version up ^10

- cd client
- npm ci
- npm test

- cd api
- npm ci
- npm test
```
