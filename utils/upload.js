const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "-" + file.originalname;
    cb(null, Date.now() + "-" + file.originalname);
    req.fileName = filename;
  },
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;
