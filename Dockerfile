FROM node:8.9.4
WORKDIR /app
COPY package.json /app
# RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
# RUN npm install --quiet node-gyp -g
RUN npm install
COPY . /app
CMD npm run prod
EXPOSE 3000
