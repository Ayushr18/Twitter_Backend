import multer from "multer";
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

aws.config.update({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID
});

const s3 = new aws.S3();
