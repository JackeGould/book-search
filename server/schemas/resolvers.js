// resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

// Use the functionality in the user-controller.js as a guide.

const { User } = require('../models')

const resolvers = {
  Query: {
    user: async () => {
      return User.findById()
    }
  }
}

module.exports = resolvers