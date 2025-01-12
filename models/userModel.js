import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    authentication: {
        password: {
            type: String,
            required: true
        }
    },
    lastActivity: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;