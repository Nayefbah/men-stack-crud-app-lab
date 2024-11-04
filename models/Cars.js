const mongoose = require('mongoose')

const CarsSchema = new mongoose.Schema({
  name: String,
  carsType: String,
  carsModel: String,
  CarsColor: String,
  NewBrand: Boolean
})

const cars = mongoose.model('Cars', CarsSchema)
module.exports = cars
