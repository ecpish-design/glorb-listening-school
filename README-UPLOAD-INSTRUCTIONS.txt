GLORB LISTENING SCHOOL — CLEAN REBUILD V3

This ZIP contains COMPLETE replacement code for the game.

REPLACE THESE THREE FILES IN THE ROOT OF YOUR GITHUB REPOSITORY:
- index.html
- script.js
- style.css

YOU CAN DELETE THE OLD PATCH FILES AFTER REPLACING THE THREE MAIN FILES:
- fixes.js
- fixes.css
- README-FIRST.txt

KEEP:
- README.md
- assets/

UPLOAD THESE TWO INCLUDED ASSETS:
1. assets/listening/showing-interest-clean.webp
   -> upload to your existing assets/listening folder.
   -> this removes the square around Showing Interest.

2. assets/glorb/body-calibration-upright.webp
   -> replace your existing file with this copy if needed.
   -> the code aligns all seven interactive answer zones directly inside the printed boxes.

THE CODE EXPECTS THESE EXISTING FILES EXACTLY AS THEY APPEAR IN YOUR GITHUB SCREENSHOT:

assets/glorb/happy-face.webp
assets/glorb/glorb-at-school.png
assets/glorb/assets:glorb:glorb-interrupts-pip.png
assets/glorb/assets:glorb:pip-walks-away.png
assets/glorb/assets:glorb:glorb-needs-help.png
assets/glorb/assets:glorb:unsure.png

assets/glorb/assets:glorb:looks-like.webp
assets/glorb/assets:glorb:sounds-like.webp
assets/glorb/assets:glorb:feels-like.webp

assets/listening/22.webp through 33.webp

WHAT THIS VERSION FIXES

STORY
- Removes the old arms-out Glorb from the whole game.
- Uses happy-face.webp for Glorb's opening introduction.
- Uses glorb-at-school.png for:
  "I have been attending school with the humans..."
- Uses assets:glorb:glorb-interrupts-pip.png for:
  "Yesterday, a girl named Pip..."
- Uses assets:glorb:pip-walks-away.png for:
  "Pip stopped talking..."
- Uses assets:glorb:glorb-needs-help.png for:
  "Earth Expert, I need your help..."
- Changes:
  "Then we can build a Listening Y-Chart"
  TO:
  "Then we can complete a Sort Activity"

SORT ACTIVITY
- Uses "SORT ACTIVITY" throughout.
- No Y-chart wording.
- No "Glorb's chart is becoming statistically useful."
- No "CHART COMPLETE."
- Uses exactly 12 illustrated cards.
- Removes square around Showing Interest.
- Cards can be dragged OR tapped.
- Learner can place all cards and then press CHECK MY ANSWERS.
- Wrong cards are highlighted so they can correct them.

BODY CALIBRATION
- Uses HEAD, not BRAIN.
- Fixes the old head/brain mismatch.
- Uses text-only draggable answers.
- All seven answer overlays are measured to sit INSIDE the actual printed boxes on the body-calibration image.
- Learner can drag OR tap.
- Learner checks answers after all seven are placed.

FINAL ACTIVITY
- Uses the close-up unsure Glorb image.
- Correct and incorrect options are shuffled every time the game loads.
- Final Glorb line is:
  "Thank-you so much human!! I now have made a connection with Pip through using my active listening skills!!"

CACHE
- index.html loads style.css?v=13 and script.js?v=13.
- After upload, GitHub Pages may take a minute. Hard refresh once deployed.


READ ALOUD ACCESSIBILITY
- A permanent speaker button now appears in the top-right of the game.
- Press READ ALOUD to hear the current screen.
- Press STOP to stop narration.
- Narration automatically stops when the learner changes screen, story slide, or teaching card.
- Story narration reads only Glorb's current dialogue.
- Teaching cards read the current card title, explanation, Why It Helps text, and Glorb's note.
- Mission Control reads the learning intention and mission status.
- Sort Activity reads the instructions, category meanings, current option labels, and feedback.
- Body Calibration reads the instructions, body-part names, remaining draggable instructions, and feedback.
- Help Glorb Try Again reads the scenario, current answer choices, and reply choices when they become available.
- The final screen reads the complete final dialogue.
- The browser will prefer an Australian English voice when available.
- This uses the browser Web Speech API and does not require audio files.
