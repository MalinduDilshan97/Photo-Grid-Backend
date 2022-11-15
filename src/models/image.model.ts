import mongoose, { Schema, model } from 'mongoose';

export type Image = {
  imageId: string;
  src: string;
  index: number;
  collection: string;
} & mongoose.Document;

const ImageSchema = new Schema(
  {
    imageId: {
      type: Schema.Types.String,
      required: true,
    },
    src: {
      type: Schema.Types.String,
      required: true,
    },
    index: {
      type: Schema.Types.Number,
      required: true,
    },
    userId: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    collection: 'Image',
    timestamps: true,
  },
);

export default model<Image>('Image', ImageSchema);
