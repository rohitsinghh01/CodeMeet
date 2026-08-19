import express from "express";


const app = express();


app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

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