const router = require('express').Router();
const mongoose = require('mongoose');

const Project = require('../models/Project');

// get all projects
router.get('/', async (req, res) => {
    const projects = await Project.find({});
    res.send(projects);
});

// get single project
router.get('/:id', async (req, res) => {

    const producto = await Project.findById(req.params.id);

    if (!producto) {
        throw new Error('The project could not be found');
    }

    res.send(producto);
});


// new project
router.post('/', async (req, res) => {

    const project = new Project(req.body.projectData);

    project.save()
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

// udpate project
router.put('/:id', async (req, res) => {
    Project.findById(req.params.id, (err, doc) => {
        if (err) {
            return res.status(500).json({error: err});
        }
        if (!doc) {
            return res.status(404).json({error: 'The project could not be found'});
        }

        let projectNewData = req.body.projectNewData;
        Object.assign(doc, projectNewData);

        doc.save(err => {
            if (err) {
                return res.status(500).json({error: err});
            }

            res.json(doc);
        });
    });
});

// delete project
router.delete('/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
        throw new Error('The project could not be found');
    }

    project.remove()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

module.exports = router;