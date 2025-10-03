
import React from 'react';
import { GuideBlock } from '../types';

interface SidebarProps {
  blocks: GuideBlock[];
  activeSection: string;
  theme: {
    sidebar: string;
    sidebarText: string;
    sidebarActiveText: string;
    sidebarBorder: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ blocks, activeSection, theme }) => {
  return (
    <aside className="hidden lg:block sticky top-20 w-64 h-[calc(100vh-80px)] py-8 pr-6">
        <nav className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Secciones</h3>
            <ul className="space-y-2">
                {blocks.map(block => (
                    <li key={block.id}>
                        <a 
                            href={`#${block.id}`}
                            className={`flex items-center gap-3 text-sm font-medium transition-colors duration-200 border-l-2 pl-4 py-1
                                ${activeSection === block.id 
                                    ? `${theme.sidebarActiveText} ${theme.sidebarBorder}` 
                                    : `border-transparent ${theme.sidebarText} hover:text-slate-900`
                                }
                            `}
                        >
                            {block.icon}
                            {block.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
  );
};

export default Sidebar;
