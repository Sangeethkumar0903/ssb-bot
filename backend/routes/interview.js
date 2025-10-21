const express = require('express');
const router = express.Router();
const { generateQuestion } = require('../services/hfService');

// Start a new interview session
router.post('/start', async (req, res) => {
  try {
    const { candidateId, piqData } = req.body;
    
    if (!candidateId) {
      return res.status(400).json({ error: 'Candidate ID is required' });
    }
    
    // For now, just create a mock interview ID
    // In a real application, you would save this to a database
    const interviewId = 'interview_' + Date.now();
    
    // Generate first question based on PIQ data
    const firstQuestion = await generateQuestion({
      profile: extractProfileFromPIQ(piqData),
      history: [],
      min_remain: 15
    });
    
    res.status(200).json({ 
      success: true, 
      interviewId: interviewId, 
      question: firstQuestion 
    });
  } catch (error) {
    console.error('Interview start error:', error);
    res.status(500).json({ error: 'Failed to start interview' });
  }
});

// Submit answer and get next question
router.post('/:interviewId/answer', async (req, res) => {
  try {
    const { interviewId } = req.params;
    const { answer, transcript } = req.body;
    
    // For testing, just generate a random question
    const questionCount = Math.floor(Math.random() * 15) + 1;
    
    if (questionCount >= 15) {
      return res.status(200).json({ 
        success: true, 
        interviewComplete: true,
        message: 'Interview completed successfully'
      });
    }
    
    // Generate next question
    const nextQuestion = await generateQuestion({
      profile: { name: 'Candidate' },
      history: [],
      min_remain: 15 - questionCount
    });
    
    res.status(200).json({ 
      success: true, 
      question: nextQuestion,
      questionCount: questionCount + 1
    });
  } catch (error) {
    console.error('Answer submission error:', error);
    res.status(500).json({ error: 'Failed to process answer' });
  }
});

// Helper function to extract profile from PIQ
function extractProfileFromPIQ(piqData) {
  return {
    name: piqData.personalInfo?.name || 'Candidate',
    education: piqData.education?.length > 0 
      ? `${piqData.education[0].degree} in ${piqData.education[0].field}, ${piqData.education[0].year}`
      : 'Education information not provided',
    hobbies: piqData.hobbies || [],
    leadership_example: piqData.leadership?.length > 0 
      ? piqData.leadership[0].description 
      : 'Leadership experience not provided'
  };
}

module.exports = router;