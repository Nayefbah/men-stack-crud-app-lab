const Cars = require('../models/cars')

const newCars = (req, res) => {
  res.render('cars/new.ejs')
}

const create = async (req, res) => {
  if (req.body.NewBrand === 'on') {
    req.body.NewBrand = true
  } else {
    req.body.NewBrand = false
  }
  console.log(req.body)
  await Cars.create(req.body)
  res.redirect('/cars/new')
}
const index = async (req, res) => {
  const cars = await Cars.find()
  res.render('cars/index.ejs', { cars })
}
const show = async (req, res) => {
  const id = req.params.id
  const cars = await Cars.findById(id)
  res.render('cars/show.ejs', { cars })
}
const deleteCars = async (req, res) => {
  const id = req.params.id
  await Cars.findByIdAndDelete(id)
  res.redirect('/cars')
}
const edit = async (req, res) => {
  const id = req.params.id
  const cars = await Cars.findById(id)
  res.render('cars/edit.ejs', { cars })
}
const update = async (req, res) => {
  const id = req.params.id
  if (req.body.NewBrand == 'on') {
    req.body.NewBrand = true
  } else {
    req.body.NewBrand = false
  }
  await Cars.findByIdAndUpdate(id, req.body)
  res.redirect(`/cars/${id}`)
}
module.exports = {
  new: newCars,
  create,
  index,
  show,
  delete: deleteCars,
  edit,
  update
}
