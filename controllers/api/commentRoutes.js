const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE a new comment
router.post('/', withAuth, (req, res) => {
  // check session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id,
    })
      .then(dbCommentData => {
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.put('/:id', withAuth, (req, res) => {
  Comment.update(
    {
      comment_text: req.body.comment_text,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(commentData => {
      if (!commentData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(commentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a comment by ID
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;