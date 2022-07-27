# obsidian-demo

## Prerequisites
Install the latest version of Deno  
Install the latest version of Redis to create an instance  

If you are running this demo on a windows machine, ensure you are using Windows Subsystem for Linux (WSL2).

must use deprecated version of deno:
deno upgrade --version 1.21.3

deno install -qAf --unstable https://deno.land/x/denon/denon.ts

Setup your own SQL database instance and replace the environment variables in the .env file.

## To start the program:
1. run redis-server to start redis.
2. open another bash terminal and set the path variables in the terminal:
    export DENO_INSTALL="/home/crawforn/.deno"
    export PATH="$DENO_INSTALL/bin:$PATH"
3. start the server with: denon start
4. open localhost:3000/

## Future Repairs
- fix line 10 on deps.ts; the obsidian wrapper is still using dev.jspm.io on deno.land
- redis-cli monitor | grep -i "rpush"
