FROM node:15-alpine as builder

WORKDIR /app
COPY . /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn

# # generate build
RUN  yarn build

##################
### production ###
##################

# base image
FROM nginx:1.19.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

# copy artifact build from the 'build environment'
COPY --from=builder /app/build /var/www

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
