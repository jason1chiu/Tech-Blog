const { Post } = require('../models');

const postData = [{
        title: 'Title One',
        post_content: 'Praesent ultrices orci ut augue condimentum eleifend.',
        user_id: 1
    },
    {
        title: 'Title Two',
        post_content: 'Sed feugiat leo sit amet libero finibus euismod. Nulla viverra vulputate eleifend.',
        user_id: 2
    },
    {
        title: 'Another Title',
        post_content: 'Donec vitae enim in nulla tincidunt malesuada. Duis ac lacus mauris. Suspendisse non mi malesuada erat egestas porttitor id a turpis. Vivamus id libero urna. Nam tincidunt quam vitae turpis sodales, a convallis odio scelerisque.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;