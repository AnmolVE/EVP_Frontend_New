import { CompanyInfoIcon } from "../assets/icons/icons";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const DISCOVER = [
  { name: "Design Principles", icon: CompanyInfoIcon },
  { name: "Primary Research", icon: CompanyInfoIcon },
  { name: "Secondary Research", icon: CompanyInfoIcon },
];

export const DEVELOP = [
  { name: "Company Dataset", icon: CompanyInfoIcon },
  { name: "Attributes of Great Place", icon: CompanyInfoIcon },
  { name: "Key Themes", icon: CompanyInfoIcon },
  { name: "Audience Wise Messaging", icon: CompanyInfoIcon },
  { name: "Talent Insights", icon: CompanyInfoIcon },
];

export const DISSECT = [
  { name: "Analysis", icon: CompanyInfoIcon },
  { name: "Alignment", icon: CompanyInfoIcon },
];

export const DESIGN = [
  { name: "Top 4 Themes", icon: CompanyInfoIcon },
  { name: "Messaging Hierarchy", icon: CompanyInfoIcon },
  { name: "Creative Direction", icon: CompanyInfoIcon },
  { name: "EVP Definition", icon: CompanyInfoIcon },
  { name: "EVP Promise", icon: CompanyInfoIcon },
  { name: "EVP Audit", icon: CompanyInfoIcon },
  { name: "EVP Embedment", icon: CompanyInfoIcon },
];

export const DELIVER = [
  { name: "EVP Statement & Pillars", icon: CompanyInfoIcon },
  { name: "EVP Hero Creative", icon: CompanyInfoIcon },
  { name: "EVP Talking Points", icon: CompanyInfoIcon },
  { name: "EVP Handbook", icon: CompanyInfoIcon },
  { name: "EVP Execution Plan", icon: CompanyInfoIcon },
];

export const listItemEndpointMapping = {
  "Company Dataset": `${REACT_APP_BASE_URL}/companies`,
  Perception: `${REACT_APP_BASE_URL}/perception`,
  Loyalty: `${REACT_APP_BASE_URL}/loyalty`,
  Advocacy: `${REACT_APP_BASE_URL}/advocacy`,
  Attraction: `${REACT_APP_BASE_URL}/attraction`,
  Influence: `${REACT_APP_BASE_URL}/influence`,
  Brand: `${REACT_APP_BASE_URL}/brand`,
  "Attributes of Great Place": `${REACT_APP_BASE_URL}/attributes-of-great-workplace`,
  "Key Themes": `${REACT_APP_BASE_URL}/key-themes`,
  "Audience Wise Messaging": `${REACT_APP_BASE_URL}/audience-wise-messaging`,
  Analysis: `${REACT_APP_BASE_URL}/swot-analysis`,
  Alignment: `${REACT_APP_BASE_URL}/alignment`,
};
