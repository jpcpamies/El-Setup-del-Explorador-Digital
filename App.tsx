
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GUIDE_BLOCKS } from './constants';
import { GuideType, GuideBlock, SectionContent } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GuideContent from './components/GuideContent';

const App: React.FC = () => {
  const [guide, setGuide] = useState<GuideType>('complete');
  const [activeSection, setActiveSection] = useState<string>(GUIDE_BLOCKS[0]?.id || '');

  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const allSections = GUIDE_BLOCKS.flatMap(block => [
    ...block.complete.map(s => ({ ...s, blockId: block.id })),
    ...block.quick.map(s => ({ ...s, blockId: block.id }))
  ]);

  const handleScroll = useCallback(() => {
    const scrollPosition = contentRef.current?.scrollTop || 0;
    const offset = 200; // px
    
    let currentSectionId = '';

    for (const block of GUIDE_BLOCKS) {
        const blockElement = sectionRefs.current[block.id];
        if (blockElement && blockElement.offsetTop - offset <= scrollPosition) {
            currentSectionId = block.id;
        }
    }
    
    setActiveSection(currentSectionId);
  }, []);

  useEffect(() => {
    const contentDiv = contentRef.current;
    if (contentDiv) {
      contentDiv.addEventListener('scroll', handleScroll);
      return () => {
        contentDiv.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);
  
  const theme = {
    complete: {
      bg: 'bg-slate-50',
      gradient: 'from-indigo-100 via-white to-white',
      text: 'text-slate-800',
      sidebar: 'bg-white/70 backdrop-blur-lg',
      sidebarText: 'text-slate-600',
      sidebarActiveText: 'text-indigo-600',
      sidebarBorder: 'border-indigo-500'
    },
    quick: {
      bg: 'bg-slate-50',
      gradient: 'from-emerald-100 via-white to-white',
      text: 'text-slate-800',
      sidebar: 'bg-white/70 backdrop-blur-lg',
      sidebarText: 'text-slate-600',
      sidebarActiveText: 'text-emerald-600',
      sidebarBorder: 'border-emerald-500'
    }
  };

  const currentTheme = theme[guide];

  return (
    <div className={`font-sans ${currentTheme.bg} ${currentTheme.text} min-h-screen`}>
       <div className={`absolute inset-0 z-0 bg-gradient-to-br ${currentTheme.gradient} opacity-50`}></div>
       <div className="relative z-10">
        <Header guide={guide} setGuide={setGuide} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Sidebar 
              blocks={GUIDE_BLOCKS} 
              activeSection={activeSection} 
              theme={currentTheme}
            />
            <main ref={contentRef} className="flex-1 w-full min-w-0 h-[calc(100vh-80px)] overflow-y-auto pl-4 lg:pl-10 pr-4">
              <GuideContent 
                blocks={GUIDE_BLOCKS} 
                guide={guide} 
                setGuide={setGuide}
                theme={currentTheme}
                sectionRefs={sectionRefs}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
