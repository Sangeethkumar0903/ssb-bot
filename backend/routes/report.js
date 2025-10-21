const express = require('express');
const router = express.Router();

// Generate report
router.post('/generate', async (req, res) => {
  try {
    const { interviewId } = req.body;
    
    // For now, return a mock report
    const mockReport = {
      overallScore: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
      strengths: [
        "Clear communication skills",
        "Good leadership examples",
        "Strong motivation for defense services",
        "Excellent problem-solving approach"
      ],
      areasForImprovement: [
        "Could provide more specific examples",
        "Work on reducing filler words",
        "Practice maintaining eye contact",
        "Improve time management in responses"
      ],
      questions: [
        {
          question: "Tell us about your leadership experience.",
          answer: "Sample answer would appear here",
          score: 85,
          feedback: "Good example but could be more detailed with specific challenges faced."
        },
        {
          question: "Why do you want to join the defense services?",
          answer: "Sample answer would appear here",
          score: 90,
          feedback: "Strong motivation clearly expressed."
        }
      ]
    };
    
    res.status(200).json({ 
      success: true, 
      report: mockReport
    });
  } catch (error) {
    console.error('Report generation error:', error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

module.exports = router;