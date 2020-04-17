const express = require('express');

const ProjectsRouter = require('./projects/projects_router');
const ResourcesRouter = require('./resources/resources_router');


const server = express();

server.use(express.json());
server.use('/resources', ResourcesRouter);
server.use('/projects', ProjectsRouter);

module.exports = server; 