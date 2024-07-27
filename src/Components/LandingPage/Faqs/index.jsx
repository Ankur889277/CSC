// FAQComponent.jsx

import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
`;

const FAQTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: ${props => (props.active ? "#F1F1F1" : "#F1F1F1")};
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #f1f1f1;
  }
`;

const FAQQuestion = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const FAQAnswer = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #555;
  display: ${props => (props.active ? "block" : "none")};
`;

const FAQs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi felis eu sagittis nibh blandit malesuada id amet urna. Varius sagittis placerat lacus pretium orci.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi felis eu sagittis nibh blandit malesuada id amet urna. Varius sagittis placerat lacus pretium orci.",
  },
  {
    question: "How do I access my test results?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi felis eu sagittis nibh blandit malesuada id amet urna. Varius sagittis placerat lacus pretium orci.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi felis eu sagittis nibh blandit malesuada id amet urna. Varius sagittis placerat lacus pretium orci.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi felis eu sagittis nibh blandit malesuada id amet urna. Varius sagittis placerat lacus pretium orci.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi felis eu sagittis nibh blandit malesuada id amet urna. Varius sagittis placerat lacus pretium orci.",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <FAQGrid>
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            active={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          >
            <FAQQuestion>{faq.question}</FAQQuestion>
            <FAQAnswer active={activeIndex === index}>{faq.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </FAQGrid>
    </FAQContainer>
  );
};

export default FAQComponent;
