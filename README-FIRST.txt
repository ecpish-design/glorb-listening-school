GLORB LISTENING MISSION — AUGUST 2026 ASSET REFRESH
===================================================

WHAT IS IN THIS ZIP
-------------------
1. assets/glorb-aug26-refresh/
   - 19 renamed, web-optimised PNG files.
   - Every filename is NEW and deliberately different from the older Glorb assets.

2. fixes.js
   - Maps the story slides and Glorb field-note characters to the new unique filenames.
   - Keeps the listening-card image/label mapping corrected.
   - Keeps the two-click Glorb field-note flow.
   - Keeps Body Calibration wrong answers editable.

3. fixes.css
   - Uses the proportions/cropping built into the new images instead of applying the old extra zoom.
   - Keeps the walk-away scene layout.
   - Keeps the larger Glorb field-note overlay.
   - Includes tablet/iPad/mobile layout rules.

IMPORTANT — YOUR CURRENT INDEX.HTML MUST LOAD THE PATCH FILES
--------------------------------------------------------------
Your current repository index.html loads style.css and script.js, but it does not currently load fixes.css or fixes.js.

Add this directly AFTER your existing style.css line in <head>:

<link rel="stylesheet" href="fixes.css?v=12">

Then add this directly AFTER your existing script.js line near the bottom of <body>:

<script src="fixes.js?v=12"></script>

UPLOAD STEPS
------------
1. Unzip this folder on your computer.

2. In GitHub, open your existing assets folder.

3. Upload the INCLUDED folder named:

   glorb-aug26-refresh

   so the final repository path becomes:

   assets/glorb-aug26-refresh/

4. Replace the root-level fixes.js with the fixes.js in this package.

5. Replace the root-level fixes.css with the fixes.css in this package.

6. Make the two index.html additions shown above if they are not already there.

7. Commit the changes.

8. Hard refresh the published page.

NEW FILE NAMES / SOURCE MAP
---------------------------
1.png  -> aug26-glorb-fullbody-neutral.png
2.png  -> aug26-glorb-portrait-friendly.png
3.png  -> aug26-glorb-thinking-hand-chin.png
4.png  -> aug26-glorb-classroom-observation-scene.png
5.png  -> aug26-glorb-pip-cloud-interruption-scene.png
6.png  -> aug26-glorb-pip-walkaway-sad-scene.png
7.png  -> aug26-glorb-earth-expert-help-scene.png
8.png  -> aug26-glorb-thinking-closeup.png
9.png  -> aug26-glorb-body-turnaround-reference.png
10.png -> aug26-glorb-pointing-up.png
11.png -> aug26-glorb-listening-ear-touch.png
12.png -> aug26-glorb-two-pose-listening-reference.png
13.png -> aug26-glorb-listening-to-speaker-seated.png
14.png -> aug26-glorb-asking-question.png
15.png -> aug26-glorb-repeat-back-speech.png
16.png -> aug26-glorb-understanding-thumbs-up.png
17.png -> aug26-glorb-facing-speaker-seated.png
18.png -> aug26-glorb-fullbody-neutral-alt.png
19.png -> aug26-glorb-attentive-portrait.png

NOTES
-----
- The four story scene images are kept on their full canvas so the composition stays intact.
- Character-only images are trimmed only around transparent empty space and resized for the web. They are NOT stretched, so Glorb's proportions are preserved.
- This package does not overwrite or rename any of your older images.
