import { useState } from 'preact/hooks';
import { FunctionalComponent } from 'preact';

interface AccordionProps {
    title: string;
    children: preact.ComponentChildren;
  }
export const AccordionItem:FunctionalComponent<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        className="accordion-header flex justify-between items-center py-4 px-3 w-full text-left text-gray-700 font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black font-bold text-sm">{title}</span>
        <svg
          className={`accordion-icon w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="accordion-content py-4 px-3">
          {children}
        </div>
      )}
    </div>
  );
};