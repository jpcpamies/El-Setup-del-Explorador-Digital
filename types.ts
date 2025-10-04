
import { ReactNode } from 'react';

export type GuideType = 'complete' | 'quick';
export type OperatingSystem = 'mac' | 'windows' | 'alternatives';

export interface ContentItem {
  type: 'paragraph' | 'list' | 'code' | 'alert' | 'link';
  content: string | string[];
  title?: string;
  lang?: string;
  url?: string;
}

export interface OsSpecificContent {
  os: OperatingSystem;
  title: string;
  content: ContentItem[];
}

export interface SectionContent {
  title: string;
  id: string;
  content: (ContentItem | { type: 'os-tabs', tabs: OsSpecificContent[] })[];
  interlink?: {
    text: string;
    targetId: string;
  }
}

export interface GuideBlock {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  complete: SectionContent[];
  quick: SectionContent[];
}
