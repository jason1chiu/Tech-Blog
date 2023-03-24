const { Post } = require('../models');

const postData = [
  {
    title: 'Post Title 1',
    post_url: 'https://example.com/post1',
    user_id: 1
  },
  {
    title: 'Post Title 2',
    post_url: 'https://example.com/post2',
    user_id: 2
  },
  {
    title: 'Post Title 3',
    post_url: 'https://example.com/post3',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;