# CreateAsSuch

Pratice Front-end Development in a sample-blog


## Requirementes

 - Docker 
 - Docker-compose
 - Python:2.7+

## Installing


  ```sh
$ git clone https://github.com/JuniorMario/CreateAsSuch/
$ cd CreateAsSuch
```
Run as sudo:
```
$ sudo python setup.py
```
Then:
```
$ docker-compose up --build -d
```
If the build run successfully, use the `docker attach` command to debug the program.

```
$ docker attach app
```
## Setting up manually

if you don't want/can't use the automated python script to setup the permissions do it manually using the following commands:
```
$ sudo chmod 777 docker/database
$ sudo chown -R ${USER}:${USER} docker/database
```

then build it.

## Report issues

You can report an issue on this [link](https://github.com/JuniorMario/CreateAsSuch/issues)

License
----

MIT

