// const express = require('express');
// const cors = require('cors');
// const { educationHistory, skills, projects } = require('./data');

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());app.get('/api/education', (req, res) => res.json(educationHistory));
// app.get('/api/skills', (req, res) => res.json(skills));
// app.get('/api/projects', (req, res) => res.json(projects));

// app.listen(PORT, () => {
//     console.log(` Server backend berjalan di http://localhost:${PORT}`);
// });

const express = require('express');
const path = require('path');
const cors = require('cors'); // Essential for cross-origin requests from your frontend

const app = express();
const PORT = process.env.PORT || 3000; // Make sure your backend runs on port 3000

// --- DYNAMIC CORS CONFIGURATION ---
// In development, CORS_ORIGIN will likely be undefined, so it defaults to localhost:5173.
// In production (on Vercel), you will set process.env.CORS_ORIGIN
// to your deployed frontend URL (e.g., https://your-portfolio.vercel.app).
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: CORS_ORIGIN }));

// Serve static files from the 'project_images' directory under the '/project_images' route
app.use('/project_images', express.static(path.join(__dirname, 'project_images')));

// --- Your API endpoint for projects ---
// Assuming your data.js exports `projects`
const { educationHistory, skills, projects } = require('./data.js'); // Adjust path if data.js is not in the same directory

// API endpoint for ALL projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// NEW: API endpoint for a SINGLE project by ID
app.get('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(p => p.id === projectId);

    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: 'Project not found' });
    }
});

// --- NEW: API endpoint for Education History ---
app.get('/api/education', (req, res) => {
    res.json(educationHistory);
});

// --- NEW: API endpoint for Skills ---
app.get('/api/skills', (req, res) => {
    res.json(skills);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});