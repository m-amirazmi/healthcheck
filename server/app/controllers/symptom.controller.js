const Symptom = require('../models/symptom.model')

exports.create = async (req, res) => {
  const { name, description } = req.body
  if (!name || !description) return res.status(400).json({ message: 'The symptom name and description cannot be emptied!' })

  const symptoms = await Symptom.find()
  const findExisting = symptoms.find((s) => s.name === name)
  if (findExisting) return res.status(400).json({ message: 'The symptom already exists in the database!' })

  const symptom = new Symptom({ name, description })

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
    const data = await Symptom.find()
    return res.status(200).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM FIND ALL =>', error)
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

exports.findOne = async (req, res) => {
  const { symptomId } = req.params

  try {
    const data = await Symptom.findById(symptomId)
    return res.status(200).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM FIND ONE =>', error)
    if (error.kind === 'ObjectId') return res.status(404).json({ message: `Symptom not found with provided ID => ${symptomId}` })
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

exports.update = async (req, res) => {
  const { name, description } = req.body
  const { symptomId } = req.params
  if (name === "" || description === "") return res.status(400).json({ message: 'The symptom name and description cannot be emptied!' })

  const symptom = await Symptom.findById(symptomId)
  let newName = symptom.name
  let newDescription = symptom.description
  if (!!name && (symptom.name !== name)) newName = name
  if (!!description && (symptom.description !== description)) newName = description

  try {
    const data = await Symptom.findByIdAndUpdate(symptomId, { name: newName, description: newDescription }, { new: true })
    res.status(200).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM UPDATE =>', error)
    if (error.kind === 'ObjectId') return res.status(404).json({ message: `Symptom not found with provided ID => ${symptomId}` })
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

exports.remove = async (req, res) => {
  const { symptomId } = req.params

  try {
    const data = await Symptom.findByIdAndRemove(symptomId)
    res.status(203).json({ data })
  } catch (error) {
    console.log('ERROR SYMPTOM UPDATE =>', error)
    if (error.kind === 'ObjectId') return res.status(404).json({ message: `Symptom not found with provided ID => ${symptomId}` })
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}