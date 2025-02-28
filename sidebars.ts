const sidebars = {
  docsSidebar: [
    { type: 'doc', id: 'vision' },
    {
      type: 'category',
      label: 'Overview',
      items: ['key-features'],
    },
    { type: 'doc', id: 'problem' },
    { type: 'doc', id: 'solution' },
    {
      type: 'category',
      label: 'Roadmap',
      items: ['phase-1', 'phase-2', 'phase-3', 'phase-4'],
    },
    {
      type: 'category',
      label: 'Technical Specifications',
      items: ['chat-interface', 'backend-and-api', 'specialized-agents'],
    },
    { type: 'doc', id: 'license' },
    { type: 'doc', id: 'contact' },
  ],
};

export default sidebars;

