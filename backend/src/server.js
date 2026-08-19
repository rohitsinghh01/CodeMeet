import express from "express";
import path from "path";
import cors from "cors";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";


const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}



const startServer = async () => {
  try {

    await connectDB();
    const PORT = process.env.PORT || ENV.PORT || 3000;
    app.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
      console.log("Health check available at /health");
    });
  } catch (error) {
    console.error("Error starting the server", error);
    process.exit(1);
  }
};

startServer();