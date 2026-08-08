/* GLORB LISTENING MISSION — AUG 2026 ASSET + BEHAVIOUR PATCH
   Load AFTER script.js.

   IMPORTANT:
   All new Glorb artwork lives in:
   assets/glorb-aug26-refresh/

   Every filename in this patch is unique and does not reuse the old
   Glorb asset filenames.
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
     STORY / INTRO — NEW UNIQUELY NAMED ASSETS
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
      if (storyAssets[index]) {
        item.img = storyAssets[index];
      }
    });
  }

  /* Hard-coded images in index.html are updated here too. */
  const bootImage = document.querySelector('#bootScreen .boot-character img');
  if (bootImage) bootImage.src = glorbArt.portraitFriendly;

  const bodyIntroImage = document.querySelector('#bodyScreen .activity-intro img');
  if (bodyIntroImage) bodyIntroImage.src = glorbArt.attentivePortrait;

  const applyImage = document.querySelector('#applyScreen .apply-scenario img');
  if (applyImage) applyImage.src = glorbArt.thinkingCloseup;

  const finalImage = document.querySelector('#finalScreen .final-visual img');
  if (finalImage) finalImage.src = glorbArt.understandingThumbsUp;


  /* =========================================================
     CORRECT LEARNING CARD VISUALS
     Keep the existing listening-behaviour image set.
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

  if (typeof teaching !== 'undefined') {
    teaching.forEach((card, index) => {
      if (teachingImageMap[index]) {
        card.img = teachingImageMap[index];
      }

      if (fieldNoteImageByTitle[card.title]) {
        card.glorbImg = fieldNoteImageByTitle[card.title];
      }
    });
  }


  /* =========================================================
     SORT ACTIVITY — KEEP LABELS MATCHED TO THE RIGHT IMAGE
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

  if (typeof sortData !== 'undefined') {
    sortData.forEach(item => {
      const correctImage = sortImageByLabel[item.label];
      if (correctImage) item.image = correctImage;
    });

    if (typeof renderSort === 'function') {
      renderSort();
    }
  }


  /* =========================================================
     STORY WALK-AWAY LAYOUT
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
     Click 1: show Glorb's handwritten note.
     Click 2: move to the next research card.
  ========================================================= */

  let aug26NoteShown = false;

  function hideAug26Note() {
    if (typeof stopTeachingNote === 'function') {
      stopTeachingNote();
    }

    const annotation = document.getElementById('glorbAnnotation');
    if (annotation) {
      annotation.classList.remove('is-visible', 'note-complete');
    }

    const note = document.getElementById('teachingGlorb');
    if (note) note.textContent = '';

    aug26NoteShown = false;
  }

  if (typeof renderTeaching === 'function') {
    renderTeaching = function aug26RenderTeaching() {
      if (typeof stopNarration === 'function') {
        stopNarration();
      }

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

        if (typeof stopNarration === 'function') {
          stopNarration();
        }

        if (typeof revealTeachingNote === 'function') {
          revealTeachingNote(card);
        }

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
     BODY CALIBRATION — WRONG ANSWERS CAN BE CHANGED
  ========================================================= */

  function releaseBodyZone(zone) {
    const assignedId = zone.dataset.assignedId;

    if (assignedId === undefined || assignedId === '') {
      return;
    }

    const card = document.querySelector(`.body-card[data-id="${assignedId}"]`);
    if (card) card.classList.remove('hidden-card');

    zone.dataset.assignedPart = '';
    zone.dataset.assignedId = '';
    zone.classList.remove('filled', 'correct', 'incorrect', 'dragover');

    const small = zone.querySelector('small');
    if (small) small.textContent = '';

    state.bodyPlaced = Math.max(0, state.bodyPlaced - 1);
    state.selectedBody = null;

    document.querySelectorAll('.body-card').forEach(item => {
      item.classList.remove('selected');
    });

    const check = document.getElementById('checkBody');
    if (check) check.disabled = state.bodyPlaced !== bodyData.length;

    const feedback = document.getElementById('bodyFeedback');
    if (feedback) {
      feedback.textContent =
        `${state.bodyPlaced} of 7 body parts filled. Choose a new card for the empty box.`;
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
      if (typeof originalCheck === 'function') {
        originalCheck.call(this, event);
      }

      document.querySelectorAll('.body-zone.incorrect').forEach(zone => {
        zone.setAttribute('title', 'Tap this red answer to change it');
      });
    };
  }


  /* =========================================================
     INITIALISE CURRENT LEARNING CARD
  ========================================================= */

  if (document.querySelector('#learnScreen') && typeof renderTeaching === 'function') {
    renderTeaching();
  }
})();
