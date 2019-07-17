Ticket app

# Ticket Searching Application

An application to search and view data from three JSON files, users.json, tickets.json and organisations.js.

## Techologies used

Client: Angular 8.
Server: Node Express.js.



### Prerequisites

To get set up and run the application, you will need to have a few things installed globally.

Recommended Node version >= 11.14.0.


On the server, for a package manager I am using yarn.

With brew: 

```
brew install yarn
```

With curl:
```
curl -o- -L https://yarnpkg.com/install.sh | bash
```

On the client, you will need to install the angular-cli framework.

```
npm install -g @angular/cli
```


### Installing

First, open a terminal window from the root directory of the project cd into the server directory

Then run

```
yarn
```

And then

```
yarn start
```

In the terminal you should see a message "app listening on port 3000!".


To start the client, from the root directory cd in to client/ticket-app.

From there run 
```
yarn
```
and then

```
ng serve
```

This will run the application on localhost:4200

## Running the tests

For server tests, from dir /server run:

```
yarn test
```

For client tests from dir /client/ticket-app run 

```ng test```


## App Instructions

![Select a data set (users, organizations or tickets) and type in an input to filter.]
(https://i.imgur.com/4CUKtzD.png)



