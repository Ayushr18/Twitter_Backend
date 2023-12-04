import  express, { Router }  from "express";
import {createTweet} from '../../controllers/tweet-controller.js';
import { toogleLike } from '../../controllers/like-controller.js';
const router = express.Router();
router.post('/tweets', createTweet);

router.post('/likes/toggle',toogleLike);

export default router;