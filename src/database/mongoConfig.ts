import mongoose from 'mongoose';

export default async function connectDB(): Promise<any> {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@imagecluster.rwdwskz.mongodb.net/imageGrid?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      ssl: true,
      sslValidate: true,
    });
    if (process.env.NODE_ENV !== 'test') {
      console.log('Database Connected');
    }
  } catch (err) {
    console.error(err);
  }
}
