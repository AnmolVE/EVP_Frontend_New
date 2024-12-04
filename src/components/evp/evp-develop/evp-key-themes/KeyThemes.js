import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import keyThemesImg from "../../../../assets/images/keyThemes.png";

import "./KeyThemes.css";

function KeyThemes() {
  const { data } = useSelector((store) => store.inputField);

  const [keyThemesData, setKeyThemesData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setKeyThemesData(data);
    }
  }, [data]);

  return (
    <div className="evp-keyThemes">
      <h2 className="custom_h2">Key Themes</h2>
      <p className="custom_para">
        These are the key themes your organisation is known for
      </p>
      <div className="faq-area">
        <div className="">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  {keyThemesData?.map((theme) => (
                    <AccordionItem key={theme.id}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {theme.key_theme}
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p>{theme.key_theme_desc}</p>
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
