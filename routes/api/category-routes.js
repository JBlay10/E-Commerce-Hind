const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const catgData = await Category.findAll({
      include: [{ model: Product }]
    });

    res.status(200).json(catgData)

  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const catgData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!catgData){
      res.status(400).json({message: 'Category not found.'});
      return;
    }
    res.status(200).json(catgData)

  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const catgData = await Category.create(req.body);

    res.status(200).json(catgData)

  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catgData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        }
      }
    );
    res.status(200).json(catgData)

  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catgData = await Category.destroy(
      {
        where: {
          id: req.params.id,
        }
      }
    );

    if (!catgData){
      res.status(400).json({message: 'Category not found.'});
      return;
    }
    res.status(200).json(catgData)

  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
