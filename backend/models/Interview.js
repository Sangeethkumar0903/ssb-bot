const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  category: String,
  answer: String,
  transcript: String,
  order: Number,
  askedAt: {
    type: Date,
    default: Date.now
  },
  answeredAt: Date
});

const interviewSchema = new mongoose.Schema({
  candidateId: {
    type: String,
    required: true
  },
  piqData: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  questions: [questionSchema],
  status: {
    type: String,
    enum: ['not-started', 'in-progress', 'completed', 'cancelled'],
    default: 'not-started'
  },
  startedAt: Date,
  completedAt: Date,
  overallScore: Number,
  strengths: [String],
  areasForImprovement: [String]
});

module.exports = mongoose.model('Interview', interviewSchema);