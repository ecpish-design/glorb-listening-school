/* GLORB LISTENING MISSION — AUG 2026 V27 PATCH
   Load AFTER script.js.

   Keeps the refreshed Aug 2026 assets and behaviour fixes, while also:
   - restoring Looks Like / Sounds Like / Feels Like visual headers
   - returning the Pip walk-away scene to the normal side-by-side story layout
   - using an easier-to-read primary-school-style font for Glorb's field notes
   - making body-calibration labels white and visible
   - changing the speech-deployment field note
   - ending the final dialogue on Pip's statement
*/

(() => {
  const NEW_GLOB_ROOT = 'assets/glorb-aug26-refresh';

  const glorbArt = {
    fullBodyNeutral: `${NEW_GLOB_ROOT}/aug26-glorb-fullbody-neutral.png`,
    portraitFriendly: `${NEW_GLOB_ROOT}/aug26-glorb-portrait-friendly.png`,
    thinkingHandChin: `${NEW_GLOB_ROOT}/aug26-glorb-thinking-hand-chin.png`,
    classroomObservation: `${NEW_GLOB_ROOT}/aug26-glorb-classroom-observation-scene.png`,
    pipCloudInterruption: `${NEW_GLOB_ROOT}/aug26-glorb-pip-cloud-interruption-scene.png`,
    pipWalkawaySad: `${NEW_GLOB_ROOT}/aug26-glorb-pip-walkaway-sad-scene.png`,
    earthExpertHelp: `${NEW_GLOB_ROOT}/aug26-glorb-earth-expert-help-scene.png`,
    thinkingCloseup: `${NEW_GLOB_ROOT}/aug26-glorb-thinking-closeup.png`,
    bodyTurnaroundReference: `${NEW_GLOB_ROOT}/aug26-glorb-body-turnaround-reference.png`,
    pointingUp: `${NEW_GLOB_ROOT}/aug26-glorb-pointing-up.png`,
    listeningEarTouch: `${NEW_GLOB_ROOT}/aug26-glorb-listening-ear-touch.png`,
    twoPoseListeningReference: `${NEW_GLOB_ROOT}/aug26-glorb-two-pose-listening-reference.png`,
    listeningToSpeakerSeated: `${NEW_GLOB_ROOT}/aug26-glorb-listening-to-speaker-seated.png`,
    askingQuestion: `${NEW_GLOB_ROOT}/aug26-glorb-asking-question.png`,
    repeatBackSpeech: `${NEW_GLOB_ROOT}/aug26-glorb-repeat-back-speech.png`,
    understandingThumbsUp: `${NEW_GLOB_ROOT}/aug26-glorb-understanding-thumbs-up.png`,
    facingSpeakerSeated: `${NEW_GLOB_ROOT}/aug26-glorb-facing-speaker-seated.png`,
    fullBodyNeutralAlt: `${NEW_GLOB_ROOT}/aug26-glorb-fullbody-neutral-alt.png`,
    attentivePortrait: `${NEW_GLOB_ROOT}/aug26-glorb-attentive-portrait.png`
  };

  /* =========================================================
     FINAL CSS OVERRIDES
  ========================================================= */

  const patchStyle = document.createElement('style');
  patchStyle.id = 'glorb-v27-overrides';
  patchStyle.textContent = `
    /* Pip walk-away scene: same side-by-side layout as the other story screens. */
    .story-shell.walkaway-mode {
      display: grid !important;
      grid-template-columns: minmax(360px, 1.05fr) minmax(420px, .95fr) !important;
      min-height: unset !important;
    }

    .story-shell.walkaway-mode .story-visual {
      min-height: 620px !important;
      height: auto !important;
      padding: 26px !important;
    }

    .story-shell.walkaway-mode .story-visual img {
      width: 100% !important;
      height: 100% !important;
      max-height: 560px !important;
      object-fit: contain !important;
      object-position: center center !important;
    }

    .story-shell.walkaway-mode .dialogue-panel {
      position: static !important;
      z-index: auto !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: auto !important;
      min-height: 620px !important;
      padding: clamp(30px, 5vw, 58px) !important;
      box-shadow: none !important;
    }

    .story-shell.walkaway-mode .dialogue-text {
      min-height: 300px !important;
      font-size: clamp(1rem, 1.8vw, 1.32rem) !important;
      line-height: 1.7 !important;
    }

    .story-shell.walkaway-mode .dialogue-panel .eyebrow,
    .story-shell.walkaway-mode .dialogue-panel .speaker {
      font-size: .7rem !important;
    }

    /* Easier-to-read school-style field note handwriting. */
    .glorb-scribble p {
      font-family: "Chalkboard SE", "Comic Sans MS", "Comic Sans", "Arial Rounded MT Bold", Arial, sans-serif !important;
      font-style: normal !important;
      font-weight: 400 !important;
      letter-spacing: .01em !important;
      line-height: 1.5 !important;
    }

    /* Restore the three visual concept headers above the sort drop zones. */
    .listening-category > .category-concept-image {
      display: block !important;
      width: 100% !important;
      height: 230px !important;
      object-fit: contain !important;
      object-position: center center !important;
      margin: 0 0 6px !important;
      background: transparent !important;
    }

    /* The artwork already contains the title + explanation. Keep the DOM text
       available to assistive tech, but remove the visual duplicate. */
    .listening-category > .category-header {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    /* The source body diagram has dark printed labels. Re-show the live labels
       in white on a navy tab so HEAD / EYES / EARS / MOUTH / BODY / HANDS / FEET
       stay readable against the game background. */
    .body-zone > span {
      display: inline-block !important;
      position: absolute !important;
      left: 0 !important;
      top: -21px !important;
      z-index: 8 !important;
      padding: 2px 5px !important;
      border-radius: 3px !important;
      background: rgba(7, 17, 31, .94) !important;
      color: #ffffff !important;
      font: 700 .58rem "IBM Plex Mono", monospace !important;
      letter-spacing: .04em !important;
      line-height: 1.15 !important;
      text-shadow: 0 1px 2px rgba(0, 0, 0, .75) !important;
    }

    @media (max-width: 900px) {
      .story-shell.walkaway-mode {
        grid-template-columns: 1fr !important;
        min-height: 0 !important;
      }

      .story-shell.walkaway-mode .story-visual {
        min-height: 340px !important;
        height: 46vh !important;
        max-height: 500px !important;
        padding: 10px !important;
      }

      .story-shell.walkaway-mode .dialogue-panel {
        min-height: auto !important;
        padding: 28px 22px 34px !important;
      }

      .story-shell.walkaway-mode .dialogue-text {
        min-height: 0 !important;
        font-size: 1rem !important;
        line-height: 1.6 !important;
      }

      .listening-category > .category-concept-image {
        height: clamp(145px, 31vw, 205px) !important;
      }
    }
  `;
  document.head.appendChild(patchStyle);

  /* =========================================================
     STORY / INTRO — REFRESHED ASSETS
  ========================================================= */

  if (typeof dialogue !== 'undefined' && Array.isArray(dialogue)) {
    const storyAssets = [
      glorbArt.portraitFriendly,
      glorbArt.thinkingHandChin,
      glorbArt.classroomObservation,
      glorbArt.pipCloudInterruption,
      glorbArt.pipWalkawaySad,
      glorbArt.earthExpertHelp
    ];

    dialogue.forEach((item, index) => {
      if (storyAssets[index]) item.img = storyAssets[index];
    });
  }

  const bootImage = document.querySelector('#bootScreen .boot-character img');
  if (bootImage) bootImage.src = glorbArt.portraitFriendly;

  const bodyIntroImage = document.querySelector('#bodyScreen .activity-intro img');
  if (bodyIntroImage) bodyIntroImage.src = glorbArt.attentivePortrait;

  const applyImage = document.querySelector('#applyScreen .apply-scenario img');
  if (applyImage) applyImage.src = glorbArt.thinkingCloseup;

  const finalImage = document.querySelector('#finalScreen .final-visual img');
  if (finalImage) finalImage.src = glorbArt.understandingThumbsUp;

  /* =========================================================
     TEACHING CARDS + FIELD NOTES
  ========================================================= */

  const teachingImageMap = [
    '22.webp', // Eye Contact
    '23.webp', // Face the Speaker
    '24.webp', // Listen Carefully
    '25.webp', // Focus
    '26.webp', // Nod Your Head
    '27.webp', // Wait Your Turn
    '28.webp', // Ask Questions
    '29.webp', // Repeat Back
    '30.webp', // Tell the Speaker You Understand
    '31.webp', // Wait for speaker to stop
    '32.webp', // Keep Hands and Feet Still
    '33.webp'  // Ignore Distractions
  ];

  const fieldNoteImageByTitle = {
    'Eye Contact': glorbArt.attentivePortrait,
    'Face the Speaker': glorbArt.twoPoseListeningReference,
    'Listen Carefully': glorbArt.listeningEarTouch,
    'Focus': glorbArt.listeningToSpeakerSeated,
    'Nod Your Head': glorbArt.portraitFriendly,
    'Wait Your Turn': glorbArt.pointingUp,
    'Ask Questions': glorbArt.askingQuestion,
    'Repeat Back': glorbArt.repeatBackSpeech,
    'Tell the Speaker You Understand': glorbArt.understandingThumbsUp,
    'Wait for the Speaker to Stop Before Speaking': glorbArt.facingSpeakerSeated,
    'Keep Hands and Feet Still': glorbArt.fullBodyNeutral,
    'Ignore Distractions': glorbArt.thinkingHandChin
  };

  if (typeof teaching !== 'undefined' && Array.isArray(teaching)) {
    teaching.forEach((card, index) => {
      if (teachingImageMap[index]) card.img = teachingImageMap[index];
      if (fieldNoteImageByTitle[card.title]) card.glorbImg = fieldNoteImageByTitle[card.title];

      if (card.title === 'Wait for the Speaker to Stop Before Speaking') {
        card.glorb = 'Sentence completion must occur before my speech deployment.';
      }
    });
  }

  /* =========================================================
     SORT ACTIVITY — CORRECT CARD MAPPING
  ========================================================= */

  const sortImageByLabel = {
    'Eye Contact': '22.webp',
    'Face the Speaker': '23.webp',
    'Listen Carefully': '24.webp',
    'Nod Your Head': '26.webp',
    'Wait Your Turn': '27.webp',
    'Ask Questions': '28.webp',
    'Repeat Back': '29.webp',
    'Tell the Speaker You Understand': '30.webp',
    'Wait for the Speaker to Stop Before Speaking': '31.webp',
    'Keep Hands and Feet Still': '32.webp',
    'Ignore Distractions': '33.webp',
    'Showing Interest': 'showing-interest-clean.webp'
  };

  if (typeof sortData !== 'undefined' && Array.isArray(sortData)) {
    sortData.forEach(item => {
      const correctImage = sortImageByLabel[item.label];
      if (correctImage) item.image = correctImage;
    });

    if (typeof renderSort === 'function') renderSort();
  }

  /* Restore LOOKS LIKE / SOUNDS LIKE / FEELS LIKE artwork. */
  const categoryVisuals = {
    looks: {
      src: 'assets/glorb/aug26-looks-like-wide.png',
      alt: 'Looks Like — what we see with our eyes.'
    },
    sounds: {
      src: 'assets/glorb/aug26-sounds-like-wide.png',
      alt: 'Sounds Like — what we hear with our ears.'
    },
    feels: {
      src: 'assets/glorb/aug26-feels-like-wide.png',
      alt: 'Feels Like — what we feel in our heart and body.'
    }
  };

  document.querySelectorAll('.listening-category').forEach(category => {
    const key = category.dataset.bucket;
    const visual = categoryVisuals[key];
    if (!visual || category.querySelector('.category-concept-image')) return;

    const img = document.createElement('img');
    img.className = 'category-concept-image';
    img.src = visual.src;
    img.alt = visual.alt;

    const header = category.querySelector('.category-header');
    category.insertBefore(img, header || category.firstChild);
  });

  /* =========================================================
     STORY LAYOUT CLASS
  ========================================================= */

  if (typeof runDialogue === 'function') {
    const originalRunDialogue = runDialogue;

    runDialogue = function aug26RunDialogue() {
      originalRunDialogue();

      const shell = document.querySelector('#storyScreen .story-shell');
      if (!shell) return;

      shell.classList.toggle('walkaway-mode', dialogueIndex === 4);
    };
  }

  /* =========================================================
     FIELD NOTE — TWO-CLICK FLOW
  ========================================================= */

  let aug26NoteShown = false;

  function hideAug26Note() {
    if (typeof stopTeachingNote === 'function') stopTeachingNote();

    const annotation = document.getElementById('glorbAnnotation');
    if (annotation) annotation.classList.remove('is-visible', 'note-complete');

    const note = document.getElementById('teachingGlorb');
    if (note) note.textContent = '';

    aug26NoteShown = false;
  }

  if (typeof renderTeaching === 'function') {
    renderTeaching = function aug26RenderTeaching() {
      if (typeof stopNarration === 'function') stopNarration();
      hideAug26Note();

      const card = teaching[teachIndex];
      if (!card) return;

      const teachingImage = document.getElementById('teachingImage');
      if (teachingImage) {
        teachingImage.src = `assets/listening/${card.img}`;
        teachingImage.alt = card.title;
      }

      const title = document.getElementById('teachingTitle');
      const meaning = document.getElementById('teachingMeaning');
      const why = document.getElementById('teachingWhy');
      const counter = document.getElementById('cardCount');
      if (title) title.textContent = card.title;
      if (meaning) meaning.textContent = card.meaning;
      if (why) why.textContent = card.why;
      if (counter) counter.textContent = teachIndex + 1;

      const prevButton = document.getElementById('prevCard');
      if (prevButton) prevButton.disabled = teachIndex === 0;

      const nextButton = document.getElementById('nextCard');
      if (nextButton) nextButton.textContent = "SHOW GLORB'S NOTE";

      const glorbImg = document.getElementById('teachingGlorbImage');
      if (glorbImg) {
        glorbImg.src = card.glorbImg || glorbArt.attentivePortrait;
        glorbImg.alt = `Glorb commenting on ${card.title}`;
      }
    };
  }

  const nextCardBtn = document.getElementById('nextCard');
  if (nextCardBtn) {
    nextCardBtn.onclick = () => {
      const card = teaching[teachIndex];
      if (!card) return;

      if (!aug26NoteShown) {
        aug26NoteShown = true;

        if (typeof stopNarration === 'function') stopNarration();
        if (typeof revealTeachingNote === 'function') revealTeachingNote(card);

        nextCardBtn.textContent =
          teachIndex === teaching.length - 1
            ? 'OPEN MISSION CONTROL'
            : 'NEXT CARD';
        return;
      }

      if (teachIndex < teaching.length - 1) {
        teachIndex += 1;
        renderTeaching();
      } else {
        if (typeof setProgress === 'function') setProgress(28);
        if (typeof show === 'function') show('missionHub');
      }
    };
  }

  const prevCardBtn = document.getElementById('prevCard');
  if (prevCardBtn) {
    prevCardBtn.onclick = () => {
      if (teachIndex > 0) {
        teachIndex -= 1;
        renderTeaching();
      }
    };
  }

  /* =========================================================
     BODY CALIBRATION — UPDATED BODY WORDING
  ========================================================= */

  if (typeof bodyData !== 'undefined' && Array.isArray(bodyData)) {
    bodyData.forEach(item => {
      const currentText =
        item.text ??
        item.label ??
        item.instruction ??
        item.copy ??
        '';

      const isBodyItem =
        item.part === 'body' ||
        item.target === 'body' ||
        item.bodyPart === 'body' ||
        /face the speaker and stay focused/i.test(currentText);

      if (!isBodyItem) return;

      if ('text' in item) item.text = 'Face the speaker and keep my body calm.';
      if ('label' in item) item.label = 'Face the speaker and keep my body calm.';
      if ('instruction' in item) item.instruction = 'Face the speaker and keep my body calm.';
      if ('copy' in item) item.copy = 'Face the speaker and keep my body calm.';
    });
  }

  /* =========================================================
     BODY CALIBRATION — WRONG ANSWERS CAN BE CHANGED
  ========================================================= */

  function releaseBodyZone(zone) {
    const assignedId = zone.dataset.assignedId;
    if (assignedId === undefined || assignedId === '') return;

    const card = document.querySelector(`.body-card[data-id="${assignedId}"]`);
    if (card) card.classList.remove('hidden-card');

    zone.dataset.assignedPart = '';
    zone.dataset.assignedId = '';
    zone.classList.remove('filled', 'correct', 'incorrect', 'dragover');

    const small = zone.querySelector('small');
    if (small) small.textContent = '';

    state.bodyPlaced = Math.max(0, state.bodyPlaced - 1);
    state.selectedBody = null;

    document.querySelectorAll('.body-card').forEach(item => item.classList.remove('selected'));

    const check = document.getElementById('checkBody');
    if (check) check.disabled = state.bodyPlaced !== bodyData.length;

    const feedback = document.getElementById('bodyFeedback');
    if (feedback) {
      feedback.textContent = `${state.bodyPlaced} of 7 body parts filled. Choose a new card for the empty box.`;
    }
  }

  document.querySelectorAll('.body-zone').forEach(zone => {
    zone.addEventListener(
      'click',
      event => {
        if (zone.classList.contains('incorrect') && !state.selectedBody) {
          event.preventDefault();
          event.stopImmediatePropagation();
          releaseBodyZone(zone);
        }
      },
      true
    );
  });

  const checkBodyBtn = document.getElementById('checkBody');
  if (checkBodyBtn) {
    const originalCheck = checkBodyBtn.onclick;

    checkBodyBtn.onclick = function(event) {
      if (typeof originalCheck === 'function') originalCheck.call(this, event);

      document.querySelectorAll('.body-zone.incorrect').forEach(zone => {
        zone.setAttribute('title', 'Tap this red answer to change it');
      });
    };
  }

  /* =========================================================
     APPLY SCREEN — UPDATE THE FOUR CORRECT ACTIONS
  ========================================================= */

  function patchApplyChoices() {
    const buttons = document.querySelectorAll('#actionChoices .choice');
    if (!buttons.length) return;

    buttons.forEach(button => {
      const label = button.textContent.trim();

      if (label === 'Face Pip') {
        button.textContent = 'Listen to what Pip is saying';
        button.dataset.correct = 'true';
      }

      if (label === 'Wait until Pip finishes') {
        button.textContent = 'Wait until she finishes';
        button.dataset.correct = 'true';
      }

      if (label === 'Look at Pip, not the sky') {
        button.dataset.correct = 'true';
      }

      if (label === 'Ask about the dog') {
        button.dataset.correct = 'true';
      }

      if (label === 'Share the cloud fact immediately') {
        button.dataset.correct = 'false';
      }

      if (label === 'Plan a better story while Pip talks') {
        button.dataset.correct = 'false';
      }

      if (label === 'Walk away before Pip finishes') {
        button.dataset.correct = 'false';
      }

      if (label === 'Look for a paper aeroplane') {
        button.dataset.correct = 'false';
      }
    });

    const checkActionsBtn = document.getElementById('checkActions');

    if (checkActionsBtn && !checkActionsBtn.dataset.aug26Patched) {
      checkActionsBtn.dataset.aug26Patched = 'true';

      const originalCheck = checkActionsBtn.onclick;

      checkActionsBtn.onclick = function(event) {
        if (typeof originalCheck === 'function') {
          originalCheck.call(this, event);
        }

        const feedback = document.getElementById('actionFeedback');
        const replyStage = document.getElementById('replyStage');

        if (
          replyStage &&
          !replyStage.classList.contains('hidden') &&
          feedback
        ) {
          feedback.textContent =
            'PLAN APPROVED — Glorb will look at Pip, listen to what Pip is saying, wait until she finishes and ask about the dog.';
        }
      };
    }
  }

  patchApplyChoices();

  /* =========================================================
     FINAL SCREEN — END ON PIP'S STATEMENT
  ========================================================= */

  const finalPaper = document.querySelector('#finalScreen .final-paper');
  if (finalPaper) {
    [...finalPaper.querySelectorAll('p')].forEach(paragraph => {
      const text = paragraph.textContent.replace(/\s+/g, ' ').trim();
      if (text.includes('Thank-you so much human') || text.includes('Thank you so much, human')) {
        paragraph.remove();
      }
    });

    const finalMessage = finalPaper.querySelector('.final-message');
    if (finalMessage) finalMessage.remove();
  }

  /* Make Read Aloud end on Pip too. */
  if (typeof getCurrentScreenText === 'function') {
    const originalGetCurrentScreenText = getCurrentScreenText;

    getCurrentScreenText = function aug26GetCurrentScreenText() {
      const activeScreen = document.querySelector('.screen.active');

      if (activeScreen?.id === 'finalScreen') {
        return normaliseSpeechText(`
          Final incident report.
          Glorb tries again.

          Glorb says.
          Pip, I would like to try that conversation again.
          I am facing you.
          I will wait until you finish.
          Is your dog feeling better?

          Pip says.
          A little. Thanks for asking.
        `);
      }

      return originalGetCurrentScreenText();
    };
  }

  /* =========================================================
     INITIALISE CURRENT LEARNING CARD
  ========================================================= */

  if (document.querySelector('#learnScreen') && typeof renderTeaching === 'function') {
    renderTeaching();
  }
})();
(() => {
  /* =========================================================
     STUDENT NAME + PRINTABLE CERTIFICATE
  ========================================================= */

  const NAME_KEY = 'glorbStudentName';
  let studentName = (sessionStorage.getItem(NAME_KEY) || '').trim();

  const escapeName = value => value.replace(/\s+/g, ' ').trim().slice(0, 40);
  const escapeHtml = value => value.replace(/[&<>\"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    "'": '&#039;'
  }[char]));

  const certificateStyle = document.createElement('style');
  certificateStyle.id = 'glorb-student-certificate-style';
  certificateStyle.textContent = `
    .student-name-gate {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: grid;
      place-items: center;
      padding: 24px;
      background: rgba(4, 12, 23, .88);
      backdrop-filter: blur(5px);
    }

    .student-name-gate[hidden] { display: none !important; }

    .student-name-card {
      width: min(560px, 100%);
      padding: clamp(28px, 5vw, 48px);
      border: 1px solid rgba(178, 211, 241, .38);
      background: #f5eddd;
      color: #20242d;
      box-shadow: 0 24px 70px rgba(0, 0, 0, .35);
    }

    .student-name-card .eyebrow {
      margin-bottom: 14px;
      color: #716c63;
    }

    .student-name-card h2 {
      margin: 0 0 12px;
      font: 800 clamp(1.8rem, 5vw, 3rem)/1.05 Inter, Arial, sans-serif;
      letter-spacing: -.03em;
    }

    .student-name-card p {
      margin: 0 0 24px;
      font: 500 1rem/1.6 Inter, Arial, sans-serif;
    }

    .student-name-field {
      display: grid;
      gap: 8px;
      margin-bottom: 18px;
    }

    .student-name-field label {
      font: 800 .7rem/1.2 \"IBM Plex Mono\", monospace;
      letter-spacing: .1em;
    }

    .student-name-field input {
      width: 100%;
      min-height: 56px;
      padding: 12px 14px;
      border: 2px solid #0b2746;
      border-radius: 0;
      outline: none;
      background: #fffaf0;
      color: #20242d;
      font: 700 1.2rem/1.2 Inter, Arial, sans-serif;
    }

    .student-name-field input:focus {
      border-color: #f4784a;
      box-shadow: 0 0 0 3px rgba(244, 120, 74, .16);
    }

    .student-name-error {
      min-height: 1.2em;
      margin: 8px 0 0 !important;
      color: #a13f2b;
      font: 700 .82rem/1.3 Inter, Arial, sans-serif !important;
    }

    #finalScreen {
      overflow-y: auto !important;
    }

    #finalScreen.active {
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important;
    }

    #finalScreen > .story-shell {
      width: 100% !important;
      flex: 0 0 auto;
    }

    .certificate-wrap {
      width: min(1120px, calc(100% - 36px));
      margin: 28px auto 60px;
    }

    .mission-certificate {
      position: relative;
      overflow: hidden;
      padding: clamp(34px, 5vw, 64px);
      border: 3px solid #0b2746;
      background:
        linear-gradient(rgba(244,120,74,.04), rgba(244,120,74,.04)),
        #fbf5e8;
      color: #20242d;
      box-shadow: 0 18px 50px rgba(0,0,0,.22);
    }

    .mission-certificate::before,
    .mission-certificate::after {
      content: \"\";
      position: absolute;
      pointer-events: none;
    }

    .mission-certificate::before {
      inset: 14px;
      border: 1px solid rgba(11,39,70,.28);
    }

    .mission-certificate::after {
      left: 0;
      right: 0;
      top: 0;
      height: 9px;
      background: #f4784a;
    }

    .certificate-kicker {
      margin: 0 0 12px;
      color: #736f67;
      font: 800 .72rem/1.4 \"IBM Plex Mono\", monospace;
      letter-spacing: .12em;
      text-align: center;
    }

    .mission-certificate h2 {
      margin: 0;
      font: 900 clamp(2rem, 5vw, 4rem)/1 Inter, Arial, sans-serif;
      letter-spacing: -.04em;
      text-align: center;
      text-transform: uppercase;
    }

    .certificate-name {
      margin: 28px auto 8px;
      font: 800 clamp(2.2rem, 6vw, 4.7rem)/1.05 Inter, Arial, sans-serif;
      text-align: center;
      border-bottom: 2px solid rgba(11,39,70,.18);
      padding-bottom: 15px;
      max-width: 820px;
    }

    .certificate-lead {
      max-width: 820px;
      margin: 20px auto 28px;
      font: 600 clamp(1rem, 1.8vw, 1.22rem)/1.6 Inter, Arial, sans-serif;
      text-align: center;
    }

    .certificate-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 920px;
      margin: 0 auto 28px;
    }

    .certificate-panel {
      padding: 22px;
      border-left: 4px solid #f4784a;
      background: rgba(244,120,74,.07);
    }

    .certificate-panel h3 {
      margin: 0 0 12px;
      font: 850 .76rem/1.35 \"IBM Plex Mono\", monospace;
      letter-spacing: .08em;
    }

    .certificate-panel p,
    .certificate-panel li {
      font: 600 .98rem/1.5 Inter, Arial, sans-serif;
    }

    .certificate-panel p { margin: 0; }

    .certificate-panel ul {
      margin: 0;
      padding-left: 20px;
    }

    .certificate-footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: end;
      max-width: 920px;
      margin: 34px auto 0;
    }

    .certificate-date,
    .certificate-signature {
      padding-top: 12px;
      border-top: 1px solid #0b2746;
      font: 700 .72rem/1.35 \"IBM Plex Mono\", monospace;
      letter-spacing: .06em;
    }

    .certificate-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-top: 22px;
    }

    .certificate-actions .button {
      min-width: 170px;
    }

    @media (max-width: 760px) {
      .certificate-grid,
      .certificate-footer {
        grid-template-columns: 1fr;
      }

      .certificate-wrap {
        width: min(100% - 20px, 760px);
      }

      .mission-certificate {
        padding: 34px 24px;
      }
    }

    @media print {
      @page {
        size: A4 landscape;
        margin: 10mm;
      }

      body * {
        visibility: hidden !important;
      }

      #missionCertificate,
      #missionCertificate * {
        visibility: visible !important;
      }

      #missionCertificate {
        position: fixed !important;
        inset: 0 !important;
        width: 100% !important;
        height: auto !important;
        margin: 0 !important;
        padding: 14mm !important;
        border: 2px solid #0b2746 !important;
        box-shadow: none !important;
        background: #fff !important;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }

      #missionCertificate::before {
        inset: 7mm !important;
      }

      .certificate-actions {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(certificateStyle);

  const nameGate = document.createElement('div');
  nameGate.className = 'student-name-gate';
  nameGate.id = 'studentNameGate';
  nameGate.innerHTML = `
    <section class=\"student-name-card\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"studentNameTitle\">
      <p class=\"eyebrow dark\">MISSION REGISTRATION // EARTH EXPERT</p>
      <h2 id=\"studentNameTitle\">WHO IS COMPLETING THIS MISSION?</h2>
      <p>Enter your first name so Glorb can speak to you during the mission and create your certificate at the end.</p>
      <div class=\"student-name-field\">
        <label for=\"studentNameInput\">FIRST NAME</label>
        <input id=\"studentNameInput\" type=\"text\" maxlength=\"40\" autocomplete=\"given-name\" placeholder=\"Enter your name\">
      </div>
      <p id=\"studentNameError\" class=\"student-name-error\" aria-live=\"polite\"></p>
      <button id=\"saveStudentName\" class=\"button ink\" type=\"button\">START MISSION</button>
    </section>
  `;
  document.body.appendChild(nameGate);

  const nameInput = document.getElementById('studentNameInput');
  const saveNameButton = document.getElementById('saveStudentName');
  const nameError = document.getElementById('studentNameError');

  if (studentName && nameInput) nameInput.value = studentName;

  function displayName() {
    return studentName || 'Earth Expert';
  }

  function personaliseStaticCopy() {
    const name = displayName();
    const safeName = escapeHtml(name);

    const hubEyebrow = document.querySelector('#missionHub .section-header .eyebrow');
    if (hubEyebrow) hubEyebrow.textContent = `${name.toUpperCase()} // EARTH EXPERT CONSOLE`;

    const sortIntro = document.querySelector('#sortScreen .activity-intro p');
    if (sortIntro) {
      sortIntro.innerHTML = `
        <strong>GLORB:</strong><br>
        ${safeName}, I need your help understanding human listening.
        I have discovered it can
        <b class=\"looks-word\">look like</b>,
        <b class=\"sounds-word\">sound like</b> and
        <b class=\"feels-word\">feel like</b> different things.
        Can you help me sort each option into the correct category?
      `;
    }

    const bodyIntro = document.querySelector('#bodyScreen .activity-intro p');
    if (bodyIntro) {
      bodyIntro.innerHTML = `
        <strong>GLORB:</strong><br>
        ${safeName}, I need your help understanding my body when I am listening.
        Which positions help me listen well?
        Drag and drop the options to the correct spots.
      `;
    }
  }

  function personaliseDialogue() {
    const dialogueText = document.getElementById('dialogueText');
    if (!dialogueText || !studentName) return;

    dialogueText.innerHTML = dialogueText.innerHTML.replace(/Earth Expert/gi, escapeHtml(studentName));
  }

  if (typeof runDialogue === 'function') {
    const previousRunDialogue = runDialogue;
    runDialogue = function namedRunDialogue() {
      previousRunDialogue();
      personaliseDialogue();
    };
  }

  function saveStudentName() {
    const clean = escapeName(nameInput?.value || '');
    if (!clean) {
      if (nameError) nameError.textContent = 'Please enter a name to begin.';
      nameInput?.focus();
      return;
    }

    studentName = clean;
    sessionStorage.setItem(NAME_KEY, studentName);
    if (nameError) nameError.textContent = '';
    nameGate.hidden = true;
    personaliseStaticCopy();
    personaliseDialogue();
    updateCertificate();
  }

  saveNameButton?.addEventListener('click', saveStudentName);
  nameInput?.addEventListener('keydown', event => {
    if (event.key === 'Enter') saveStudentName();
  });

  if (studentName) {
    nameGate.hidden = true;
    personaliseStaticCopy();
  } else {
    requestAnimationFrame(() => nameInput?.focus());
  }

  const finalScreen = document.getElementById('finalScreen');
  const certificateWrap = document.createElement('div');
  certificateWrap.className = 'certificate-wrap';
  certificateWrap.innerHTML = `
    <section id=\"missionCertificate\" class=\"mission-certificate\" aria-label=\"Listening mission completion certificate\">
      <p class=\"certificate-kicker\">ZORBAX-9 RESEARCH DIVISION // COMPLETION RECORD</p>
      <h2>Certificate of Mission Completion</h2>
      <div id=\"certificateName\" class=\"certificate-name\">Earth Expert</div>
      <p class=\"certificate-lead\">
        completed <strong>GLORB &amp; THE LISTENING MISSION // ACTIVE LISTENING</strong>.
        During this mission, they learned how active listening helps people connect and understand one another.
      </p>

      <div class=\"certificate-grid\">
        <section class=\"certificate-panel\">
          <h3>MISSION ACTIVITIES COMPLETED</h3>
          <ul>
            <li>identified what active listening looks like, sounds like and feels like</li>
            <li>sorted active listening behaviours into the correct categories</li>
            <li>calibrated Glorb's listening body</li>
            <li>chose helpful actions for a conversation with Pip</li>
          </ul>
        </section>

        <section class=\"certificate-panel\">
          <h3>LEARNING INTENTION ACHIEVED</h3>
          <p>Use our <strong>eyes, ears, body and words</strong> to show someone we are listening.</p>
          <br>
          <h3>CAN NOW</h3>
          <ul>
            <li>recognise active listening</li>
            <li>show a listening body</li>
            <li>choose what to do in a conversation</li>
          </ul>
        </section>
      </div>

      <div class=\"certificate-footer\">
        <div id=\"certificateDate\" class=\"certificate-date\"></div>
        <div class=\"certificate-signature\">TEACHER / FACILITATOR</div>
      </div>

      <div class=\"certificate-actions\">
        <button id=\"printCertificate\" class=\"button primary\" type=\"button\">PRINT / SAVE PDF</button>
        <button id=\"shareCertificate\" class=\"button ink\" type=\"button\">SHARE CERTIFICATE</button>
        <button id=\"newStudentCertificate\" class=\"button ghost\" type=\"button\">NEW STUDENT</button>
      </div>
    </section>
  `;

  if (finalScreen) finalScreen.appendChild(certificateWrap);

  function certificateShareText() {
    const name = displayName();
    return `${name} completed Glorb & The Listening Mission: Active Listening. They practised recognising active listening, showing a listening body, and choosing what to do in a conversation. Learning intention achieved: use eyes, ears, body and words to show someone we are listening.`;
  }

  function updateCertificate() {
    const nameNode = document.getElementById('certificateName');
    const dateNode = document.getElementById('certificateDate');

    if (nameNode) nameNode.textContent = displayName();
    if (dateNode) {
      const today = new Date().toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      dateNode.textContent = `MISSION COMPLETED // ${today}`;
    }
  }

  updateCertificate();

  document.getElementById('printCertificate')?.addEventListener('click', () => {
    updateCertificate();
    window.print();
  });

  document.getElementById('shareCertificate')?.addEventListener('click', async event => {
    const button = event.currentTarget;
    const text = certificateShareText();

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Glorb Listening Mission Certificate',
          text,
          url: window.location.href
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
        button.textContent = 'COPIED TO CLIPBOARD';
        setTimeout(() => { button.textContent = 'SHARE CERTIFICATE'; }, 1800);
      }
    } catch (error) {
      if (error?.name !== 'AbortError' && navigator.clipboard) {
        await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
        button.textContent = 'COPIED TO CLIPBOARD';
        setTimeout(() => { button.textContent = 'SHARE CERTIFICATE'; }, 1800);
      }
    }
  });

  document.getElementById('newStudentCertificate')?.addEventListener('click', () => {
    sessionStorage.removeItem(NAME_KEY);
    window.location.reload();
  });
})();
