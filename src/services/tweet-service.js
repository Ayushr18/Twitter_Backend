import {TweetRepository, HashtagRepository} from '../repository/index.js' 

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                    .map((tag) => tag.substring(1))
                    .map(tag => tag.toLowerCase());
                    
        const tweet = await this.tweetRepository.create(data);
        let alreadypresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadypresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadypresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save(); 
            
        }); 
  
        return tweet;
    }
}

export default TweetService;
