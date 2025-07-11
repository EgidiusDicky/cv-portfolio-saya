const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: CORS_ORIGIN }));

// --- REMOVED: Serving static files for project images from backend ---
// app.use('/project_images', express.static(path.join(__dirname, 'project_images')));

const { educationHistory, skills, projects } = require('./data.js');

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(p => p.id === projectId);

    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: 'Project not found' });
    }
});

app.get('/api/education', (req, res) => {
    res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
    res.json(skills);
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
    console.log(`CORS allowed for origin: ${CORS_ORIGIN}`);
});