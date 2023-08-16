const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Photo = require("./Models/photo");

async function seed() {
  await Photo.create({
    title: "roxy",
    photoSrc: "./Images/Roxy.jpg",
    model: "roxy",
    description: "",
    liked: 0,
    faved: true
  });
  await Photo.create({
    title: "karolina",
    photoSrc: "./Images/Karolina.jpg",
    model: "karolina",
    description: "",
    liked: 0,
    faved: true
  });
  await Photo.create({
    title: "polly",
    photoSrc: "./Images/Polly.jpg",
    model: "polly",
    description: "",
    liked: 0,
    faved: true
  });
  await Photo.create({
    title: "fay",
    photoSrc: "./Images/Fay.jpg",
    model: "fay",
    description: "",
    liked: 0,
    faved: false
  });
  await Photo.create({
    title: "quinn",
    photoSrc: "./Images/Quinn.jpg",
    model: "quinn",
    description: "",
    liked: 0,
    faved: false
  });
  await Photo.create({
    title: "shanice",
    photoSrc: "./Images/Shanice.jpg",
    model: "shanice",
    description: "",
    liked: 0,
    faved: false
  });
  mongoose.disconnect()
}

seed();
