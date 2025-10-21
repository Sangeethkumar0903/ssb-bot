const mongoose = require('mongoose');

const piqSchema = new mongoose.Schema({
  candidateId: {
    type: String,
    required: true,
    unique: true
  },
  personalInfo: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: String,
    dateOfBirth: Date,
    gender: String,
    address: String
  },
  education: [{
    degree: String,
    institution: String,
    year: String,
    percentage: String
  }],
  workExperience: [{
    organization: String,
    position: String,
    duration: String,
    responsibilities: String
  }],
  hobbies: [String],
  achievements: [String],
  leadership: [{
    role: String,
    organization: String,
    duration: String,
    description: String
  }],
  completed: {
    type: Boolean,
    default: false
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PIQ', piqSchema);