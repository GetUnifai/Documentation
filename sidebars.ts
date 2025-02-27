import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'vision',
    { type: 'category', label: 'Overview', items: ['key-features'] },
    'problem',
    'solution',
    { type: 'category', label: 'Roadmap', items: ['phase-1', 'phase-2', 'phase-3', 'phase-4'] },
    { type: 'category', label: 'Technical Specifications', items: ['chat-interface', 'agent-collaboration', 'specialized-agents', 'backend-and-api'] },
    'license',
    'contact',
  ],
};

export default sidebars;

