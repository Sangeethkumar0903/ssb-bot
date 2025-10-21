const express = require('express');
const router = express.Router();

// Test endpoint to check if backend is working
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'PIQ API is working!' });
});

// Submit PIQ form
router.post('/submit', async (req, res) => {
  try {
    console.log('Received PIQ data:', req.body);
    
    const { personalInfo, education, hobbies, achievements, leadership } = req.body;
    
    // Validate required fields
    if (!personalInfo || !personalInfo.name || !personalInfo.email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    // For now, just return a success response with a mock candidateId
    // In a real application, you would save this to a database
    const candidateId = 'candidate_' + Date.now();
    
    res.status(200).json({ 
      success: true, 
      message: 'PIQ submitted successfully', 
      candidateId: candidateId
    });
  } catch (error) {
    console.error('PIQ submission error:', error);
    res.status(500).json({ error: 'Failed to submit PIQ' });
  }
});

// Get PIQ by candidate ID
router.get('/:candidateId', async (req, res) => {
  try {
    const { candidateId } = req.params;
    
    // For testing, return mock data
    res.status(200).json({ 
      success: true, 
      data: {
        candidateId: candidateId,
        personalInfo: { name: 'Test User', email: 'test@example.com' },
        education: [{ degree: 'B.Tech', institution: 'Test University', year: '2023' }],
        hobbies: ['Reading', 'Sports'],
        submittedAt: new Date()
      }
    });
  } catch (error) {
    console.error('PIQ retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve PIQ' });
  }
});

module.exports = router;