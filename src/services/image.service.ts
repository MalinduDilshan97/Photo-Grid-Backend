import ImageModel, { Image } from '../models/image.model';

export const createImage = async (image) => {
  try {
    const newImage: Image = new ImageModel({ ...image });

    image = await newImage.save();
    const data = {
      image,
    };

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveImages = async (images) => {
  return images.map((image) => {
    return createImage(image);
  });
};
