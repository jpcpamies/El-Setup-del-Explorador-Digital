
import React from 'react';
import { GuideType } from '../types';

interface HeaderProps {
  guide: GuideType;
  setGuide: (guide: GuideType) => void;
}

const GuideToggle: React.FC<HeaderProps> = ({ guide, setGuide }) => {
  const isComplete = guide === 'complete';

  const baseClasses = "relative inline-flex items-center justify-center w-64 h-12 transition-colors duration-300 ease-in-out rounded-full p-1";
  const bgClass = isComplete ? 'bg-indigo-100' : 'bg-emerald-100';

  const sliderClasses = "absolute top-1 transition-all duration-300 ease-in-out h-10 w-32 rounded-full shadow-md";
  const sliderPosition = isComplete ? 'left-1 bg-white' : 'left-[124px] bg-white';

  return (
    <div className={`${baseClasses} ${bgClass}`}>
      <div className={`${sliderClasses} ${sliderPosition}`}></div>
      <button 
        onClick={() => setGuide('complete')} 
        className={`relative z-10 w-1/2 text-sm font-semibold transition-colors duration-300 ${isComplete ? 'text-indigo-700' : 'text-slate-500'}`}
      >
        Guía Conceptual
      </button>
      <button 
        onClick={() => setGuide('quick')} 
        className={`relative z-10 w-1/2 text-sm font-semibold transition-colors duration-300 ${!isComplete ? 'text-emerald-700' : 'text-slate-500'}`}
      >
        Guía Técnica
      </button>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ guide, setGuide }) => {
  return (
    <header className="sticky top-0 z-20 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div>
            <h1 className="text-xl font-bold text-slate-900">Masterclass AI</h1>
            <p className="text-sm text-slate-500">Setup del Explorador Digital</p>
        </div>
        <GuideToggle guide={guide} setGuide={setGuide} />
      </div>
      <div className="h-px bg-slate-200/50"></div>
    </header>
  );
};

export default Header;
