const knowledgeBase = {
    documents: [
      {
        id: "leave-policy",
        title: "Leave Policies",
        category: "HR",
        tags: ["leave", "vacation", "sick", "holiday", "time off", "absence"],
        content: {
          annual_leave: {
            entitlement: "21 days per calendar year",
            accrual: "1.75 days per month",
            carry_forward: "Maximum 5 days to next year, must be used by March 31st",
            approval_process: "Submit request via HR Portal at least 2 weeks in advance",
            emergency_leave: "Contact manager immediately, formal request within 24 hours"
          },
          sick_leave: {
            entitlement: "12 days per year",
            documentation: "Medical certificate required for absences exceeding 2 consecutive days",
            notification: "Inform manager before 9:00 AM on the first day"
          },
          special_leave: {
            bereavement: "3-5 days depending on relationship",
            maternity: "26 weeks (full pay for 12 weeks, half pay for 14 weeks)",
            paternity: "2 weeks at full pay",
            marriage: "3 days for employee's own marriage",
            study: "Up to 5 days for job-related examinations"
          }
        }
      },
      {
        id: "remote-work",
        title: "Work From Home and Remote Work Policies",
        category: "Operations",
        tags: ["wfh", "remote", "hybrid", "work from home", "work from anywhere", "flexibility"],
        content: {
          hybrid_model: {
            standard: "3 days office, 2 days remote per week",
            core_days: "Tuesday, Wednesday, Thursday (team-dependent)",
            flexibility: "Manager discretion for special circumstances"
          },
          full_remote: {
            eligibility: [
              "Minimum 6 months tenure",
              "Performance rating of 'Meets Expectations' or above",
              "Role suitable for remote work"
            ],
            application: "Submit request through HR Portal with manager approval",
            review: "Every 6 months"
          },
          work_from_anywhere: {
            duration: "Up to 30 days per year",
            locations: "Within country borders",
            notice: "2 weeks advance notice required",
            requirements: [
              "Stable internet (minimum 20 Mbps)",
              "Secure work environment",
              "Available during core hours (10 AM - 4 PM)"
            ]
          },
          support: {
            internet_reimbursement: "₹1,500 per month",
            ergonomic_allowance: "One-time ₹10,000 for home office setup"
          }
        }
      },
      {
        id: "byod",
        title: "Bring Your Own Device (BYOD) Policy",
        category: "IT",
        tags: ["byod", "personal device", "mobile", "laptop", "own device"],
        content: {
          eligible_devices: {
            smartphones: "iOS 14+ or Android 10+",
            tablets: "iPad OS 14+ or Android 10+",
            laptops: "Windows 10/11, macOS 11+, Ubuntu 20.04+",
            minimum_specs: "8GB RAM, 256GB storage, encryption enabled"
          },
          security: {
            mdm: "Mandatory Mobile Device Management installation",
            software: "Company-provided antivirus and firewall",
            authentication: "Multi-factor authentication required",
            updates: "Security patches within 30 days"
          },
          reimbursement: {
            mobile: "₹1,000 per month",
            laptop: "₹2,000 per month",
            software: "Up to ₹5,000 one-time for required software"
          }
        }
      },
      {
        id: "it-support",
        title: "IT Support and Equipment",
        category: "IT",
        tags: ["password", "reset", "laptop", "computer", "software", "it", "helpdesk", "technical"],
        content: {
          password_reset: {
            portal: "https://passwordreset.company.internal",
            steps: [
              "Click 'Forgot Password'",
              "Enter employee ID",
              "Receive OTP on registered mobile",
              "Create new password (min 12 characters)"
            ],
            locked_account: "Contact IT Helpdesk at ext. 5555"
          },
          new_laptop: {
            eligibility: "New joiners automatic, replacement after 3 years",
            process: [
              "Raise ticket in IT Portal",
              "Get manager approval",
              "Processing time: 5-7 business days"
            ],
            specifications: {
              business: "Intel i5, 8GB RAM, 512GB SSD",
              developer: "Intel i7, 16GB RAM, 1TB SSD",
              designer: "MacBook Pro or equivalent"
            }
          },
          helpdesk: {
            phone: "Ext. 5555",
            email: "it.support@company.internal",
            hours: "Monday-Friday, 8 AM - 8 PM",
            emergency: "24/7 for critical issues"
          }
        }
      },
      {
        id: "benefits",
        title: "Benefits and Compensation",
        category: "HR",
        tags: ["benefits", "insurance", "health", "flexible benefits", "compensation", "medical"],
        content: {
          flexible_benefits: {
            annual_allocation: "₹50,000 per employee",
            categories: [
              "Health & Wellness",
              "Learning & Development",
              "Lifestyle",
              "Family Care"
            ],
            enrollment: "January 1-31 each year"
          },
          health_insurance: {
            coverage: "Employee + Spouse + 2 Children + 2 Parents",
            sum_insured: "Base ₹5 lakhs, Top-up available up to ₹20 lakhs",
            features: [
              "Cashless at 5000+ hospitals",
              "Pre-existing diseases after 2 years",
              "Maternity coverage ₹75,000",
              "Annual health checkup included"
            ],
            claims: {
              cashless: "Show employee health card at network hospital",
              reimbursement: "Submit bills within 15 days",
              contact: "insurance.support@company.internal"
            }
          },
          life_insurance: {
            life_cover: "3x annual salary",
            accidental: "Additional 2x annual salary",
            disability: "Partial/Total disability benefits available"
          }
        }
      },
      {
        id: "transportation",
        title: "Transportation and Commute",
        category: "Facilities",
        tags: ["cab", "transport", "shuttle", "parking", "commute", "travel", "address update"],
        content: {
          cab_service: {
            timings: {
              morning: "7:00 AM - 9:00 AM",
              evening: "5:00 PM - 10:00 PM"
            },
            booking: "Via TransportApp or ext. 4444",
            address_update: [
              "Login to TransportApp",
              "Go to Profile > Address",
              "Update pickup/drop location",
              "Effective from next working day"
            ]
          },
          late_night: {
            eligibility: "Working beyond 8:00 PM",
            booking: "Through TransportApp with manager approval",
            limit: "₹2,000 per trip within city"
          },
          parking: {
            car: "Reserved for Grade M2+, first-come for others",
            two_wheeler: "Basement 2",
            visitor: "Request 24 hours in advance"
          }
        }
      },
      {
        id: "facilities",
        title: "Workplace Facilities",
        category: "Facilities",
        tags: ["office", "cafeteria", "gym", "recreation", "meeting rooms", "facilities"],
        content: {
          office_hours: {
            regular: "9:00 AM - 6:00 PM",
            flexible: "8:00 AM - 5:00 PM or 10:00 AM - 7:00 PM",
            core_hours: "10:00 AM - 4:00 PM mandatory"
          },
          cafeteria: {
            breakfast: "8:00 AM - 10:00 AM",
            lunch: "12:00 PM - 2:30 PM",
            snacks: "4:00 PM - 6:00 PM",
            dinner: "7:00 PM - 9:00 PM",
            subsidy: "50% company contribution"
          },
          recreation: {
            gym: "6:00 AM - 9:00 PM, trainer 7:00 AM - 8:00 PM",
            game_room: "24/7 access",
            library: "9:00 AM - 7:00 PM",
            meditation: "24/7, booking via FacilityApp"
          }
        }
      },
      {
        id: "dudebot-info",
        title: "DudeBot Information",
        category: "General",
        tags: ["dudebot", "assistant", "ai", "creator", "name", "malik"],
        content: {
          creator: "My maalik created and named me DudeBot",
          purpose: "I am an enterprise AI assistant designed to help with workplace queries and policies",
          capabilities: [
            "Answer questions about HR policies",
            "Provide IT support information", 
            "Help with benefits and facilities",
            "Voice input support",
            "Source citations for all answers"
          ],
          name_origin: "My maalik gave me the name DudeBot when he created me",
          name_reason: "You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!"
        }
      }
    ],
  
    // Enhanced search function with better matching
    search: function(query) {
      const queryLower = query.toLowerCase();
      const results = [];
      
      // Extract key terms from query
      const queryTerms = this.extractKeyTerms(queryLower);
      
      this.documents.forEach(doc => {
        let score = 0;
        let matchedTerms = [];
        
        // Check title match (highest priority)
        const titleLower = doc.title.toLowerCase();
        queryTerms.forEach(term => {
          if (titleLower.includes(term)) {
            score += 15;
            matchedTerms.push(term);
          }
        });
        
        // Check tags match (high priority)
        doc.tags.forEach(tag => {
          queryTerms.forEach(term => {
            if (tag.includes(term) || term.includes(tag)) {
              score += 8;
              if (!matchedTerms.includes(term)) matchedTerms.push(term);
            }
          });
        });
        
        // Check content match with semantic understanding
        const contentScore = this.calculateContentScore(doc.content, queryTerms);
        score += contentScore.score;
        matchedTerms = matchedTerms.concat(contentScore.matchedTerms);
        
        // Check category relevance
        const categoryScore = this.getCategoryScore(doc.category, queryTerms);
        score += categoryScore;
        
        if (score > 0) {
          results.push({ 
            ...doc, 
            score,
            matchedTerms: [...new Set(matchedTerms)],
            relevance: this.calculateRelevance(score, matchedTerms.length)
          });
        }
      });
      
      // Sort by score and relevance
      return results.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.relevance - a.relevance;
      });
    },

    // Extract key terms from query
    extractKeyTerms: function(query) {
      // Remove common words and extract meaningful terms
      const stopWords = ['what', 'how', 'where', 'when', 'why', 'who', 'is', 'are', 'am', 'do', 'does', 'did', 'can', 'could', 'would', 'should', 'will', 'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'my', 'your', 'our', 'their', 'i', 'you', 'we', 'they', 'me', 'him', 'her', 'us', 'them'];
      
      return query
        .split(/\s+/)
        .filter(term => term.length > 2 && !stopWords.includes(term))
        .map(term => term.replace(/[^\w]/g, '')); // Remove punctuation
    },

    // Calculate content score with semantic understanding
    calculateContentScore: function(content, queryTerms) {
      let score = 0;
      let matchedTerms = [];
      const contentStr = JSON.stringify(content).toLowerCase();
      
      // Direct term matches
      queryTerms.forEach(term => {
        if (contentStr.includes(term)) {
            score += 5;
          matchedTerms.push(term);
        }
      });
      
      // Semantic matches for common workplace terms
      const semanticMappings = {
        'benefit': ['insurance', 'health', 'medical', 'flexible', 'compensation'],
        'transport': ['cab', 'shuttle', 'commute', 'travel', 'address'],
        'password': ['reset', 'login', 'account', 'security'],
        'leave': ['vacation', 'holiday', 'time off', 'absence'],
        'remote': ['wfh', 'work from home', 'hybrid', 'flexible'],
        'it': ['computer', 'laptop', 'software', 'technical', 'helpdesk'],
        'hr': ['human resources', 'employee', 'policy', 'benefits']
      };
      
      queryTerms.forEach(term => {
        if (semanticMappings[term]) {
          semanticMappings[term].forEach(semanticTerm => {
            if (contentStr.includes(semanticTerm)) {
          score += 3;
              if (!matchedTerms.includes(term)) matchedTerms.push(term);
            }
          });
        }
      });
      
      return { score, matchedTerms };
    },

    // Get category relevance score
    getCategoryScore: function(category, queryTerms) {
      const categoryMappings = {
        'HR': ['benefit', 'leave', 'vacation', 'policy', 'employee', 'hr'],
        'IT': ['password', 'computer', 'laptop', 'software', 'technical', 'it'],
        'Operations': ['remote', 'wfh', 'work', 'office', 'hybrid'],
        'Facilities': ['transport', 'cab', 'shuttle', 'office', 'cafeteria', 'gym'],
        'General': ['contact', 'email', 'phone', 'support']
      };
      
      const categoryTerms = categoryMappings[category] || [];
      let score = 0;
      
      queryTerms.forEach(term => {
        if (categoryTerms.includes(term)) {
          score += 2;
        }
      });
      
      return score;
    },

    // Calculate overall relevance
    calculateRelevance: function(score, matchedTermsCount) {
      return (score * 0.7) + (matchedTermsCount * 2);
    },
  
    // Get specific document by ID
    getDocument: function(docId) {
      return this.documents.find(doc => doc.id === docId);
    },
  
    // Get all documents in a category
    getByCategory: function(category) {
      return this.documents.filter(doc => doc.category === category);
    },
  
        // Intelligent answer extraction with context understanding
    extractAnswer: function(docId, query) {
      const doc = this.getDocument(docId);
      if (!doc) return null;
      
      const queryLower = query.toLowerCase();
      const queryTerms = this.extractKeyTerms(queryLower);
      
      // Try to find the most relevant section based on query intent
      const relevantSection = this.findRelevantSection(doc.content, queryTerms, queryLower);
      
      if (relevantSection) {
        return this.formatAsMarkdown(relevantSection);
      }
      
      // Fallback: return formatted full content
      return this.formatAsMarkdown(doc.content);
    },

    // Find the most relevant section of content based on query
    findRelevantSection: function(content, queryTerms, queryLower) {
      // Define query patterns and their corresponding content sections
      const queryPatterns = {
        // Password/Login related
        password: ['password_reset', 'login', 'account', 'security'],
        reset: ['password_reset', 'reset', 'recovery'],
        login: ['password_reset', 'login', 'access'],
        
        // Benefits related
        benefit: ['flexible_benefits', 'benefits', 'insurance', 'health'],
        eligible: ['flexible_benefits', 'benefits', 'eligibility'],
        insurance: ['flexible_benefits', 'health', 'medical'],
        
        // Leave related
        leave: ['annual_leave', 'sick_leave', 'special_leave', 'leave_policy'],
        vacation: ['annual_leave', 'leave_policy'],
        sick: ['sick_leave', 'medical'],
        balance: ['annual_leave', 'leave_policy'],
        
        // Transport related
        transport: ['cab_service', 'shuttle_service', 'transportation'],
        cab: ['cab_service', 'transportation'],
        shuttle: ['shuttle_service', 'transportation'],
        address: ['cab_service', 'address_update'],
        commute: ['cab_service', 'shuttle_service', 'transportation'],
        
        // Remote work related
        remote: ['hybrid_model', 'full_remote', 'work_from_anywhere'],
        wfh: ['hybrid_model', 'full_remote', 'work_from_anywhere'],
        home: ['hybrid_model', 'full_remote', 'work_from_anywhere'],
        hybrid: ['hybrid_model', 'full_remote'],
        
        // IT related
        laptop: ['new_laptop', 'equipment', 'hardware'],
        computer: ['new_laptop', 'equipment', 'hardware'],
        software: ['software_requests', 'applications'],
        helpdesk: ['helpdesk', 'support', 'technical'],
        
        // Facilities related
        office: ['office_hours', 'facilities', 'cafeteria'],
        cafeteria: ['cafeteria', 'dining', 'food'],
        gym: ['recreation', 'fitness', 'exercise'],
        meeting: ['meeting_rooms', 'conference', 'facilities']
      };
      
      // Find matching patterns
      let bestMatch = null;
      let bestScore = 0;
      
      queryTerms.forEach(term => {
        if (queryPatterns[term]) {
          queryPatterns[term].forEach(sectionKey => {
            if (content[sectionKey]) {
              const score = this.calculateSectionRelevance(content[sectionKey], queryTerms, queryLower);
              if (score > bestScore) {
                bestScore = score;
                bestMatch = content[sectionKey];
              }
            }
          });
        }
      });
      
      // If no specific section found, try to find the most relevant top-level section
      if (!bestMatch) {
        Object.keys(content).forEach(sectionKey => {
          const score = this.calculateSectionRelevance(content[sectionKey], queryTerms, queryLower);
          if (score > bestScore) {
            bestScore = score;
            bestMatch = content[sectionKey];
          }
        });
      }
      
      return bestMatch;
    },

    // Calculate how relevant a section is to the query
    calculateSectionRelevance: function(section, queryTerms, queryLower) {
      if (!section) return 0;
      
      let score = 0;
      const sectionStr = JSON.stringify(section).toLowerCase();
      
      // Direct term matches
      queryTerms.forEach(term => {
        if (sectionStr.includes(term)) {
          score += 10;
        }
      });
      
      // Check for semantic matches
      const semanticMatches = {
        'benefit': ['insurance', 'health', 'medical', 'flexible'],
        'transport': ['cab', 'shuttle', 'commute', 'travel'],
        'password': ['reset', 'login', 'account', 'security'],
        'leave': ['vacation', 'holiday', 'time off', 'absence'],
        'remote': ['wfh', 'work from home', 'hybrid', 'flexible']
      };
      
      queryTerms.forEach(term => {
        if (semanticMatches[term]) {
          semanticMatches[term].forEach(semanticTerm => {
            if (sectionStr.includes(semanticTerm)) {
              score += 5;
            }
          });
        }
      });
      
      return score;
    },

  // Format content as markdown for better presentation
  formatAsMarkdown: function(content) {
    if (typeof content === 'string') {
      return content;
    }
    
    let markdown = '';
    
    for (const [key, value] of Object.entries(content)) {
      const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      markdown += `**${formattedKey}:**\n`;
      
      if (Array.isArray(value)) {
        value.forEach(item => {
          markdown += `* ${item}\n`;
        });
      } else if (typeof value === 'object' && value !== null) {
        for (const [subKey, subValue] of Object.entries(value)) {
          const formattedSubKey = subKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          markdown += `* **${formattedSubKey}:** ${subValue}\n`;
        }
      } else {
        markdown += `${value}\n`;
      }
      markdown += '\n';
    }
    
    return markdown;
    }
  };
  
  // FAQ responses
  const faqs = {
    "leave balance": "Login to HR Portal > My Profile > Leave Balance. Updated real-time.",
    "medical reimbursement documents": "Original bills, prescription, discharge summary (if hospitalized), claim form.",
    "work abroad": "Requires special approval from HR and Legal. Tax implications must be considered.",
    "emergency contact update": "HR Portal > My Profile > Emergency Contacts > Edit. Changes effective immediately.",
    "notice period": "Junior (L1-L3): 30 days, Mid-level (L4-L6): 60 days, Senior (L7+): 90 days",
    "guest house booking": "Through HR Portal > Services > Guest House. Subject to availability, 3 days maximum.",
    "salary advance": "HR Portal > Compensation > Salary Advance. Max 2 months salary, 0% interest, 12-month repayment.",
    "mobile reimbursement": "Monthly bill up to ₹1,500 for voice and data. Submit bills quarterly.",
    "safety issues": "Email safety@company.internal or call ext. 9999. Anonymous reporting available.",
    "who named you": "My maalik",
    "who created you": "My maalik",
    "who made you": "My maalik",
    "your creator": "My maalik",
    "your name": "My maalik",
    "why named dudebot": "You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!",
    "why dudebot name": "You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!",
    "why this name": "You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!",
    "why called dudebot": "You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!"
  };
  
  // Contact directory
  const contacts = {
    "hr": { email: "hr.support@company.internal", ext: "3333" },
    "it": { email: "it.support@company.internal", ext: "5555" },
    "facilities": { email: "facilities@company.internal", ext: "4444" },
    "security": { email: "security@company.internal", ext: "9999" },
    "transport": { email: "transport@company.internal", ext: "6666" },
    "insurance": { email: "insurance.support@company.internal", ext: "7777" },
    "cafeteria": { ext: "2222" },
    "reception": { ext: "0" },
    "emergency": { ext: "911" }
  };
  
  // Helper function to process queries
  function processQuery(query) {
    const queryLower = query.toLowerCase();
    
    // Special handling for specific questions FIRST (highest priority)
    if (queryLower.includes('who') && queryLower.includes('named') && queryLower.includes('you')) {
      return { type: 'faq', answer: 'My maalik' };
    }
    
    if (queryLower.includes('why') && (queryLower.includes('named') || queryLower.includes('name')) && queryLower.includes('you')) {
      return { type: 'faq', answer: 'You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!' };
    }
    
    // Enhanced FAQ matching with better pattern recognition
    const faqResult = findBestFAQMatch(queryLower);
    if (faqResult) {
      return { type: 'faq', answer: faqResult.answer };
    }
    
    // Enhanced document search with multiple results
    const searchResults = knowledgeBase.search(query);
    if (searchResults.length > 0) {
      // Try to get the best answer from the top results
      for (const result of searchResults.slice(0, 3)) { // Check top 3 results
        const answer = knowledgeBase.extractAnswer(result.id, query);
        if (answer && answer.trim().length > 10) { // Ensure we have a meaningful answer
      return {
        type: 'document',
            document: result.title,
        answer,
            confidence: Math.min(result.score / 15, 1), // Normalize confidence
            matchedTerms: result.matchedTerms,
            category: result.category
          };
        }
      }
    }
    
    // Enhanced contact queries with better matching
    const contactResult = findBestContactMatch(queryLower);
    if (contactResult) {
      return contactResult;
    }
    
    // If we have some search results but no good answer, provide a helpful response
    if (searchResults.length > 0) {
      const topResult = searchResults[0];
      return {
        type: 'partial',
        document: topResult.title,
        answer: `I found information about ${topResult.title}, but I need more specific details. Could you please rephrase your question or be more specific about what you're looking for?`,
        confidence: 0.3,
        suggestions: generateSuggestions(topResult, queryLower)
      };
    }
    
    return {
      type: 'unknown',
      message: "I couldn't find specific information about that. Please try rephrasing your question or contact HR at ext. 3333 for assistance."
    };
  }

  // Enhanced FAQ matching function
  function findBestFAQMatch(queryLower) {
    const queryTerms = knowledgeBase.extractKeyTerms(queryLower);
    
    // Define FAQ patterns with weights - only for very specific questions
    const faqPatterns = [
      {
        patterns: ['who', 'named', 'you', 'creator', 'made', 'created'],
        answer: 'My maalik',
        weight: 10,
        minScore: 15 // Require high confidence
      },
      {
        patterns: ['why', 'named', 'name', 'dudebot', 'called'],
        answer: 'You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!',
        weight: 10,
        minScore: 15 // Require high confidence
      },
      {
        patterns: ['what', 'can', 'you', 'do', 'capabilities', 'help', 'assist'],
        answer: 'I can help you with HR policies, IT support, benefits information, leave policies, and general workplace queries.',
        weight: 3,
        minScore: 8 // Lower threshold for general capability questions
      },
      {
        patterns: ['how', 'use', 'voice', 'speak', 'microphone'],
        answer: 'You can use voice input by clicking the microphone button. I support speech recognition in Chrome, Edge, and Safari browsers.',
        weight: 5,
        minScore: 8
      }
    ];
    
    let bestMatch = null;
    let bestScore = 0;
    
    faqPatterns.forEach(pattern => {
      let score = 0;
      pattern.patterns.forEach(patternTerm => {
        if (queryTerms.includes(patternTerm) || queryLower.includes(patternTerm)) {
          score += pattern.weight;
        }
      });
      
      // Only return match if score meets minimum threshold
      if (score >= pattern.minScore && score > bestScore) {
        bestScore = score;
        bestMatch = { answer: pattern.answer };
      }
    });
    
    return bestMatch;
  }

  // Enhanced contact matching function
  function findBestContactMatch(queryLower) {
    const queryTerms = knowledgeBase.extractKeyTerms(queryLower);
    
    // Define contact patterns
    const contactPatterns = {
      'it': ['it', 'technical', 'computer', 'laptop', 'password', 'software'],
      'hr': ['hr', 'human resources', 'benefits', 'leave', 'policy'],
      'transport': ['transport', 'cab', 'shuttle', 'commute', 'travel'],
      'facilities': ['facilities', 'office', 'cafeteria', 'gym', 'meeting']
    };
    
    for (const [dept, patterns] of Object.entries(contactPatterns)) {
      let score = 0;
      patterns.forEach(pattern => {
        if (queryTerms.includes(pattern) || queryLower.includes(pattern)) {
          score += 1;
        }
      });
      
      if (score > 0 && contacts[dept]) {
        return {
          type: 'contact',
          department: dept,
          ...contacts[dept],
          confidence: Math.min(score / patterns.length, 1)
        };
      }
    }
    
    return null;
  }

  // Generate helpful suggestions based on search results
  function generateSuggestions(result, queryLower) {
    const suggestions = [];
    
    if (result.category === 'HR') {
      suggestions.push('Try asking about specific benefits, leave policies, or employee policies');
    } else if (result.category === 'IT') {
      suggestions.push('Try asking about password reset, laptop requests, or technical support');
    } else if (result.category === 'Facilities') {
      suggestions.push('Try asking about transport booking, office facilities, or cafeteria hours');
    } else if (result.category === 'Operations') {
      suggestions.push('Try asking about remote work policies, office hours, or work arrangements');
    }
    
    return suggestions;
  }
  
  // Export for use in Node.js
  module.exports = {
    knowledgeBase,
    faqs,
    contacts,
    processQuery
  };