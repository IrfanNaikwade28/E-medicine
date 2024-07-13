import { AccordionItem } from "./accordionItem";
export const AccordionContainer = () => {
  return (
    <>
      <div className="accordion max-w-xl mx-auto bg-white rounded-lg overflow-hidden">
      <AccordionItem title="Home">
        <p className="text-gray-600">Home</p>
      </AccordionItem>
      </div>
    </>
  );
};
