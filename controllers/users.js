/**
 * Created by noam on 7/3/14.
 */

var dbseq = require('../models/initsequelize.js')

module.exports.newUser = function(req, res) {
  res.render('newuser', { title: 'Add New User' });
}

/* POST to Add User Service */
module.exports.addUser = function(req, res) {
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  dbseq.User
    .create({ username: userName, email: userEmail })
    .success(function() {
      dbseq.User
        .findOrCreate({ username: userName }, { email: userEmail })
        .success(function(user, created) {
          console.log(user.values)
          console.log(created)

          /*
           {
           username: 'fnord',
           job: 'omnomnom',
           id: 2,
           createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
           updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
           }
           created: false
           */
          res.location("userlist");
          //And forward to success page
          res.redirect("userlist");
        })
    })

};

module.exports.showUserList = function(req, res) {
  dbseq.User.findAll({ include: [ dbseq.Task ] }).success(function(users) {
    res.render('userlist', {
      title: 'User List',
      users: users
    })
  })
};

module.exports.newUserAndTask = function(req, res) {
  res.render('newuserandtask', { title: 'Add New User' });
}

module.exports.addUserAndTask = function(req, res) {

  var userName = req.body.username;
  var userEmail = req.body.useremail;
  var task = req.body.task;

  dbseq.User.create({ username: userName, email: userEmail }).complete(function(err, source) {
    dbseq.Task.create({ title: task, UserId: source.id }).complete(function(err, target) {
      res.location("userlist");
      res.redirect("userlist");
    })
  })
};

module.exports.addTaskToUser = function(req, res) {
  dbseq.User.findAll({ include: [ dbseq.Task ] }).success(function(users) {
    res.render('addtasktouser', {
      title: 'Add Task To User',
      users: users
    })
  })
}

module.exports.saveUserAndTask = function(req, res) {
  var userName = req.body.username;
  var userEmail = req.body.useremail;
  var task = req.body.task;
  var selectedUsername = req.body.selectUser;
  console.log("req.body");
  console.log(req.body);

  dbseq.User.find({ where: {username: selectedUsername}} ).complete(function(err, source) {
    dbseq.Task.create({ title: task, UserId: source.id }).complete(function(err, target) {
//      target.setUser(source).complete(function(err) {
        res.location("userlist");
        res.redirect("userlist");
//      })
    })
  })
}

module.exports.angular = function(req, res) {
  res.render('angular_view', { title: 'Angular View' });
}
