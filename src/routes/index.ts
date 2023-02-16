import { Express, Request, Response } from 'express';

const Route = (app: Express) => {
  app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World');
  });
  return app;
};

export default Route;
