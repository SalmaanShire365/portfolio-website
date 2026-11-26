// Featured projects shown in the Projects section.
export const PROJECTS = [
  {
    title: 'AMADEUS',
    description:
      'A fully local AI task harness with codebase-grounded retrieval. No API keys, no subscriptions, no cloud. Every model runs on my own hardware through Ollama.',
    projectDate: '2026 · Rust + Python',
    projectUrl: 'https://github.com/SalmaanShire365/AMADEUS',
    highlights: [
      'Single-process Rust TUI agent loop with a Python RAG index over code',
      'Every file write and shell command stops at an approval card showing the exact diff',
      'File tools are confined to the workspace. Ctrl+C really cancels generation and frees the GPU',
      'Model tiers (qwen3 4B / 8B / 14B) send each task to the smallest model that can do it',
      'Ships its own eval harness and publishes the failures, prompt injection included',
    ],
    tags: ['Rust', 'Python', 'Ollama', 'RAG', 'TUI'],
  },
];
