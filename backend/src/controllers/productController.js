const pool = require("../config/db");



// Get all products
const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY id"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch product",
    });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      image,
      short_description,
      description,
      applications,
      finishes,
      sizes,
      origin,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO products
      (
        name,
        category,
        image,
        short_description,
        description,
        applications,
        finishes,
        sizes,
        origin
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,$7,$8,$9
      )
      RETURNING *
      `,
      [
  name,
  category,
  image,
  short_description,
  description,
  JSON.stringify(applications),
  JSON.stringify(finishes),
  JSON.stringify(sizes),
  origin,
]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create product",
    });
  }
};

// delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete product",
    });
  }
};

// update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      category,
      image,
      short_description,
      description,
      applications,
      finishes,
      sizes,
      origin,
    } = req.body;

    const result = await pool.query(
      `
      UPDATE products
      SET
        name = $1,
        category = $2,
        image = $3,
        short_description = $4,
        description = $5,
        applications = $6,
        finishes = $7,
        sizes = $8,
        origin = $9
      WHERE id = $10
      RETURNING *
      `,
      [
        name,
        category,
        image,
        short_description,
        description,
        JSON.stringify(applications),
        JSON.stringify(finishes),
        JSON.stringify(sizes),
        origin,
        id
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update product",
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
};
