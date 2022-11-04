const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try { 
    const allTags = await Tag.findAll({
      include: [Product, ProductTag]
});   res.json(allTags);
  // be sure to include its associated Product data
} catch(err) {res.json(err)}
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
  const tagId = await Category.findByPk({
    include: [Product, ProductTag]
}); res.json(tagId);
  // be sure to include its associated Product data
  res.json(tagId, Product, ProductTag);
} catch(err) {res.json(err)}
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const addTag = await Tag.create(req.body);
    res.status(200).json(addTag);
  } catch (err) {
    res.status(400), json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
try {
  const updateTag = await Tag.update(req.body, {where:{id: req.params.id}});
  res.status(200).json(updateTag);
} catch (err) {
  res.status(400).json(err);
}
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
try {
  const deleteTag = await Tag.destroy({where:{id: req.params.id}});
  res.status(200).json(deleteTag);
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
