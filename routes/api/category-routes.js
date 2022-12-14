const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try { 
    const allCategories = await Category.findAll({
      include: [Product]
    })
    res.json(allCategories);
  } catch(err) {res.json(err)}
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {  
    const catId = await Category.findOne({
      where: {
        id: req.params.id
      },
         include: [Product]
  });
    res.json(catId);
  } catch(err) {res.json(err)}
});
  // be sure to include its associated Products


  
router.post("/", async (req, res) => {
  // create a new category
  try {
    const addCategory = await Category.create(req.body);
    res.status(200).json(addCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {where:{id: req.params.id}});
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({where:{id: req.params.id}});
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
