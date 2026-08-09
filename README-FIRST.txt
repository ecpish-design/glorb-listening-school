GLORB LEARNING INTENTION — FINAL FIX

This ZIP contains:
1. mission-briefing-final.css
2. mission-briefing-html.txt

The CSS is deliberately separate so it does NOT overwrite your existing fixes.css
and accidentally remove the other Glorb fixes.

DO THIS:

1. Upload mission-briefing-final.css to the ROOT of your GitHub repository,
   beside index.html, style.css and fixes.css.

2. In index.html, inside <head>, directly underneath:
   <link rel="stylesheet" href="fixes.css?v=27">

   add:
   <link rel="stylesheet" href="mission-briefing-final.css?v=1">

3. In the MISSION BRIEFING / LEARNING INTENTION section of index.html,
   replace ONLY the existing <div class="dialogue-text">...</div>
   with the code in mission-briefing-html.txt.

Do NOT delete style.css, fixes.css, script.js or fixes.js.

The new layout:
- removes the giant spaces caused by white-space: pre-wrap;
- keeps the learning intention readable as normal sentences;
- keeps the desktop page in the same two-column format as the other Glorb story pages;
- stacks cleanly on iPad/mobile;
- uses:
  "We are learning how to:
   use our eyes, ears, body and words
   to show someone we are listening."

- uses:
  "BY THE END OF THIS MISSION, YOU WILL BE ABLE TO:"