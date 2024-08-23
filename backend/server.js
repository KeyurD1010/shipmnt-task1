import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/databaseConfig.js";
import BookRoutes from "./routes/BookRoutes.js";
import cors from "cors";

const app = express();
dotenv.config();
connectDB();

const corOptions = {
  origin: "*",
};
// console.log("Hello");
app.use(cors(corOptions));

const PORT = process.env.PORT || 8080; //Port No from Config File

app.get("/", (req, res) => {
  console.log("Hello Home");
  res.send("Helloo ,This is home page");
});

app.use("/api/book", BookRoutes);

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Node Server Running in Mode on Port No ${PORT}`);
});
