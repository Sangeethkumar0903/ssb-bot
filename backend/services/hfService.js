// Fallback questions in case of API failure
const fallbackQuestions = [
  {
    question: "Can you tell me about a time when you demonstrated leadership skills?",
    category: "leadership",
    follow_up_hint: "Look for specific examples and outcomes",
    should_end_session: false
  },
  {
    question: "What motivates you to pursue a career in defense services?",
    category: "motivation",
    follow_up_hint: "Assess genuineness and depth of motivation",
    should_end_session: false
  },
  {
    question: "Describe a situation where you had to overcome a significant challenge.",
    category: "situational",
    follow_up_hint: "Evaluate problem-solving approach and resilience",
    should_end_session: false
  },
  {
    question: "How do you handle stress and pressure in difficult situations?",
    category: "psychology",
    follow_up_hint: "Look for healthy coping mechanisms",
    should_end_session: false
  },
  {
    question: "What does teamwork mean to you, and how do you contribute to a team?",
    category: "personality",
    follow_up_hint: "Assess team player qualities",
    should_end_session: false
  }
];

async function generateQuestion(data) {
  const { profile, history, min_remain } = data;
  
  // For now, return a random fallback question
  // In a real application, you would call the Hugging Face API here
  const randomQuestion = fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
  
  return randomQuestion;
}

module.exports = {
  generateQuestion
};