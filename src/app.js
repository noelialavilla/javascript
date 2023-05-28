
import express from 'express';
import userRouter from './routes/user.router.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

try {
    await mongoose.connect('mongodb+srv://noelialavilla19:Candado19@clusterclase14.nxtg9ud.mongodb.net/?retryWrites=true&w=majority');
    console.log('DB connected')
} catch (error) {
    console.log(error);
}

app.listen(8080);

