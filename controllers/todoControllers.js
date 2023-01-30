const services = require('../services/todoServices.js')
exports.createController = (req, res) => {
  services.create(req, res)
}

exports.getAll = (req, res) => {
  services.getAll(req, res)
}

exports.getOne = (req, res) => {
  services.getOne(req, res)
}

exports.update = (req, res) => {
  services.update(req, res)
}

exports.complete = (req, res) => {
  services.complete(req, res)
}

exports.delete = (req, res) => {
  services.delete(req, res)
}
