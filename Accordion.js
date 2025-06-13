import { useState } from "react";

export default function Accordion({ items }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleToggle = (indexes) => {
    setOpenAccordion(openAccordion == indexes ? null : indexes);
  };
  return (
    <div className="accordion">
      <h1 className="center">My Accordion ✈️🚀</h1>
      {items.map((data, index) => (
        <div key={index}>
          <button
            onClick={() => handleToggle(index)}
            className="accordion-title"
          >
            <h2>{data.title}</h2>
          </button>
          {openAccordion == index && (
            <div className="accordion-content">{data.content}</div>
          )}{" "}
        </div>
      ))}
    </div>
  );
}
