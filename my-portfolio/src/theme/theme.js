// Retro terminal palette. "paper" (light) reads like a printout from a
// line printer; "crt" (dark) is an amber-phosphor monitor.

export const lightTheme = {
  name:       'paper',
  background: '#f3eee2',
  surface:    '#fbf8f0',
  border:     '#cfc6b0',
  text:       '#1f1c16',
  textMuted:  '#5e584b',
  accent:     '#b4530a', // amber ink
  accentAlt:  '#2f7a3b', // green ink
  warn:       '#a8321f',
  navBg:      '#1f1c16',
  navText:    '#f3eee2',
  iconFilter: 'none',
  glow:       'none',
};

export const darkTheme = {
  name:       'crt',
  background: '#0e0d0a',
  surface:    '#16150f',
  border:     '#34302a',
  text:       '#ece4cf',
  textMuted:  '#9b937f',
  accent:     '#ffb000', // amber phosphor
  accentAlt:  '#7ee787', // green phosphor
  warn:       '#ff7b5c',
  navBg:      '#16150f',
  navText:    '#ece4cf',
  iconFilter: 'invert(1)',
  glow:       '0 0 12px rgba(255, 176, 0, 0.35)',
};
