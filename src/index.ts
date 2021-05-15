import express = require('express')
import getCoffeeMachineRouter from './modules/coffeeMachines/router';
import CoffeeMachineRepository from './modules/coffeeMachines/repository';
import createConnection from './services/dbConnection';
import getCoffeePodRouter from './modules/coffeePods/router';
import CoffeePodRepository from './modules/coffeePods/repository';

const app = express();
const port = process.env.PORT || 3000;

createConnection()
  .catch((e) => {
    console.log(`[Error connecting to mongoDb] ${e}`);
  });

app.use('/coffee-machines', getCoffeeMachineRouter(new CoffeeMachineRepository()));
app.use('/coffee-pods', getCoffeePodRouter(new CoffeePodRepository()));

app.listen(port, () => {
  console.log(`server is starting on port ${port}`);
});
