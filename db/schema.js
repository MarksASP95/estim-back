const { gql } = require('apollo-server');

// Schema
const typeDefs = gql`

    type Group {
        id: ID
        name: String
        about: String
        image: String
    }

    type Task {
        id: ID
        title: String
        description: String
        done: Boolean
        timeInvested: Int
        dueDate: String
        comments: [String]
        images: [String]
    }

    type Project {
        id: ID
        name: String
        about: String
        image: String
        group: Group
        active: Boolean
        dueDate: String
    }

    type WorkerProject {
        project: Project
        hourlyRate: Float
        fixedRate: Float
    }

    type Worker {
        id: ID
        name: String
        email: String
        password: String
        about: String
        profilePic: String
    }

    type Token {
        token: String
    }

    input GroupInput {
        name: String!
        about: String
        image: String
    }

    input ProjectInput {
        name: String!
        about: String
        image: String
        groupId: ID
        active: Boolean
        dueDate: String
    }


    input WorkerInput {
        name: String!
        email: String!
        password: String!
        about: String
        group: [GroupInput]
        profilePic: String
    }

    input TaskInput {
        title: String!
        description: String
        projectId: ID!
        done: Boolean
        timeInvested: Int
        dueDate: String
        images: [String]
    }

    input UsuarioInput {
        nombre: String!
        apellido: String!
        email: String!
        password: String!
        profilePic: String
    }

    input WorkerProjectInput {
        project: ID!
        hourlyRate: Float
        fixedRate: Float
    }

    input AuthInput{
        email: String!
        password: String!
    }

    type Query {

        # Task
        getTask(id: ID!): Task
        getProjectTasks(projectId: ID!): [Task]
        getWorkerTasks(workerId: ID!): [Task]

        # Project
        getProject(id: ID!): Project
        getProjects(userId: ID!): [Project]

        # Worker
        getWorker(id: ID!): Worker

        # Group
        getGroup(id: ID!): Group
        getGroups(userId: ID!): [Group]
    }

    type Mutation {

        # Task
        createTask(input: TaskInput): Task
        editTask(id: ID!, input: TaskInput): Task
        deleteTask(id: ID!): Task

        # Project
        createProject(input: ProjectInput): Task
        editProject(id: ID!, input: ProjectInput): Project
        deleteProject(id: ID!): Project

        # Worker
        createWorker(input: WorkerInput): Task
        editWorker(id: ID!, input: WorkerInput): Worker

        # Group
        createGroup(input: GroupInput): Task
        editGroup(id: ID!, input: GroupInput): Group
    }
`;

module.exports = typeDefs;