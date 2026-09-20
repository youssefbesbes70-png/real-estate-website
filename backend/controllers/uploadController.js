const cloudinary =
  require("../config/cloudinary");

function uploadToCloudinary(buffer) {
  return new Promise(
    (resolve, reject) => {
      const stream =
        cloudinary.uploader.upload_stream(
          {
            folder:
              "real-estate-projects",

            resource_type:
              "image",
          },

          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

      stream.end(buffer);
    }
  );
}

async function uploadImage(
  req,
  res
) {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({
          message:
            "No image uploaded",
        });
    }

    const result =
      await uploadToCloudinary(
        req.file.buffer
      );

    res
      .status(201)
      .json({
        imageUrl:
          result.secure_url,

        publicId:
          result.public_id,
      });

  } catch (error) {
    console.error(
      "Cloudinary upload error:",
      error
    );

    res
      .status(500)
      .json({
        message:
          "Image upload failed",
      });
  }
}

module.exports = {
  uploadImage,
};