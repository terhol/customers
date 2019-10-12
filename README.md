# Customers

Testing project to learn GCP, Node.js and NoSQL

## How to install

You need to have installed [Node.js](https://nodejs.org/en/download/) and [Google Cloud SDK](https://cloud.google.com/sdk/install).

Then check out this repo and install dependencies.

```js
$ npm install
```

## How to deploy

Deployment is done by Google Cloud Scripts. Therefore, you firstly need to initialize it and provide your account and project information:

```js
$ gcloud init
```

Then you can deploy your changes to GCP by this comman:

```js
$ npm run deploy
```

## How to init DB
To be able to access to DB from your local machine, you will need your Service account keys. See [this documentation](https://cloud.google.com/datastore/docs/reference/libraries) for details.

When the database is not initialized yet, i.e. it doesn't contain any data, you need to initialize it first.

```js
$ npm run initDB
```

Note: When the data exist already they will be overwritten.

## How to run app locally

To start the local serer run this command

```js
$ npm run start
```

and navigate to [http://localhost:5555](http://localhost:5555).

## How to run app from GCP

Base URL where the app is deployed on GCP is

```text
https://us-central1-customers-255707.cloudfunctions.net/customers
```

### Services
#### getCustomers

Returns list of all customers.

```text
GET /getCustomers
```

__Example__

[https://us-central1-customers-255707.cloudfunctions.net/customers/getCustomers](https://us-central1-customers-255707.cloudfunctions.net/customers/getCustomers)

#### getCustomer

Returns one customer based on their ID.

```text
GET /getCustomer?id={ID: number}
```

__Example__

[https://us-central1-customers-255707.cloudfunctions.net/customers/getCustomer?id=1](https://us-central1-customers-255707.cloudfunctions.net/customers/getCustomer?id=1)


## Study materials
* [https://itnext.io/google-cloud-functions-node-js-and-express-aea4a2a9ba3a](https://itnext.io/google-cloud-functions-node-js-and-express-aea4a2a9ba3a)
* [https://cloud.google.com/datastore/docs/concepts/entities](https://cloud.google.com/datastore/docs/concepts/entities)
* [https://cloud.google.com/datastore/docs/quickstart](https://cloud.google.com/datastore/docs/quickstart)
* [https://cloud.google.com/datastore/docs/reference/libraries](https://cloud.google.com/datastore/docs/reference/libraries)
* [https://medium.com/@chaloemphonthipkasorn/google-datastore-query-by-nodejs-5edfc7380b02](https://medium.com/@chaloemphonthipkasorn/google-datastore-query-by-nodejs-5edfc7380b02)
* [https://medium.com/@54m/promises-in-express-js-apis-testing-dd0243163d57](https://medium.com/@54m/promises-in-express-js-apis-testing-dd0243163d57)

## Technologies

* [Google Cloud Platform](https://cloud.google.com)
* [Datastore](https://cloud.google.com/datastore)
* [Node.js](https://nodejs.org)
* [Express](https://expressjs.com)

## License
MIT