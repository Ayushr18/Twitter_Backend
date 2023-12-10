import TweetRepository from '../../src/repository/tweet-repository';
import Tweet from '../../src/models/tweet.js'

jest.mock('../../src/models/tweet.js');

test('should create a new tweet and return it', async () => {
    const data = {
        content: 'Testing tweet'
    }
    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
        return {...data, createdAt: '2023-12-10', updatedAt: '2023-12-10'}
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
})