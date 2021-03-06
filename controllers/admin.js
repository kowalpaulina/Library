const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Book = require("../models/books");
const User = require("../models/users");

router.use("/", function(req, res, next) {
  jwt.verify(req.query.token, "secret", function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: "Not Authenticated",
        error: err
      });
    } else {
      userData = decoded;
      if (userData.user.approved) {
        next();
      } else {
        return res.status(401).json({
          title: "Not Authenticated",
          error: err
        });
      }
    }
  });
});

router.patch("/users-manage/:id", function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    if (!user) {
      return res.status(500).json({
        title: "No user found!",
        error: { message: "user not found" }
      });
    }
    (user.approved = req.body.approved),
      (user.friend = req.body.friend),
      user.save(function(err, result) {
        if (err) {
          return res.status(500).json({
            title: "An error occurred",
            error: err
          });
        }
        res.status(200).json({
          message: "Updated user",
          obj: result
        });
      });
  });
});

router.delete("/users-manage/:id", function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    if (!user) {
      return res.status(500).json({
        title: "No user Found!",
        error: { message: "user not found" }
      });
    }
    user.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: "An error occurred",
          error: err
        });
      }

      res.status(200).json({
        message: "Deleted user",
        obj: result
      });
    });
  });
});

module.exports = router;
