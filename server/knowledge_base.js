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
  
    // Search function to find relevant documents
    search: function(query) {
      const queryLower = query.toLowerCase();
      const results = [];
      
      this.documents.forEach(doc => {
        let score = 0;
        
        // Check title match
        if (doc.title.toLowerCase().includes(queryLower)) {
          score += 10;
        }
        
        // Check tags match
        doc.tags.forEach(tag => {
          if (queryLower.includes(tag) || tag.includes(queryLower)) {
            score += 5;
          }
        });
        
        // Check content match (simplified)
        const contentStr = JSON.stringify(doc.content).toLowerCase();
        if (contentStr.includes(queryLower)) {
          score += 3;
        }
        
        if (score > 0) {
          results.push({ ...doc, score });
        }
      });
      
      // Sort by score
      return results.sort((a, b) => b.score - a.score);
    },
  
    // Get specific document by ID
    getDocument: function(docId) {
      return this.documents.find(doc => doc.id === docId);
    },
  
    // Get all documents in a category
    getByCategory: function(category) {
      return this.documents.filter(doc => doc.category === category);
    },
  
      // Extract answer from document content
  extractAnswer: function(docId, query) {
    const doc = this.getDocument(docId);
    if (!doc) return null;
    
    // This is a simplified extraction - you can enhance with better NLP
    const queryLower = query.toLowerCase();
    
    // Check for specific keywords and return relevant sections
    if (queryLower.includes('password')) {
      return doc.content.password_reset;
    }
    if (queryLower.includes('leave') && queryLower.includes('balance')) {
      return "Login to HR Portal > My Profile > Leave Balance. Updated real-time.";
    }
    if (queryLower.includes('address') && queryLower.includes('cab')) {
      return doc.content.cab_service?.address_update;
    }
    
    // Return full content if no specific match
    return doc.content;
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
    
    // Special handling for specific questions FIRST
    if (queryLower.includes('who') && queryLower.includes('named') && queryLower.includes('you')) {
      return { type: 'faq', answer: 'My maalik' };
    }
    
    if (queryLower.includes('why') && (queryLower.includes('named') || queryLower.includes('name')) && queryLower.includes('you')) {
      return { type: 'faq', answer: 'You would have known if you would have been to a shop in UK trying to call a shopkeeper not looking at you!' };
    }
    
    // Check FAQs with improved matching
    for (const [key, answer] of Object.entries(faqs)) {
      // Check for exact phrase match or key words
      if (queryLower.includes(key) || 
          (key.includes('who') && (queryLower.includes('who') && queryLower.includes('named'))) ||
          (key.includes('creator') && (queryLower.includes('creator') || queryLower.includes('created') || queryLower.includes('made'))) ||
          (key.includes('name') && queryLower.includes('name'))) {
        return { type: 'faq', answer };
      }
    }
    
    // Search documents
    const searchResults = knowledgeBase.search(query);
    if (searchResults.length > 0) {
      const topResult = searchResults[0];
      const answer = knowledgeBase.extractAnswer(topResult.id, query);
      return {
        type: 'document',
        document: topResult.title,
        answer,
        confidence: topResult.score / 10
      };
    }
    
    // Check for contact queries
    if (queryLower.includes('contact') || queryLower.includes('email') || queryLower.includes('phone')) {
      for (const [dept, info] of Object.entries(contacts)) {
        if (queryLower.includes(dept)) {
          return { type: 'contact', department: dept, ...info };
        }
      }
    }
    
    return {
      type: 'unknown',
      message: "I couldn't find specific information about that. Please try rephrasing or contact HR at ext. 3333."
    };
  }
  
  // Export for use in Node.js
  module.exports = {
    knowledgeBase,
    faqs,
    contacts,
    processQuery
  };