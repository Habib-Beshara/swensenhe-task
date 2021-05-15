import { Router } from 'express';
import IRepository from '../../abstracts/interfaces/IRepository';
import FindCoffeePods from './use-cases/findCoffeePods';

const getCoffeePodRouter = (coffeePodRepo: IRepository) => {
  const router = Router();
  router.get('/', async (req, res, next) => {
    const qs = req.query;
    const response = await new FindCoffeePods(coffeePodRepo, qs).exec();
    if (response.hasErrors()) {
      res.status(400);
    }
    return res.json(response.getResponse());
  });
  return router;
};

export default getCoffeePodRouter;
