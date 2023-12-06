import {UserRepository} from '../repository/index.js'

class userService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
       try {
            const user = await this.userRepository.create(data);
            return user;
       } catch (error) {
            throw error;
       }
    }
}

export default userService;