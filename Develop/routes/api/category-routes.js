const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  
    Category.findAll().then((renderData)=> {
      return res.status(200).json(renderData)
    });
    


});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id).then((renderData)=> {
    return res.status(200).json(renderData)
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((renderData)=> {
    return res.status(200).json(renderData)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({category_name: req.body.category_name},{where:{id: req.params.id}}).then((updateCat) => {
    res.status(200).json(updateCat)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}}).then((deleteIt) =>{
    res.json(deleteIt)  })
});

module.exports = router;
