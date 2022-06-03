const express = require("express");
const Routes = express.Router();

let Post = require("./post.model");

// Get all posts
Routes.route("/").get(function (req, res) {
  Post.find(function (error, posts) {
    if (error) {
      res.json(error);
    } else {
      res.json(posts);
    }
  });
});
// Get one post
Routes.route("/:id").get(function (req, res) {
  Post.findById(req.params.id, function (error, post) {
    if (error) {
      res.json(error);
    } else {
      res.json(post);
    }
  });
});
//Add one post
Routes.route("/add").post(function (req, res) {
  let post = new Post(req.body);
  post
    .save()
    .then(() => {
      res.status(200).json("post saved");
    })
    .catch(() => {
      res.status(400).send("Error in saving post");
    });
});

// Edit one post
Routes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (error, post) {
    if (error) {
      res.json(err);
    }
    res.json(post);
  });
});

//Update post
Routes.route("/update/:id").post(function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (!post) res.status(404).send("No data found");
    else {
      post.title = req.body.title;
      post.body = req.body.body;
      post.wallheight = req.body.wallheight;
      post.wallwidth = req.body.wallwidth;
      post.floorwidth = req.body.floorwidth;
      post.floorlength = req.body.floorlength;
      post.tilesizewallwidth = req.body.tilesizewallwidth;
      post.tilesizewallheight = req.body.tilesizewalllength;
      post.tilesizefloorwidth = req.body.tilesizefloorwidth;
      post.tilesizefloorlength = req.body.tilesizefloorlength;

      post
        .save()
        .then(() => {
          res.json("SUppdated");
        })
        .catch(() => {
          res.status(400).send("Database error");
        });
    }
  });
});
// Erase
Routes.route("/delete/:id").delete(function (req, res) {
  Post.findByIdAndRemove({ _id: req.params.id }, function (error) {
    if (error) res.json(error);
    else res.json("Success!");
  });
});

module.exports = Routes;
