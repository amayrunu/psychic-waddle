const MOONGOSE = require ('mongoose');
const SCHEMA = MOONGOSE.Schema;

const userSchema = new Schema({
    username: String,
    password: {type: string, unique: false, uppercase: true, required: true}
});
module.exports = MOONGOSE.model('user', userSchema);