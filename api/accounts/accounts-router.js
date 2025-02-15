const router = require('express').Router()
const md = require('./accounts-middleware')
const Account  =  require('./accounts-model')
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
    res.json(req.account)
  } catch(err){
    next(err)
  }
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('something')
  } catch(err){
    next(err)
  }
})


router.put('/:id', md.checkAccountId, md.checkAccountPayload, md.checkAccountNameUnique,  (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('something')
  } catch(err){
    next(err)
  }
});

router.delete('/:id',  md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('something')
  } catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
