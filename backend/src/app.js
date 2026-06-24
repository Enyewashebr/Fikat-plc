const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const app = express();
const productRoutes = require("./routes/productRoutes");



app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);


app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = app;
