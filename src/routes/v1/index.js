import  express, { Router }  from "express";

import {createTweet, getTweet} from '../../controllers/tweet-controller.js';
import { toogleLike } from '../../controllers/like-controller.js';
import { createComment } from "../../controllers/comment-controller.js";
import {signup, login} from '../../controllers/auth-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet); 

router.post('/likes/toggle',toogleLike);

router.post('/comments', createComment);

router.post('/signup', signup);
router.post('/login', login);

export default router;