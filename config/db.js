const mongoose = require('mongoose')

const connectDB = async () => {
    const mongodbUri = 'mongodb+srv://amir:aamir123@cluster0.0fib0.mongodb.net/ami-pattes?retryWrites=true&w=majority'
    try{
        await mongoose.set("strictQuery", false);
        const connection = await mongoose.connect(mongodbUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })

        console.log(`MongoDB Connected ${connection.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
module.exports = connectDB