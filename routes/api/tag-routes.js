const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const allTags = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  // be sure to include its associated Product data
  res.json(allTags, Product, ProductTag);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tagId = await Category.find(id).catch((err) => {
    res.json(err);
  });
  // be sure to include its associated Product data
  res.json(tagId, Product, ProductTag);
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const addTag = await Tag.create(req.body);
    res.status(200).json(addTag);
  } catch (err) {
    res.status(400),json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
