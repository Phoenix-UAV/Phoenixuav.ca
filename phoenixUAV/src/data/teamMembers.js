// src/data/teamMembers.js
// Team member data organized by subteams.
// Supported optional contact links for each member:
// - 'linkedin': LinkedIn profile URL
// - 'github': GitHub profile URL
// - 'email': Email address (e.g. "name@phoenixuav.ca")
// - 'website': Personal website or portfolio URL

import { email } from "astro:schema";

export const subteamMembers = [
  {
    subteam: "LEADS",
    members: [
      
      // Example Member Format:
      //{ 
      //  name: "Team Member 1", 
      //  role: "Team Lead", 
      //  image: "/Team-members/Profile_placeholder.png", 
      //  linkedin: "https://linkedin.com",
      //  github: "https://github.com",
      //  email: "lead@phoenixuav.ca",
      //  website: "https://example.com"
      //},
      
       
      { 
        name: "Aryan Husain", 
        role: "Team Lead", 
        image: "/Team-members/Profile_placeholder.png", 
        email: "aahusain@mun.ca",
      },
      { 
        name: "Abner Zhang", 
        role: "Aerodynamics & Propulsion Lead", 
        image: "/Team-members/Profile_placeholder.png",
        email: "yichengz@mun.ca"
      },
      { 
        name: "Yassin Elsayed", 
        role: "Business Lead", 
        image: "/Team-members/Profile_placeholder.png",
        email: "ytelsayed@mun.ca"
      },
      { 
        name: "Jeffrie Pitchee", 
        role: "Electrical Lead", 
        image: "/Team-members/Profile_placeholder.png",
        email: "mrjpitchee@mun.ca"
      },
      { 
        name: "Jackson Rose", 
        role: "Electrical Lead", 
        image: "/Team-members/Profile_placeholder.png",
        email: "jacksonr@mun.ca"
      },
      { 
        name: "Jack Ellison", 
        role: "Software Lead", 
        image: "/Team-members/Profile_placeholder.png",
        email: "jtellison@mun.ca",
        github: "https://github.com/JackEllison4",
        website: "https://jackellison.ca"
      },
      { 
        name: "Chloe McNamara", 
        role: "Structures Lead", 
        image: "/Team-members/Profile_placeholder.png",
        email: "cpmcnamara@mun.ca"
      },
    ]
  },

  {
    subteam: "AERO & PROP",
    members: [
      
      // Example Member Format:
      //{ 
      //  name: "Team Member 1", 
      //  role: "Team Lead", 
      //  image: "/Team-members/Profile_placeholder.png", 
      //  linkedin: "https://linkedin.com",
      //  github: "https://github.com",
      //  email: "lead@phoenixuav.ca",
      //  website: "https://example.com"
      //},
      
    ]
  },

  {
    subteam: "BUSINESS",
    members: [
      
      // Example Member Format:
      //{ 
      //  name: "Team Member 1", 
      //  role: "Team Lead", 
      //  image: "/Team-members/Profile_placeholder.png", 
      //  linkedin: "https://linkedin.com",
      //  github: "https://github.com",
      //  email: "lead@phoenixuav.ca",
      //  website: "https://example.com"
      //},
      
    ]
  },

  {
    subteam: "ELECTRICAL",
    members: [
      
      // Example Member Format:
      //{ 
      //  name: "Team Member 1", 
      //  role: "Team Lead", 
      //  image: "/Team-members/Profile_placeholder.png", 
      //  linkedin: "https://linkedin.com",
      //  github: "https://github.com",
      //  email: "lead@phoenixuav.ca",
      //  website: "https://example.com"
      //},
      
    ]
  },

  {
    subteam: "SOFTWARE",
    members: [
      
      // Example Member Format:
      //{ 
      //  name: "Team Member 1", 
      //  role: "Team Lead", 
      //  image: "/Team-members/Profile_placeholder.png", 
      //  linkedin: "https://linkedin.com",
      //  github: "https://github.com",
      //  email: "lead@phoenixuav.ca",
      //  website: "https://example.com"
      //},

      { 
        name: "Alix Boivin", 
        role: "Flight Systems Advisor", 
        image: "/Team-members/Profile_placeholder.png",
        email: "arboivin@mun.ca",
        github: "https://github.com/Animalliketree"
      },

      { 
        name: "Ella Robinette", 
        role: "Flight Systems Advisor", 
        image: "/Team-members/Profile_placeholder.png",
        email: "marobinette@mun.ca",
        github: "https://github.com/ella-ti"
      },
      
    ]
  },

  {
    subteam: "STRUCTURES",
    members: [
      
      // Example Member Format:
      //{ 
      //  name: "Team Member 1", 
      //  role: "Team Lead", 
      //  image: "/Team-members/Profile_placeholder.png", 
      //  linkedin: "https://linkedin.com",
      //  github: "https://github.com",
      //  email: "lead@phoenixuav.ca",
      //  website: "https://example.com"
      //},
      
    ]
  },

  {
    subteam: "Advisors",
    members: [
      
      // Example Member Format:
      //{ 
      //  name: "Team Member 1", 
      //  role: "Team Lead", 
      //  image: "/Team-members/Profile_placeholder.png", 
      //  linkedin: "https://linkedin.com",
      //  github: "https://github.com",
      //  email: "lead@phoenixuav.ca",
      //  website: "https://example.com"
      //},

      { 
        name: "Rohan Torul", 
        role: "Flight Systems Advisor", 
        image: "/Team-members/Profile_placeholder.png",
        github: "https://github.com/RohanTorul",
      },

      { 
        name: "Joy Henein", 
        role: "Structures Advisor", 
        image: "/Team-members/Profile_placeholder.png",
        email: "jhenein@mun.ca"
      },
      
    ]
  },   
];
