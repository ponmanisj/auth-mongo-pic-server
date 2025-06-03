
import multer from "multer";
import path from "path";

// Set where and how files are stored
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder to store images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique file name
  },
});

// File filter for only images
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      return cb(new Error("Only images are allowed"), false);
    }
    cb(null, true);
  },
});

export default upload;


// // import multer from "multer";
// // import path from "path";

// // // Set storage
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "uploads/"); // folder to save uploaded images
// //   },
// //   filename: function (req, file, cb) {
// //     const ext = path.extname(file.originalname);
// //     const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
// //     cb(null, uniqueName + ext);
// //   },
// // });

// // // File filter to accept images only
// // const fileFilter = (req, file, cb) => {
// //   if (file.mimetype.startsWith("image/")) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error("Only image files are allowed!"), false);
// //   }
// // };

// // const upload = multer({ storage, fileFilter });

// // export default upload;
// import multer from "multer";
// import path from "path";
// import fs from "fs";

// const uploadDir = path.join(process.cwd(), "uploads");

// // Create uploads folder if doesn't exist
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueName + ext);
//   },
// });

// // Only accept image files
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) {
//     cb(null, true);
//   } else {
//    return cb(new Error("Only image files are allowed!"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });

// export default upload;
