CMD ["run" "--unstable" "--allow-net" "--allow-env" "--allow-read" "new-server.tsx"]
COPY . . 
USER deno
WORKDIR /usr/app
EXPOSE 3000
ENTRYPOINT ["docker-entrypoint.sh"]
COPY file:5c57b1446b2be9ea24e9e7ac6f38fee4359709400db3792f6892d88efe607bbe in /usr/local/bin/docker-entrypoint.sh
ENV DENO_INSTALL_ROOT=/usr/local
ENV DENO_DIR=/deno-dir/
ARG DEBIAN_FRONTEND=noninteractive
ENV DENO_VERSION=1.11.3