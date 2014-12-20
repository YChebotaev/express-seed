express-seed
============

my express application seed

i prefer use these modules:

* `restify` as web server -)
* `rethinkdb` as database
* `bluebird` as promise library (with rethinkdb)
* `bunyan` as logging library
* `jade` as template language
* `lodash` as multi-purpose utilities
* `stylus` as css preprocessor
* `browserify` as client-side module loader
* `gulp` as `make`
* `passport` as authentication middleware
* `mocha` as a test runner
* `chai` as assertion library

also, i agreed with these phrases:

* global variables sometimes are good idea — we all use global variables in browser since 190x till now, and i don't see reasons whe they finally bad
* requiring all files in a directory is good idea — i don't want to end up with requiring each file in a large codebase by hand
* i think rethinkdb is a best database ever — it's moderately fast, document-oriented, and have CID guarantees about my data. and finally it has pretty admin web ui out of the box

usage
-----

start app by typing

```bash
node app.js
```

or, if you want pretty-looking logging try `npm install -g bunyan` and

```bash
node app.js | bunyan
```

i prefere `nodemon` as hot-reload tool `npm install -g nodemon`, then

```bash
nodemon app.js | bunyan
```

then, you need rethinkdb database installed. follow [instructions](http://rethinkdb.com/docs/install/), then type

```bash
rethinkdb
```

this command will create local rethinkdb_data directory. i already add it to .gitignore

then you probably want to have you assets compiled

```bash
gulp assets watch
```

growing
-------

this seed is not a framework, and not a multi-purpose seed.

i follow some assumptions that i find useful and practical:

###json configs it's enogh###

i use `config` module to manage confurations

you can find configs in a `config/` dir

`default.json` config is you friend, read it carefully

also, **`config` is a global variable**

###one database connection per app instance is enough###

well, sometimes it's not true, but rethinkdb is a so good database engine so you even not need to manually route queries across instances in cluster

you can find database-related code in `db.js`

db connection is configured in `db` section of config file. this section is passed directly to `r.connect()` which is patched with my other module, [rethinkdb-fake-connection](https://github.com/YChebotaev/rethinkdb-fake-connection)

i wrote this module to help myself to deal with deferred database connection. i think that `r.run(connection)` should accept promises as a `connection` parameter.

then, `db.js` has another goodies like start-up time database "migrations".

there are two special fields in `db` section of `config.json`: `db.tables` and `db.indexes`

`db.tables` is a list of tables in `db.db` database, which will be created if not exists when app is booting

also, each table name from `db.tables` list will be exported as `db.<tableName>` global variable as `r.table(<tableName>)`

`db.indexes` is a dict of indexes which should be defined on tables, created at previous step. for now there is no support for complex indexes

**`db` is a global variable**

###one logger instance per app is enough###

seriosly, i saw `console.log` and `debug` outputs all the way around more often than any other specialised logging library like `bunyan` which i use in this seed

**`logger` is a global variable**

you can find logger stuff in `logger.js` file

###by default sessions are cookie-based###

please, refer to `lib/passport/session.js` and `config/default.json` for details

feel free to replace default session library to something more appropriate

caveats
-------

there are global variables. so, you need to instal in before all other code

also, there are complex database connection logic. please, refer to [rethinkdb-fake-connection](https://github.com/YChebotaev/rethinkdb-fake-connection) docs, and pay attention at `db.js` source