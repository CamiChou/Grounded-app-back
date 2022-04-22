import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

// const allowedOrigins = [process.env.FRONT_END_URL, process.env.BACK_END_URL];

const corsConfig = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(morgan("dev")); // Log every request to the console for debugging
app.use(helmet()); // Helmet adds http headers to boost security of express apps
app.use(express.json());

app.get("/test", (req, res) => {
  console.log("Yay, it works!");
  res.json({ data: "Updated value!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
