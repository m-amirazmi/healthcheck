const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const routesSymptom = require('./app/routes/symptom.route')
const routesService = require('./app/routes/service.route')
require('dotenv').config()

// APP
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('DB Connected'))

// ROUTES
app.use('/symptoms', routesSymptom)
app.use('/services', routesService)

// SERVER LISTEN
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening on port ${port}`))