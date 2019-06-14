# Karma Chameleon



## lando config

```yaml
name: italiaansewijnstramien
recipe: wordpress
config:
  webroot: .
  env: dev
  debug: true
services:
  mailhog:
    type: mailhog
    hogfrom:
      - appserver
    portforward: true
```
