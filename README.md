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

If you're running the container for the first time it's recommended that you wait the migrations to be finished before refreshing the page, if it doesn't work at the first time just make and save any change in any file and let it run again automatically.


## Accessing the application

Now that you have your application all set up you can access it in your localhost in the port 3000.
```
http://localhost:3000/home 
```
## Setting up manually

if you don't want/can't use the automated python script to setup the permissions do it manually using the following commands:
```
$ mkdir docker
$ mkdir docker/database
$ sudo chmod 777 docker/database
$ sudo chown -R ${USER}:${USER} docker/database
```

then build it.

## Report issues

You can report an issue on this [link](https://github.com/JuniorMario/CreateAsSuch/issues)

License
----

MIT

