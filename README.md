# attendance-record

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### push S3
```
aws --profile admin s3 sync dist/ s3://sample.muratamuu.com --acl public-read
```
