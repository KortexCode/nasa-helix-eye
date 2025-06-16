import express, { Application, Response, Request } from "express";
import axios from "axios";
import { config } from "./config";
import { render } from "./render";
import { webpackMiddleware } from "./middleware/webpackMiddleware";

const isDev = process.env.NODE_ENV !== 'production';

const app: Application = express();
//Condicional para usar el middleware de hot module replacement de webpack
if (isDev) {
  app.use(webpackMiddleware());//Modo desarrollo
}else {
  app.use(express.static("dist")); // Servir archivos estáticos desde la carpeta dist
}

app.get("*", async (req: Request, res: Response) => {
let initialProps = {};//Se declara variable para las porps inciales

  if (req.url === "/galaxias") {
    try {
      const { data } = await axios.get(
        "https://images-api.nasa.gov/search?q=galaxies"
      );
      initialProps = {
        galaxias: data?.collection?.items || [],
      };
    } catch (error) {
      throw new Error("An error occurred while processing the galaxia request");
    }
  }
  res.send(render(req.url, initialProps));
});

app.listen(config.PORT, () =>
  console.log(`Serverlistening on http://localhost:${config.PORT}/`)
);
