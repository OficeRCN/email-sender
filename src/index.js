import express from "express";
import cors from "cors";
import morgan from "morgan";

import emailRouter from "./routes/email.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(cors({
  origin:{
    
  }
}));
app.use(express.json());
app.use(emailRouter);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
