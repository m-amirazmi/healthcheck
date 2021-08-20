const Service = require('../models/service.model')

exports.create = async (req, res) => {
  const { name, description } = req.body
  if (!name || !description) return res.status(400).json({ message: 'The symptom name and description cannot be emptied!' })

  const symptoms = await Service.find()
  const findExisting = symptoms.find((s) => s.name === name)
  if (findExisting) return res.status(400).json({ message: 'The symptom already exists in the database!' })

  const symptom = new Service({ name, description })

  try {
    const data = await symptom.save()
    return res.status(201).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM CREATE =>', error)
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

exports.findAll = async (req, res) => {
  try {
    const data = await Service.find()
    return res.status(200).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM FIND ALL =>', error)
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

exports.findOne = async (req, res) => {
  const { serviceId } = req.params

  try {
    const data = await Service.findById(serviceId)
    return res.status(200).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM FIND ONE =>', error)
    if (error.kind === 'ObjectId') return res.status(404).json({ message: `Service not found with provided ID => ${serviceId}` })
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

exports.update = async (req, res) => {
  const { name, description } = req.body
  const { serviceId } = req.params
  if (name === "" || description === "") return res.status(400).json({ message: 'The symptom name and description cannot be emptied!' })

  const symptom = await Service.findById(serviceId)
  let newName = symptom.name
  let newDescription = symptom.description
  if (!!name && (symptom.name !== name)) newName = name
  if (!!description && (symptom.description !== description)) newName = description

  try {
    const data = await Service.findByIdAndUpdate(serviceId, { name: newName, description: newDescription }, { new: true })
    res.status(200).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM UPDATE =>', error)
    if (error.kind === 'ObjectId') return res.status(404).json({ message: `Service not found with provided ID => ${serviceId}` })
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

exports.remove = async (req, res) => {
  const { serviceId } = req.params

  try {
    const data = await Service.findByIdAndRemove(serviceId)
    res.status(203).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM UPDATE =>', error)
    if (error.kind === 'ObjectId') return res.status(404).json({ message: `Service not found with provided ID => ${serviceId}` })
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}