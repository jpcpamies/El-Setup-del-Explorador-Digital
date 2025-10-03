
import React, { MutableRefObject } from 'react';
import { GuideBlock, GuideType } from '../types';
import ContentBlock from './ContentBlock';

interface GuideContentProps {
  blocks: GuideBlock[];
  guide: GuideType;
  setGuide: (guide: GuideType) => void;
  theme: any;
  sectionRefs: MutableRefObject<Record<string, HTMLDivElement | null>>;
}

const GuideContent: React.FC<GuideContentProps> = ({ blocks, guide, setGuide, theme, sectionRefs }) => {
  return (
    <div className="py-8">
      {blocks.map(block => (
        <div 
          key={block.id} 
          id={block.id} 
          ref={el => sectionRefs.current[block.id] = el}
          className="mb-16 scroll-mt-24"
        >
          <ContentBlock block={block} guide={guide} setGuide={setGuide} theme={theme} />
        </div>
      ))}
    </div>
  );
};

export default GuideContent;
