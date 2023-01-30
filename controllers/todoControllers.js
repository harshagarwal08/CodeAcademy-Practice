const services = require('../services/todoServices.js')
exports.createController = (req, res) => {
  services.create()
}

exports.getAll = (req, res) => {
  services.getAll()
}

exports.getOne = (req, res) => {
  services.getOne()
}

exports.update = (req, res) => {
  services.update()
}

exports.complete = (req, res) => {
  services.complete()
}

exports.delete = (req, res) => {
  services.delete()
}
