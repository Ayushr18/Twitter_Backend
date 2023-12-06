import JWT from 'passport-jwt';
import User from '../models/user.js'

const jwtStrategy = JWT.Strategy;
const ExtraJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtraJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'
}

export const passportAuth = (passport) => {
    passport.use(new jwtStrategy(opts, async (jwt_payload, done) => {
       const user = await User.findById(jwt_payload.id);
       if(!user) {
            done(null, false);
        } else {
            done(null, user);
        }
    })); 
} 