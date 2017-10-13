FROM node:8.6
WORKDIR /usr/src
COPY package.json package-lock.json entrypoint.sh /usr/src/
RUN npm install
ENTRYPOINT [ "/usr/src/entrypoint.sh" ]