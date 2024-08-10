import { brutCardVariants } from '@/components/Common/BrutCard';
import Accordion from '@/components/Common/CustomComponents/accordian';
import { faqList } from '@/data';
import { cn } from '@/utils/tw';

const FAQList = () => {
  return (
    <div className="mx-auto mb-3 mt-[18px] flex w-[1075px]">
      <div className={cn(brutCardVariants(), 'divide-y-[1px] divide-font-primary p-0')}>
        {faqList.map((faq, idx) => (
          <Accordion key={idx} title={faq.title}>
            <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: faq.content }} />
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQList;