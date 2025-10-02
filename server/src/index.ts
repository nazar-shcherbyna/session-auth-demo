import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";

const PORT = Number(process.env.APP_PORT);
const ORIGIN = process.env.APP_BE_ORIGIN;

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-CSRF-Token"],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT", "OPTIONS"],
  })
);

app.get("/", async (req, res) => {
  res.json("Hello from Auth Server!");
});

app.get("/auth/login", async (req, res) => {
  res.json("Login endpoint");
});

app.get("/auth/refresh", async (req, res) => {
  res.json("Refresh endpoint");
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Auth server running at http://localhost:${PORT}`);
});
