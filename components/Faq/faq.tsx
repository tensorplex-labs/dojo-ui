import { FC } from 'react';
import { Accordion } from '@lidofinance/lido-ui';
import Section from 'components/section';
import { FaqProps } from './types';
import { FaqItem } from './faqStyles';
import { cn } from 'utils/tw';
import { brutCardVariants } from 'components/tplx-brut-card';

const Faq: FC<FaqProps> = (props) => {
  const { faqList } = props;

  return (
    <Section>
      {faqList.map(({ id, title, content }, index) => (
        <Accordion
          className={cn(brutCardVariants({ variant: 'default' }))}
          key={`faq.item.${index}`}
          defaultExpanded={index === 0}
          summary={<span style={{ fontWeight: 700 }}>{String(title)}</span>}
        >
          <FaqItem
            style={{
              color: '#7a8aa0',
              fontWeight: '500',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '14px',
              letterSpacing: 0.3,
            }}
            dangerouslySetInnerHTML={{
              __html: `<p>${content}`,
            }}
          />
        </Accordion>
      ))}
    </Section>
  );
};

export default Faq;
