import express from 'express';
import {connect} from './config/database.js'
const app = express();



app.listen(3000, async () => {
    console.log(`Server Started`);
    await connect();
    console.log('Mongo db connected');   
   
});