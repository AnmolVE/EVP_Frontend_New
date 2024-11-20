import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import keyThemesImg from "../../../../assets/images/keyThemes.png";

import "./KeyThemes.css";

const keyThemes = [
  {
    id: 1,
    theme: "Freedom to Innovate",
    description:
      "The company promotes an entrepreneurial culture with no red tape, allowing employees to take ownership of their work and innovate freely.",
  },
  {
    id: 2,
    theme: "Career Growth and Purpose",
    description:
      "Lighthouse Canton emphasizes learning and growing with purpose in one's career, providing purposeful career opportunities and aligning personal growth with professional goals.",
  },
  {
    id: 3,
    theme: "Nurturing Ambition and Excellence",
    description:
      "The company fosters a nurturing environment where leaders and peers push employees to reach their potential, emphasizing excellence and ambition.",
  },
  {
    id: 4,
    theme: "Supportive Work Culture",
    description:
      "The work culture is described as open, collaborative, and excellence-driven, with strong support from leadership and colleagues.",
  },
  {
    id: 5,
    theme: "Work-Life Balance",
    description:
      " The company is committed to helping employees maintain a healthy work-life balance.",
  },
  {
    id: 6,
    theme: "Trust and Transparency",
    description:
      "There is a high level of trust and transparency within the team, which is crucial for employee satisfaction and retention.",
  },
  {
    id: 7,
    theme: "Client-First Mission",
    description:
      "Employees are motivated by the company's mission to be a client-first organization, which can be a strong attractor for talent in the wealth management sector.",
  },
  {
    id: 8,
    theme: "Global Presence and Opportunities",
    description:
      "With offices in Singapore, Dubai, and Bengaluru, the company offers a global platform for employees to grow and make an impact.",
  },
];

function KeyThemes() {
  return (
    <div className="evp-keyThemes">
      <h2 className="evp-develop-heading">Key Themes</h2>
      <p className="evp-develop-para">
        Validate your Key Themes data before goes to next step
      </p>
      <div className="faq-area">
        <div className="">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  {keyThemes.map((theme) => (
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>{theme.theme}</AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p>{theme.description}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <img
                  src={keyThemesImg}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyThemes;
