# web
* Node.JS ToDo front-end application

## Running locally

```bash
$ npm install
$ npm start
```

## Running with docker-compose

Ensure you set your /etc/hosts to have an entry for `api`:

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1 localhost
::1 localhost
127.0.0.1 api
```

```bash
$ docker-compose up
```
