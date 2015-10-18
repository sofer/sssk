# A super simple starter kit for Node.js

There is no one way to structure your Node.js application files, but throwing everything into a single `server.js` is not an acceptable option. Take a look at this simple application structure, do your best to understand it, and apply it in your projects.

### server.js
Call this what you like: `app.js`, `index.js`, `server.js` or whatever. Anyway, it should include references to only two packages: `http` and your router package.

### router.js
You do not have to have a router, but it helps. This is the package that acts as the traffic cop in your application, mapping incoming requests to appropriate application responses. The router should reference only a single package: `handlers.js`.

### handlers.js
The handlers are where the behaviour of your application is defined and where most of the work in your application is likely to be done. In a simple application like this one, all the handlers can go in a single file; in complex applications, the main handler may reference several different files. Unlike the main server file and the router, the handlers are going to need access to your data model.

### model.js
The data model is not just the file where you put all your database connexions, but also where you define how you can access that data and what the data should look like. If any assumptions about your database leak into your  handlers, something has gone wrong. You should be able to completely change the database you are using and it have no efffect on the rest of your application. Concerns should be kept separate between data and presentation.

### test/test.js
Don't forget to add the appropriate test script to `package.json`. As an exercise, create some passing tests for this application.
