
import React, { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = 'bash', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-4 bg-slate-800 rounded-lg overflow-hidden">
        {title && <div className="text-xs text-slate-400 font-semibold px-4 pt-3">{title}</div>}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-semibold py-1 px-2 rounded transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre className="text-sm p-4 overflow-x-auto">
          <code className={`language-${language} text-slate-200`}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
