import TweetService from "../services/tweet-service.js"

const tweetService = new TweetService();
//import upload from "../config/file-upload-s3-config.js";

//const singleUploader = upload.single('image');

export const createTweet = async (req, res) => {
    try {
    //    singleUploader(req, res, function (err, data) {
    //          if(err) {
    //             return res.status(500).json({error: err});
    //         }
    //         console.log('Image url is', req.file);
    //     })
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(201).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a new tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(201).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}