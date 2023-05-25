// const User = require('./User.js');
// const Savedbook = require('./savedBook.js');

// User.associate({ SavedBook });
// SavedBook.associate({ User });

// module.exports= {User,Savedbook};

const User = require('./User.js');
const Savedbook = require('./SavedBook.js');

// Create an object containing all your models
const db = {
  User,
  Savedbook,
};

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

module.exports = db;
