# new-obsidian-demo

Install the latest version of Deno  
Install the latest version of Redis to create an instance  
Script to start server:  

`deno run --allow-env --allow-net --allow-read --unstable new-server.tsx -c tsconfig.json`


____Nates Notes_____
If you are running this demo on a windows machine, ensure you are using Windows Subsystem for Linux (WSL2).

run redis-server to start redis-server.

must use deprecated version of deno:
deno upgrade --version 1.21.3