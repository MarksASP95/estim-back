const Worker = require('../models/Worker');
const Group = require('../models/Group');
const Task = require('../models/Task');
const Project = require('../models/Project');

// resolvers
const resolvers = {
    Query: {
        getTask: async (_, { id }, c) => {
            const task = await Task.findById(id);

            if (!task) {
                throw new Error('Task does not exist');
            }

            return task;
        }
    }
}