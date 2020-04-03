import os 

USER = os.getenv("USER")
try:
    os.system("chmod 777 docker/database/*")
    os.system("chown -R {USER}:{USER} docker/database/*".format(USER=USER))
    print("The setup runned successfully.\nUse docker-compose up --build -d to build the application.")
except:
    print("Something went wrong in the setup.\nPlease try to setup it manually.")
    os.Exit(1)