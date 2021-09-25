import express from "express";
import router from "./routes/handler.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
