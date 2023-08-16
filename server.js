const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bp = require("body-parser");
const app = express();
app.use(cors());
app.use(bp.json());
const PORT = process.env.PORT || 9080;

const Photo = require("./Models/photo");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("welcome");
});

//Read

app.get("/photos", async (request, response) => {
  try {
    console.log("server linked");
    const allPhotos = await Photo.find(request.query);
    response.status(200).json(allPhotos);
  } catch (error) {
    console.log("server issue");
    response.status(404).json(error);
  }
});

//Add

app.post("/photos", async (request, response) => {
  try {
    const newPhoto = await Photo.create(request.body);
    console.log(newPhoto);
    response.status(200).json(newPhoto);
  } catch (error) {
    console.log(error);
    respose.status(500).json(error);
  }
});

// Update

app.put("/photos/:_id", async (request, response) => {
  try {
    const updatePhoto = await Photo.findByIdAndUpdate(
      request.params._id,
      request.body
    );
    response.status(200).send(updatePhoto);
  } catch (error) {
    response.status(404).json(error);
  }
});

// Delete

app.delete("/photos/:_id", async (request, response) => {
  try{
    const deletePhoto = await Photo.findByIdAndDelete(request.params._id)
    response.status(200).send(deletePhoto)
  } catch(error){
    console.log(error)
    response.status(500).json(error)
  }
})
app.listen(PORT, () => console.log(`summoning a server on  PORT: ${PORT}`));
