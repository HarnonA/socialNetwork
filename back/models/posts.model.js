const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    content: {
        type: String,
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
const Post = mongoose.model("Post", postSchema);
// Post.insertMany({
//     email: 'user@email.com',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies, neque nec interdum scelerisque, sapien urna ullamcorper dui, in hendrerit massa diam vitae mi. Fusce vitae libero tellus. Suspendisse at.',
//     likes: [],
//     dislikes: [],
//     comments: []
// })


// const User = require('./models/users.model');
// const user = new User({
//   email: 'email@email.com',
//   password: 'mypassword',
//   userName: 'username'
// });
// user.save()

module.exports = Post;