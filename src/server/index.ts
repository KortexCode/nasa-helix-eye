import express, { Application, Response, Request } from "express";
import { config } from "../../config";


const app: Application = express();
app.get('*', (req: Request, res: Response) => {
    res.send(`<h2>Hola mundo desde ${req.url}</h2>`);
});
app.listen(config.PORT, () => console.log(`Serverlistening on http://localhost:${config.PORT}/`));
