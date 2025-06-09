import express, { Application, Response, Request } from "express";
import { config } from "./config";
import { render } from "./render";

const app: Application = express();
app.use(express.static('dist'));
app.get('*', (req: Request, res: Response) => {
    res.send(render(req.url));
});
app.listen(config.PORT, () => console.log(`Serverlistening on http://localhost:${config.PORT}/`));
