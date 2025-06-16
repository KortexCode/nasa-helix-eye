import express, { Application, Response, Request } from "express";
import axios from "axios";
import { config } from "./config";
import { render } from "./render";

const app: Application = express();

app.use(express.static("dist")); // Servir archivos estáticos desde la carpeta dist
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
