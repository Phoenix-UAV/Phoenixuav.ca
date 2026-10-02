// src/data/sponsors.js
// Sponsors data organized by tiers (Gold, Silver, Bronze).
//
// Supported properties for each sponsor:
// - 'name': Name of the sponsor company/organization
// - 'logo': Path to the logo image file (e.g. "/sponsors/logo.png")
// - 'url': (Optional) Website URL for the sponsor. Clicking the logo opens this link in a new tab.
// - 'website': (Optional) Alternative property for website URL.
// - 'class': (Optional) Custom CSS class for specific logo sizing tweaks (e.g. "cenovus-logo", "hebron-logo", "hibernia-logo")

export const goldSponsors = [
  { 
    name: "Cenovus Energy", 
    logo: "/sponsors/Cenovus_Energy-Logo.png", 
    url: "https://www.cenovus.com",
    class: "cenovus-logo" 
  },
  { 
    name: "Government of Newfoundland & Labrador", 
    logo: "/sponsors/NFLD_GOV.png",
    url: "https://www.gov.nl.ca"
  },
  { 
    name: "PEGNL", 
    logo: "/sponsors/pegnl_logo.png",
    url: "https://www.pegnl.ca"
  },
  { 
    name: "Hebron", 
    logo: "/sponsors/Hebron-logo.png", 
    url: "https://www.hebronproject.com",
    class: "hebron-logo" 
  },
  { 
    name: "Hibernia", 
    logo: "/sponsors/hibernia-logo.png", 
    url: "https://www.hibernia.ca",
    class: "hibernia-logo" 
  }
];

export const silverSponsors = [
  // Example Silver Sponsor Format:
  // {
  //   name: "Sponsor Name",
  //   logo: "/sponsors/logo.png",
  //   url: "https://example.com"
  // }
];

export const bronzeSponsors = [
  { 
    name: "CoLab Software", 
    logo: "/sponsors/CoLab-Logo.png",
    url: "https://www.colabsoftware.com"
  },
];
