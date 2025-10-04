
import React from 'react';
import { GuideBlock, GuideType, SectionContent } from '../types';
import OsTabs from './OsTabs';
import CodeBlock from './CodeBlock';

interface ContentBlockProps {
  block: GuideBlock;
  guide: GuideType;
  setGuide: (guide: GuideType) => void;
  theme: any;
}

const renderContentItem = (item: any, key: number, theme: any) => {
  switch (item.type) {
    case 'paragraph':
      return <p key={key} className="text-slate-600 leading-relaxed mt-2">{item.content}</p>;
    case 'list':
      return (
        <div key={key} className="mt-4">
          {item.title && <h4 className="font-semibold text-slate-800">{item.title}</h4>}
          <ul className="list-disc list-inside space-y-2 mt-2 text-slate-600">
            {Array.isArray(item.content) && item.content.map((li: string, i: number) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: li.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-700 font-medium">$1</strong>') }}></li>
            ))}
          </ul>
        </div>
      );
    case 'code':
      return <CodeBlock key={key} language={item.lang} title={item.title}>{item.content as string}</CodeBlock>;
    case 'alert':
       const alertTheme = {
           complete: 'bg-indigo-100 border-indigo-200 text-indigo-800',
           quick: 'bg-emerald-100 border-emerald-200 text-emerald-800'
       }
       const currentTheme = theme.sidebarBorder === 'border-indigo-500' ? alertTheme.complete : alertTheme.quick;
      return (
          <div key={key} className={`mt-4 p-4 border-l-4 rounded-r-lg ${currentTheme}`}>
            {item.title && <h5 className="font-bold">{item.title}</h5>}
            <p className="text-sm">{item.content}</p>
          </div>
      );
    case 'link':
       const linkColor = theme.sidebarActiveText === 'text-indigo-600' ? 'indigo' : 'emerald';
       const baseColor = linkColor === 'indigo' ? 'text-indigo-600' : 'text-emerald-600';
       const bgColor = linkColor === 'indigo' ? 'bg-indigo-600' : 'bg-emerald-600';
      return (
        <a key={key} href={item.url || "#"} target={item.url ? "_blank" : undefined} rel={item.url ? "noopener noreferrer" : undefined} className={`inline-block mt-3 font-semibold text-sm ${baseColor} relative overflow-hidden transition-all duration-300 ease-in-out border-b-2 border-current hover:text-white group`}>
          <span className={`absolute inset-0 ${bgColor} transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100`}></span>
          <span className="relative z-10">{item.content} &rarr;</span>
        </a>
      );
    case 'os-tabs':
        return <OsTabs key={key} tabs={item.tabs} theme={theme} />;
    default:
      return null;
  }
};


const Section: React.FC<{ section: SectionContent; guide: GuideType; setGuide: (g: GuideType) => void; theme: any }> = ({ section, guide, setGuide, theme }) => {
    return (
        <div className="mt-8">
            <h3 id={section.id} className="text-xl font-bold text-slate-900 scroll-mt-24">{section.title}</h3>
            {section.content.map((item, index) => renderContentItem(item, index, theme))}
            {section.interlink && guide === 'complete' && (
                <button 
                    onClick={() => {
                        setGuide('quick');
                        setTimeout(() => {
                           const targetElement = document.getElementById(section.interlink.targetId);
                           targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    }}
                    className={`mt-4 font-semibold text-sm ${theme.sidebarActiveText === 'text-indigo-600' ? 'text-indigo-600 hover:text-indigo-800' : 'text-emerald-600 hover:text-emerald-800'}`}>
                    {section.interlink.text}
                </button>
            )}
        </div>
    );
}

const ContentBlock: React.FC<ContentBlockProps> = ({ block, guide, setGuide, theme }) => {
  const sections = guide === 'complete' ? block.complete : block.quick;

  return (
    <section>
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${theme.sidebarActiveText === 'text-indigo-600' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
          {block.icon}
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">{block.title}</h2>
          <p className="text-slate-500">{block.subtitle}</p>
        </div>
      </div>

      {sections.map(section => 
        <Section key={section.id} section={section} guide={guide} setGuide={setGuide} theme={theme} />
      )}

    </section>
  );
};

export default ContentBlock;
