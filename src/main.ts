import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  console.log(req.url);
  res.send('test');
});

app.listen(port, () => console.log(`server listening on port ${port}`));
