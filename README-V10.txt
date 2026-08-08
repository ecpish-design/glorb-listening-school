GLORB LISTENING MISSION — V10 PATCH

This patch fixes the specific issues shown in the 8 Aug screenshots:

1. Story/intro images are enlarged to properly fill their visual panel.
2. The Pip-walks-away scene places the story copy between sad Glorb and Pip on desktop/tablet.
3. The 13 newly supplied listening visuals (28.png–40.png) are mapped to the correct learning and sorting skills.
4. Glorb field notes are larger and overlay the research card.
5. Teaching cards now use a two-click rhythm:
   - first click: SHOW GLORB'S NOTE
   - second click: NEXT CARD / OPEN MISSION CONTROL
6. Wrong Body Calibration answers can be tapped to remove and correct.
7. Body Calibration is pulled upward, duplicate overlay labels are hidden, and the printed boxes remain the visual guide.
8. Tablet, iPad and mobile layouts are rebuilt so story, teaching, sort and body activities stack cleanly.

UPLOAD / INSTALL

A. Merge the included assets/listening folder into your existing assets/listening folder.
   This adds 28.png through 40.png.

B. Upload fixes.css and fixes.js into the ROOT of the repository (next to style.css and script.js).

C. In index.html, directly AFTER the existing style.css line, add:

   <link rel="stylesheet" href="fixes.css?v=10">

D. At the bottom of index.html, directly AFTER the existing script.js line, add:

   <script src="fixes.js?v=10"></script>

The bottom should therefore look like:

   <script src="script.js?v=18"></script>
   <script src="fixes.js?v=10"></script>

and the head should contain:

   <link rel="stylesheet" href="style.css?v=18">
   <link rel="stylesheet" href="fixes.css?v=10">

Then commit and hard refresh the GitHub Pages site.
