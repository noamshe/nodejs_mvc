var dbm = require('db-migrate');
var type = dbm.dataType;
var async = require('async');

exports.up = function(db, callback) {
  async.series([
    db.createTable.bind(db, 'Users', {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      username: {type: 'string', notNull: true},
      email: {type: 'string', notNull: true},
      createdAt: 'datetime',
      updatedAt: 'datetime'
    }),

    db.createTable.bind(db, 'Tasks', {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      UserId: {type: 'int', notNull: true},
      title: {type: 'string', notNull: true},
      createdAt: 'datetime',
      updatedAt: 'datetime'
    })
  ], callback);
};

exports.down = function(db, callback) {
  async.series([
    db.dropTable.bind(db, 'Users'),
    db.dropTable.bind(db, 'Tasks')
  ], callback);
};
