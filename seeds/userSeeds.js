const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: 'password1',
    bio: 'I am a web developer'
  },
  {
    username: 'jane_doe',
    email: 'jane.doe@example.com',
    password: 'password2',
    bio: 'I love hiking and travelling'
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;