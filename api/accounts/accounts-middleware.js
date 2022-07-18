
const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const error = { status: 400}
  const {name, budget} = req.body;
  if (name === undefined || budget === undefined){
    error.message = "name and budget are required"
    next(error)
  } else if(typeof name !== 'string'){
    error.message = 'name of account must be a string'
    next(error)
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const error = {status: 400}
  try {
    const account = await Account.getById(req.params.id)
    if(account.name === req.body.name){
      error.message =  "that name is taken"
      next(error)
    } else {
      next()
    }
  }
  catch(err){
    next()
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      next({ status: 404, message: 'not found'})
    } else {
      req.account = account;
      next()
    }
  } catch(err){
    next()
  }
  
}
