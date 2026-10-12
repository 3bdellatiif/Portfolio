// Colours are CSS variables (assets/css/main.css), so one class works in both themes.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        page: token('page'),
        fg: token('fg'),
        muted: token('muted'),
        accent: token('accent'),
        onaccent: token('onaccent'),
        // Borders get stronger in light mode through --line-k, so border-line/10 works in both themes.
        line: 'rgb(var(--c-line) / calc(<alpha-value> * var(--line-k)))',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Instrument Sans"', 'ui-sans-serif', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
}
