const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const protect = require("../middleware/authMiddleware");
const supabase = require("../config/supabase");

router.post(
  "/",
  protect,
  upload.single("image"),
  async (req, res) => {
    try {
      const file = req.file;

      const fileName =
        `${Date.now()}-${file.originalname}`;

      const { error } =
        await supabase.storage
          .from("products")
          .upload(fileName, file.buffer, {
            contentType: file.mimetype,
          });

      if (error) throw error;

      const { data } =
        supabase.storage
          .from("products")
          .getPublicUrl(fileName);

      res.json({
        imageUrl: data.publicUrl,
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Upload Failed",
      });
    }
  }
);

module.exports = router;
