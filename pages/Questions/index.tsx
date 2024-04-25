import MultiSelect from '@/components/MultiSelect';
import Layout from '@/layout';
import React, { ReactNode, useState } from 'react';

type QuestionPageProps = {
  children: ReactNode;
};

const QuestionPage: React.FC<QuestionPageProps> = ({ children }) => {
const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  // ... more options
];

const handleSelectionChange = (selectedValues: string[]) => {
  setSelectedOptions(selectedValues);
};

  return (
    <Layout>
        <div className="flex flex-col items-center justify-center h-[75vh]">
        <MultiSelect options={options} selectedValues={selectedOptions} onSelectionChange={handleSelectionChange} />
        </div>
    </Layout>
  );
};

export default QuestionPage;