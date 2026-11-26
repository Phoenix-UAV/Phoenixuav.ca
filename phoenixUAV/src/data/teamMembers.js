// src/data/teamMembers.js
// Team member data organized by subteams.
// Supported optional contact links for each member:
// - 'linkedin': LinkedIn profile URL
// - 'github': GitHub profile URL
// - 'email': Email address (e.g. "name@phoenixuav.ca")
// - 'website': Personal website or portfolio URL
// - 'imagePosition': CSS object-position for custom photo framing (e.g. "center 20%", "center 75%")

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
        image: "/Team-members/Aryan.jpg", 
        email: "aahusain@mun.ca",
        linkedin: "https://www.linkedin.com/in/aryan-abidi-husain-742992287/"
      },
      { 
        name: "Abner Zhang", 
        role: "Aerodynamics & Propulsion Lead", 
        image: "/Team-members/Abner.png",
        email: "yichengz@mun.ca",
        github: "https://github.com/yichengz-hub"
      },
      { 
        name: "Yassin Elsayed", 
        role: "Business Lead", 
        image: "/Team-members/Yassin.png",
        email: "ytelsayed@mun.ca",
        linkedin: "https://www.linkedin.com/in/yassin-elsayed-98a206366/"
      },
      { 
        name: "Jeffrie Pitchee", 
        role: "Electrical Lead", 
        image: "/Team-members/Jeffrie.png",
        email: "mrjpitchee@mun.ca",
        linkedin: "https://www.linkedin.com/in/jeffrie-pitchee-27a04a233/"
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
        image: "/Team-members/Jack.jpg",
        email: "jtellison@mun.ca",
        github: "https://github.com/JackEllison4",
        website: "https://jackellison.ca",
        linkedin: "https://www.linkedin.com/in/jackellison4/"
      },
      { 
        name: "Chloe McNamara", 
        role: "Structures Lead", 
        image: "/Team-members/Chloe.jpg",
        imagePosition: "center 35%",
        email: "cpmcnamara@mun.ca",
        linkedin: "https://www.linkedin.com/in/chloe-mcnamara-666b95347/"
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

      {
        name: "Adyaan Zeeshan",
        role: "AERO & PROP Member",
        image: "/Team-members/Profile_placeholder.png",
      },
      
      {
        name: "Nathan Churchill",
        role: "AERO & PROP Member",
        image: "/Team-members/Profile_placeholder.png",
      },
 
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

      {
        name: "Hailey Lake",
        role: "BUSINESS Member",
        image: "/Team-members/Profile_placeholder.png",
      },

      {
        name: "Marcelo",
        role: "BUSINESS Member",
        image: "/Team-members/Profile_placeholder.png",
      }
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

      {
        name: "Samuel Wheeler",
        role: "Electrical Member",
        image: "/Team-members/Samuel_Wheeler.jpg",
        linkedin: "https://www.linkedin.com/in/samuel-wheeler-977aa3386/",
        email: "sdwheeler@mun.ca"
      },

      {
        name: "Ian Gill",
        role: "Electrical Member",
        image: "/Team-members/Ian_Gill.jpg",
        linkedin: "https://www.linkedin.com/in/ian-gill-ba7985386/",
        email: "ilgill@mun.ca"
      }
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
        role: "Software Member", 
        image: "/Team-members/Alix.jpg",
        email: "arboivin@mun.ca",
        github: "https://github.com/Animalliketree",
        linkedin: "https://linkedin.com/alix-boivin"
      },

      { 
        name: "Ella Robinette", 
        role: "Software Member", 
        image: "/Team-members/Profile_placeholder.png",
        email: "marobinette@mun.ca",
        github: "https://github.com/ella-ti"
      },    

      { 
        name: "Jonathan Macdonald", 
        role: "Software Member", 
        image: "/Team-members/Jonathan_MacDonald.png",
        email: "Jpamacdonald@mun.ca",
        linkedin: "https://www.linkedin.com/in/jonathan-p-macdonald/"
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

      { 
        name: "Alphy Eldo", 
        role: "Structures Member", 
        image: "/Team-members/Alphy.jpg",
        email: "aaeldo@mun.ca",
        linkedin: "https://www.linkedin.com/in/alphy-alias-eldo/"
      },
      
      { 
        name: "Ian Cole", 
        role: "Structures Member", 
        image: "/Team-members/Ian_Cole.jpeg",
        email: "icole@mun.ca",
        linkedin: "www.linkedin.com/in/ian-cole1287"
      },

      { 
        name: "Michael Oni", 
        role: "Structures Member", 
        image: "/Team-members/Michael.jpg",
        imagePosition: "center 75%",
        email: "moni@mun.ca",
      },

      { 
        name: "Jonathan Gilbert", 
        role: "Structures Member", 
        image: "/Team-members/Jonathan_Gilbert.png",
        linkedin: "https://www.linkedin.com/in/jonathan-gilbert08/",
        email: "jonathanhg@mun.ca",
      },

      { 
        name: "Sam Beckett", 
        role: "Structures Member", 
        image: "/Team-members/Sam_Beckett.jpg",
        linkedin: "https://www.linkedin.com/in/sam-beckett-1614133a5/",
        email: "sbeckett@mun.ca",
      },

      { 
        name: "Blake Crocker", 
        role: "Structures Member", 
        image: "/Team-members/Blake.jpg",
        linkedin: "https://www.linkedin.com/in/blake-crocker-0a7b25390/",
        email: "bacrocker@mun.ca",
      },

      { 
        name: "Jane Margarette Bataller", 
        role: "Structures Member", 
        image: "/Team-members/Jane.jpg",
        linkedin: "https://www.linkedin.com/in/jane-margarette-bataller-12988a444/",
      },

      { 
        name: "Vater Tese", 
        role: "Structures Member", 
        image: "/Team-members/Vater.jpg",
        linkedin: "https://www.linkedin.com/in/vater-tese/",
      },
      
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
        image: "/Team-members/Rohan.png",
        github: "https://github.com/RohanTorul",
        linkedin: "https://www.linkedin.com/in/rohan-k-torul/",
        email: "rohan@torul.org"
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
