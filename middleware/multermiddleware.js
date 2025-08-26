// const multer = require("multer")


// const storage = multer.diskStorage({
//     destination:(req, file, cb) =>{
//         cb(null, "uploads")
//     },
//     filename:(req , file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     }
// });

// const upload = multer({storage:storage});

// module.exports = upload;



const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products",
    format: async (req, file) => file.mimetype.split("/")[1],
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage });

module.exports = upload;
