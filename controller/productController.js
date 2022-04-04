const { status } = require("express/lib/response");
const Product = require("../models/product");

module.exports = {
  getProduct: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  saveProduct: async (req, res) => {
    const product = new Product(req.body);
    try {
      const saveproduct = await product.save();
      res.status(201).json({
        saveproduct,
        message: "Berhasil menambhakan data",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    // validasi id
    const cekId = await Product.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
      const updatedProduct = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
      res.status(200).json({
        updatedProduct,
        message: "Data berhasil di update",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    // validasi id
    const cekId = await Product.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
      const { id } = req.params;
      const deletedProduct = await Product.deleteOne({ _id: id });
      res.status(200).json({
        deletedProduct,
        message: "Berhasil menghapus data",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
