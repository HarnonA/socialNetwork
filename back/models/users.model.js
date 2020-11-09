const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    userName: {
        type: String,
        required: [true, "Username is required"]
    },
    gender: {
        type: String,
        required: [true, "gender is required"]
    },
    friends: {
        type: [String],
    },
    posts: {
        type: [Object],
    },
    likes: {
        type: [String],
    },
    dislikes: {
        type: [String],
    },
    comments: {
        type: [String],
    },
});
const User = mongoose.model("User", userSchema);
// User.insertMany({
//     email: 'user@email.com',
//     password: '123456',
//     userName: 'Some user',
//     gender: 'm',
//     posts: [
//     {
//       text: 'Post 1',
//       date: '17:28 09/11/2020',
//       likes: 0,
//       dislikes: 0,
//       comments: [{
//     user: 'Jhon',
//  text: 'Cool post'
// }, {
// user: 'Maria',
// text: 'Wow'
// }
// ],
//       id: '5fa9a68bc2a55c67e0ee2714'
//     },
//     {
//       text: 'Post 2',
//       date: '17:29 09/11/2020',
//       likes: 0,
//       dislikes: 0,
//       comments: [],
//       id: '5fa9a690c2a55c67e0ee2715'
//     }
//     ],
// })


module.exports = User;