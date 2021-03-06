const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Book = require("../models/books");
const User = require("../models/users");

router.get("/", function(req, res, next) {
  User.find().exec(function(err, books) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    res.status(200).json({
      message: "Users list",
      obj: books
    });
  });
});

router.use("/", function(req, res, next) {
  jwt.verify(req.query.token, "secret", function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: "Not Authenticated1",
        error: err
      });
    } else {
      userData = decoded;
      if (userData.user.approved || userData.user.friend) {
        next();
      } else {
        return res.status(401).json({
          title: "Not Authenticated2",
          error: err
        });
      }
    }
  });
});

router.get("/:id", function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    if (!user) {
      return res.status(500).json({
        title: "An error occurred",
        error: { message: "User not found" }
      });
    }
    res.status(200).json({
      message: "Logged user",
      obj: user
    });
  });
});

router.use("/", function(req, res, next) {
  jwt.verify(req.query.token, "secret", function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: "Not Authenticated3",
        error: err
      });
    } else {
      userData = decoded;
      if (userData.user.approved) {
        next();
      } else {
        return res.status(401).json({
          title: "Not Authenticated4",
          error: err
        });
      }
    }
  });
});

router.post("/register", function(req, res, next) {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    approved: false
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    res.status(201).json({
      message: "User added to library",
      obj: result
    });
  });
});

module.exports = router;
