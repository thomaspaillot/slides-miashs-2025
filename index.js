import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

const deck = new Reveal({
  width: 1050,
  height: 700,
  margin: 0.1,
  hash: true,
  slideNumber: true,
  center: false,
  plugins: [Markdown, Highlight, Notes],
});

deck.initialize();
