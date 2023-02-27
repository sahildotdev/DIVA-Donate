import React from "react";
import { Accordion } from "@chakra-ui/react";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

const FAQContent = () => (
    <div className=" mt-[5rem]">
      <Accordion allowToggle defaultIndex={[0]}>
        {faqData.map((faq, index) => (
            <FAQItem title={faq.title} body={faq.body} key={index} />
        ))}
      </Accordion>
    </div>
);

export default FAQContent;
