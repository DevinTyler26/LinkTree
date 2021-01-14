## help from https://testdriven.io/blog/testing-angular-with-cypress-and-docker/ ##
#########################
### build environment ###
#########################

# base image
FROM mhart/alpine-node:15 as builder


ADD package.json /app/
ADD yarn.lock /app/
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn

COPY . /app

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
