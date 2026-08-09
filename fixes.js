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