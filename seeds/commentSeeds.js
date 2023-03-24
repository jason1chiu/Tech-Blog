const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'This is a great post!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I love the content of this post.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Thanks for sharing this information.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'This is really helpful.',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'I learned a lot from this post.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Great job on this post!',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'This post was very informative.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'I appreciate you sharing this.',
    user_id: 8,
    post_id: 4
  },
  {
    comment_text: 'This is a great discussion.',
    user_id: 9,
    post_id: 5
  },
  {
    comment_text: 'Thanks for starting this conversation.',
    user_id: 10,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;