// ./src/app.ts
import * as express from "express";

import { Express } from "express";
import {RegisterRoutes} from "./routes/routes";
import * as bodyParser from 'body-parser';

export function newApp(): Express {

    const app = express();

    app.use(bodyParser.json());

    RegisterRoutes(app);


    return app;
}
