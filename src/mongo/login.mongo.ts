import { Schema } from 'mongoose';
import { model } from 'mongoose';

const loginSchema = new Schema({
    id: String,
    password: String,
    regDt: {type: Date, defailt: Date.now}
});

export default model('member', loginSchema);