import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import Product from "@model/productSchema";
import connectDB from "@utils/db.mjs";
// import { Product } from "../../../../models/product";

// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === "POST") {
    // parse form with a Promise wrapper
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        // console.log(
        //   "🚀 ~ file: add-product.js ~ line 17 ~ form.parse ~ files",
        //   files
        // );
        // console.log(
        //   "🚀 ~ file: add-product.js ~ line 17 ~ form.parse ~ fields",
        //   fields
        // );
        console.log(
          "🚀 ~ file: add-product.js ~ line 30 ~ form.parse ~ fields",
          fields
        );
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    try {
      // console.log(data.files.file.name);
      // console.log(data.files);
      const imageFile = data.files.file; // .image because I named it in client side by that name: // pictureData.append('image', pictureFile);
      const imagePath = imageFile.filepath;
      // console.log("🚀 ~ file: add-product.js ~ line 36 ~ imagePath", imagePath);
      const pathToWriteImage = `public/images/${data.files.file.originalFilename}`; // include name and .extention, you can get the name from data.files.image object
      // console.log(
      //   // "🚀 ~ file: add-product.js ~ line 38 ~ pathToWriteImage",
      //   pathToWriteImage
      // );
      const image = await fs.readFile(imagePath);
      await fs.writeFile(pathToWriteImage, image);
      console.log("hi");
      //store path in DB
      // await connectDB();
      const product = new Product({
        title: data.fields.name,
        category: data.fields.Category,
        image: `/images/${data.files.file.originalFilename}`,
        price: data.fields.regularPrice,
        brand: "none",
        rating: 3.5,
        numReviews: 10,
        countInStock: data.fields.quantity,
        descriptions: "Smart watch black",
      });
      const porduts1 = await product.save();
      console.log("🚀 ~ file: add-product.js ~ line 60 ~ porduts1", porduts1);
      res.status(200).json({ message: "image uploaded!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
};
