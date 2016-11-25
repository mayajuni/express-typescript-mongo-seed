import { Schema } from 'mongoose';
import { model } from 'mongoose';

const loginSchema = new Schema({
    id: String,
    password: String,
    regDt: {type: Date, defailt: Date.now}
});
export const login = model('member', loginSchema);