import {LikeRepository, TweetRepository} from '../repository/index.js'

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepository.get(modelId).populate('likes');
        } else if(modelType == 'Comment') {
            
        } else {
            throw new Error('unknown model type');
        }
        
    }
}

export default LikeService;

