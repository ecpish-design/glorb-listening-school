/* GLORB LISTENING MISSION — V11 behaviour/data patch
   Load AFTER script.js.
*/

(() => {

  /* =========================================================
     CORRECT LEARNING / SORT VISUALS

     These match the EXISTING clean assets:

     22.webp = Eye Contact
     23.webp = Face the Speaker
     24.webp = Listen Carefully
     25.webp = Focus
     26.webp = Nod Your Head
     27.webp = Wait Your Turn
     28.webp = Ask Questions
     29.webp = Repeat Back
     30.webp = Tell the Speaker You Understand
     31.webp = Wait for the Speaker to Stop Before Speaking
     32.webp = Keep Hands and Feet Still
     33.webp = Ignore Distractions

     showing-interest-clean.webp = Showing Interest
  ========================================================= */


  /* ---------- TEACHING CARD VISUALS ---------- */

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


  if (typeof teaching !== 'undefined') {

    teaching.forEach((card, i) => {

      if (teachingImageMap[i]) {
        card.img = teachingImageMap[i];
      }

    });

  }


  /* ---------- SORT ACTIVITY VISUALS ---------- */

  const sortImageByLabel = {

    'Eye Contact':
      '22.webp',

    'Face the Speaker':
      '23.webp',

    'Listen Carefully':
      '24.webp',

    'Nod Your Head':
      '26.webp',

    'Wait Your Turn':
      '27.webp',

    'Ask Questions':
      '28.webp',

    'Repeat Back':
      '29.webp',

    'Tell the Speaker You Understand':
      '30.webp',

    'Wait for the Speaker to Stop Before Speaking':
      '31.webp',

    'Keep Hands and Feet Still':
      '32.webp',

    'Ignore Distractions':
      '33.webp',

    'Showing Interest':
      'showing-interest-clean.webp'

  };


  if (typeof sortData !== 'undefined') {

    sortData.forEach(item => {

      const correctImage =
        sortImageByLabel[item.label];

      if (correctImage) {
        item.image = correctImage;
      }

    });


    if (typeof renderSort === 'function') {
      renderSort();
    }

  }



  /* =========================================================
     STORY LAYOUT FIXES
  ========================================================= */

  if (typeof runDialogue === 'function') {

    const originalRunDialogue =
      runDialogue;


    runDialogue =
      function patchedRunDialogue() {

        originalRunDialogue();


        const shell =
          document.querySelector(
            '#storyScreen .story-shell'
          );


        if (!shell) return;


        /*
          Special layout for the scene where
          Pip walks away and Glorb is sad.
        */

        shell.classList.toggle(
          'walkaway-mode',
          dialogueIndex === 4
        );

      };

  }



  /* =========================================================
     FIELD NOTE — TWO STEP CARD FLOW

     FIRST CLICK:
     Glorb's handwritten field note appears.

     SECOND CLICK:
     Move to the next learning card.
  ========================================================= */

  let v11NoteShown = false;


  function hideV11Note() {

    if (
      typeof stopTeachingNote ===
      'function'
    ) {
      stopTeachingNote();
    }


    const annotation =
      document.getElementById(
        'glorbAnnotation'
      );


    if (annotation) {

      annotation.classList.remove(
        'is-visible',
        'note-complete'
      );

    }


    const note =
      document.getElementById(
        'teachingGlorb'
      );


    if (note) {
      note.textContent = '';
    }


    v11NoteShown = false;

  }



  /* =========================================================
     TEACHING CARD RENDER
  ========================================================= */

  if (
    typeof renderTeaching ===
    'function'
  ) {

    renderTeaching =
      function v11RenderTeaching() {

        if (
          typeof stopNarration ===
          'function'
        ) {
          stopNarration();
        }


        hideV11Note();


        const card =
          teaching[teachIndex];


        if (!card) return;


        /* CORRECT IMAGE */

        const teachingImage =
          document.getElementById(
            'teachingImage'
          );


        if (teachingImage) {

          teachingImage.src =
            `assets/listening/${card.img}`;

          teachingImage.alt =
            card.title;

        }


        /* CARD CONTENT */

        const title =
          document.getElementById(
            'teachingTitle'
          );

        const meaning =
          document.getElementById(
            'teachingMeaning'
          );

        const why =
          document.getElementById(
            'teachingWhy'
          );

        const counter =
          document.getElementById(
            'cardCount'
          );


        if (title) {
          title.textContent =
            card.title;
        }


        if (meaning) {
          meaning.textContent =
            card.meaning;
        }


        if (why) {
          why.textContent =
            card.why;
        }


        if (counter) {
          counter.textContent =
            teachIndex + 1;
        }


        /* BACK BUTTON */

        const prevButton =
          document.getElementById(
            'prevCard'
          );


        if (prevButton) {

          prevButton.disabled =
            teachIndex === 0;

        }


        /* NEXT BUTTON */

        const nextButton =
          document.getElementById(
            'nextCard'
          );


        if (nextButton) {

          nextButton.textContent =
            "SHOW GLORB'S NOTE";

        }


        /* GLORB FIELD NOTE CHARACTER */

        const glorbImg =
          document.getElementById(
            'teachingGlorbImage'
          );


        if (glorbImg) {

          glorbImg.src =
            card.glorbImg ||
            'assets/glorb/intro-glorb.png';


          glorbImg.alt =
            `Glorb commenting on ${card.title}`;

        }

      };

  }



  /* =========================================================
     NEXT CARD BUTTON
  ========================================================= */

  const nextCardBtn =
    document.getElementById(
      'nextCard'
    );


  if (nextCardBtn) {

    nextCardBtn.onclick =
      () => {

        const card =
          teaching[teachIndex];


        if (!card) return;


        /*
          CLICK ONE:
          reveal Glorb's note.
        */

        if (!v11NoteShown) {

          v11NoteShown = true;


          if (
            typeof stopNarration ===
            'function'
          ) {
            stopNarration();
          }


          if (
            typeof revealTeachingNote ===
            'function'
          ) {

            revealTeachingNote(
              card
            );

          }


          nextCardBtn.textContent =
            teachIndex ===
            teaching.length - 1

              ? 'OPEN MISSION CONTROL'

              : 'NEXT CARD';


          return;

        }


        /*
          CLICK TWO:
          go to next research card.
        */

        if (
          teachIndex <
          teaching.length - 1
        ) {

          teachIndex += 1;

          renderTeaching();

        }


        else {

          if (
            typeof setProgress ===
            'function'
          ) {

            setProgress(28);

          }


          if (
            typeof show ===
            'function'
          ) {

            show(
              'missionHub'
            );

          }

        }

      };

  }



  /* =========================================================
     PREVIOUS CARD
  ========================================================= */

  const prevCardBtn =
    document.getElementById(
      'prevCard'
    );


  if (prevCardBtn) {

    prevCardBtn.onclick =
      () => {

        if (teachIndex > 0) {

          teachIndex -= 1;

          renderTeaching();

        }

      };

  }



  /* =========================================================
     INITIALISE CURRENT CARD
  ========================================================= */

  if (
    document.querySelector(
      '#learnScreen'
    )
  ) {

    renderTeaching();

  }



  /* =========================================================
     BODY CALIBRATION

     WRONG ANSWERS CAN BE CHANGED
  ========================================================= */

  function releaseBodyZone(
    zone
  ) {

    const assignedId =
      zone.dataset.assignedId;


    if (
      assignedId === undefined ||
      assignedId === ''
    ) {
      return;
    }


    /*
      Find the original option card.
    */

    const card =
      document.querySelector(
        `.body-card[data-id="${assignedId}"]`
      );


    if (card) {

      card.classList.remove(
        'hidden-card'
      );

    }


    /*
      Clear the body placement.
    */

    zone.dataset.assignedPart =
      '';

    zone.dataset.assignedId =
      '';


    zone.classList.remove(
      'filled',
      'correct',
      'incorrect',
      'dragover'
    );


    const small =
      zone.querySelector(
        'small'
      );


    if (small) {
      small.textContent = '';
    }


    /*
      Update state.
    */

    state.bodyPlaced =
      Math.max(
        0,
        state.bodyPlaced - 1
      );


    state.selectedBody =
      null;


    document
      .querySelectorAll(
        '.body-card'
      )
      .forEach(card => {

        card.classList.remove(
          'selected'
        );

      });


    /*
      CHECK button should only activate
      once every body part is filled.
    */

    const check =
      document.getElementById(
        'checkBody'
      );


    if (check) {

      check.disabled =
        state.bodyPlaced !==
        bodyData.length;

    }


    /*
      Student feedback.
    */

    const feedback =
      document.getElementById(
        'bodyFeedback'
      );


    if (feedback) {

      feedback.textContent =
        `${state.bodyPlaced} of 7 body parts filled. Choose a new card for the empty box.`;

    }

  }



  /* =========================================================
     TAP A RED ANSWER TO REMOVE IT
  ========================================================= */

  document
    .querySelectorAll(
      '.body-zone'
    )
    .forEach(zone => {

      zone.addEventListener(
        'click',

        event => {

          if (
            zone.classList.contains(
              'incorrect'
            ) &&
            !state.selectedBody
          ) {

            event.preventDefault();

            event.stopImmediatePropagation();


            releaseBodyZone(
              zone
            );

          }

        },

        true
      );

    });



  /* =========================================================
     CHECK BODY ANSWERS
  ========================================================= */

  const checkBodyBtn =
    document.getElementById(
      'checkBody'
    );


  if (checkBodyBtn) {

    const originalCheck =
      checkBodyBtn.onclick;


    checkBodyBtn.onclick =
      function(event) {

        if (
          typeof originalCheck ===
          'function'
        ) {

          originalCheck.call(
            this,
            event
          );

        }


        /*
          Add a hint to every wrong answer.
        */

        const wrong =
          document.querySelectorAll(
            '.body-zone.incorrect'
          );


        wrong.forEach(zone => {

          zone.setAttribute(
            'title',
            'Tap this red answer to change it'
          );

        });

      };

  }

})();
