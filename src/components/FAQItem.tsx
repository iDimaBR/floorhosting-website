import { AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border border-gray-200 rounded-lg overflow-hidden mb-2 last:mb-0">
      <AccordionTrigger className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 font-medium hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-4 py-3 text-gray-600 bg-gray-50">{answer}</AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
