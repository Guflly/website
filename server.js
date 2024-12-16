const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to get sample portfolio data (extendable for future dynamic content)
app.get('/api/portfolio', (req, res) => {
  const portfolioData = {
    name: 'Gufl',
    description: 'Professional Plugin Developer / Video Editor',
    skills: ['Developing', 'Video Editing', 'Designing'],
    experience: [
      { title: 'Minecraft Plugin Development', years: 2 },
      { title: 'Premiere Pro Video Editing', years: 1.5 },
      { title: '3D Thumbnail Designing', years: 1 }
    ]
  };

  res.json(portfolioData);
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
