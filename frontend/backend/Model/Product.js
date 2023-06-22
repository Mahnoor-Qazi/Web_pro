import mongoose from "mongoose";

 export const roomSchema = mongoose.Schema({
  images: [String],
  title: String,
  desc: String,
  pricePerNight: Number
});

export const roomModel = mongoose.model('room',roomSchema)

 const categorySchema = mongoose.Schema({
  catId: String,
  catTitle: String,
  catdescription: String,
  catbanner: String,
  price:Number,
  catrooms: [roomSchema]
});

export const categoryModel = mongoose.model('category',categorySchema)