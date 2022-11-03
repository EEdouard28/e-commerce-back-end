const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const allCategories = await Category.findAll().catch((err) => {
    res.json(err);
  });
  // be sure to include its associated Products
  res.json(allCategories, Product);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const catId = await Category.find(id).catch((err) => {
    res.json(err);
  });
  // be sure to include its associated Products
  res.json(catId, Product);
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const addCategory = await Category.create(req.body);
    res.status(200).json(addCategory);
  } catch (err) {
    res.status(400),json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
