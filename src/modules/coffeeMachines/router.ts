import { Router } from 'express';
import IRepository from '../../abstracts/interfaces/IRepository';
import FindCoffeeMachines from './use-cases/findCoffeeMachines';

const getCoffeeMachineRouter = (coffeeMachineRepo: IRepository) => {
  const router = Router();
  router.get('/', async (req, res, next) => {
    const qs = req.query;
    const response = await new FindCoffeeMachines(coffeeMachineRepo, qs).exec();
    if (response.hasErrors()) {
      res.status(400);
    }
    return res.json(response.getResponse());
  });
  return router;
};

export default getCoffeeMachineRouter;
