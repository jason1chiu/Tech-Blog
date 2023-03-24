module.exports = {
  formatDate: (date) => {
    return new Date(date).toLocaleDateString();
  },

  pluralize: (word, count) => {
    return count === 1 ? word : word + 's';
  }
};