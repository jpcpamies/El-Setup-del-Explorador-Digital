
import React, { useState } from 'react';
import { OsSpecificContent, OperatingSystem } from '../types';
import CodeBlock from './CodeBlock';

interface OsTabsProps {
  tabs: OsSpecificContent[];
  theme: any;
}

const renderContentItem = (item: any, key: number) => {
    switch (item.type) {
      case 'paragraph':
        return <p key={key} className="text-slate-600 leading-relaxed mt-2">{item.content}</p>;
      case 'list':
        return (
          <div key={key} className="mt-4">
            {item.title && <h4 className="font-semibold text-slate-800">{item.title}</h4>}
            <ul className="list-disc list-inside space-y-2 mt-2 text-slate-600 text-sm">
              {Array.isArray(item.content) && item.content.map((li: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: li.replace(/`(.*?)`/g, '<code class="bg-slate-200 text-slate-800 font-mono text-xs px-1 py-0.5 rounded">$1</code>') }}></li>
              ))}
            </ul>
          </div>
        );
      case 'link':
        return (
          <a key={key} href={item.url || "#"} target={item.url ? "_blank" : undefined} rel={item.url ? "noopener noreferrer" : undefined} className="block mt-3 font-semibold text-sm text-emerald-600 hover:text-emerald-800">
            {item.content} &rarr;
          </a>
        );
      case 'code':
        return <CodeBlock key={key} language={item.lang}>{item.content as string}</CodeBlock>;
      default:
        return null;
    }
  };
  

const OsTabs: React.FC<OsTabsProps> = ({ tabs, theme }) => {
  const [activeTab, setActiveTab] = useState<OperatingSystem>(tabs[0]?.os || 'mac');

  const activeTabContent = tabs.find(tab => tab.os === activeTab);

  return (
    <div className="mt-6">
      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab.os}
              onClick={() => setActiveTab(tab.os)}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab.os
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }
              `}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-4">
        {activeTabContent && activeTabContent.content.map((item, index) => renderContentItem(item, index))}
      </div>
    </div>
  );
};

export default OsTabs;
