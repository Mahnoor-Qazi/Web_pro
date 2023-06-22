const addtocartSchema = mongoose.Schema({
    TITLA: String,
    BANNER: String,
    PRICE: String,
   
  });
  
  export const cartModel = mongoose.model('category',addtocartSchema)