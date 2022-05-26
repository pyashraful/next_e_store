import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import Product from "@model/product";
import dbConnect from "@utils/dbConnect.js";
import { validateAdminRoute } from "@utils/auth";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default validateAdminRoute(async (req, res) => {
  if (req.method === "POST") {
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        console.log(
          "🚀 ~ file: add-product.js ~ line 30 ~ form.parse ~ fields",
          fields
        );
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    try {
      const imageFile = data.files.file; // .image because I named it in client side by that name: // pictureData.append('image', pictureFile);
      const imagePath = imageFile.filepath;
      const pathToWriteImage = `public/images/${data.files.file.originalFilename}`; // include name and .extention, you can get the name from data.files.image object
      const image = await fs.readFile(imagePath);
      await fs.writeFile(pathToWriteImage, image);
      dbConnect();
      const product = new Product({
        name: data.fields.name,
        category: data.fields.category,
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
});
