import mongoose from 'mongoose'

const config = useRuntimeConfig();

export default async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(config.public.mongoUrl)
    // eslint-disable-next-line no-console
    console.log('Successfully connected to DB.')
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
   console.log(error, 'err')
  }
}
