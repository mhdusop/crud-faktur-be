import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config/config.js";
import router from "./routes/faktur-routes.js";

const app = express();

// express use()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

// Router
app.use('/api/v1', router);

const APP_PORT = config.APP_PORT || 3000;

app.listen(APP_PORT, () => {
   console.log(`Server is running on port ${APP_PORT}`);
});

export default app;