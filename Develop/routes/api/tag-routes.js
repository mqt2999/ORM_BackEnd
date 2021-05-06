const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include: [{ model: Product}]}).then((renderData)=>{
    return res.status(200).json(renderData)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id,{include: [{ model: Product }]}).then((showId)=>{
    return res.status(200).json(showId)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then((makeNew)=> {
    return res.status(200).json(makeNew)
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({tag_name: req.body.tag_name},{where:{id: req.params.id}}).then((updateName)=>{
    res.status(200).json(updateName)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
 Tag.destroy({where: {id: req.params.id}}).then((deleteIt) =>{
    res.json(deleteIt)  })
});

module.exports = router;
