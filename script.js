const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];



/* =========================================================
   READ ALOUD
========================================================= */

const readAloudBtn =
  document.getElementById(
    'readAloudBtn'
  );

let currentSpeech =
  null;


function resetReadAloudButton() {
  if (!readAloudBtn) return;

  readAloudBtn.classList.remove(
    'speaking'
  );

  readAloudBtn.setAttribute(
    'aria-pressed',
    'false'
  );

  const label =
    readAloudBtn.querySelector(
      '.read-label'
    );

  if (label) {
    label.textContent =
      'READ ALOUD';
  }
}


function stopNarration() {
  narrationRunId =
    (typeof narrationRunId === 'number')
      ? narrationRunId + 1
      : 1;

  if (
    'speechSynthesis' in window
  ) {
    window.speechSynthesis.cancel();
  }

  if (
    typeof speechQueue !==
    'undefined'
  ) {
    speechQueue = [];
  }

  if (
    typeof speechQueueIndex !==
    'undefined'
  ) {
    speechQueueIndex = 0;
  }

  currentSpeech =
    null;

  resetReadAloudButton();
}


function normaliseSpeechText(text) {
  return String(text || '')
    .replace(
      /&/g,
      ' and '
    )
    .replace(
      /\s+/g,
      ' '
    )
    .trim();
}


function visibleTextList(
  selector,
  parent = document
) {
  return $$(selector, parent)
    .filter(element => {
      const style =
        window.getComputedStyle(
          element
        );

      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden'
      );
    })
    .map(element =>
      normaliseSpeechText(
        element.textContent
      )
    )
    .filter(Boolean);
}


function getCurrentScreenText() {
  const activeScreen =
    $('.screen.active');

  if (!activeScreen) {
    return '';
  }


  /* OPENING SCREEN */
  if (
    activeScreen.id ===
    'bootScreen'
  ) {
    return normaliseSpeechText(
      `
      Glorb and the Listening Mission.
      Incoming transmission.
      ${$('#bootText')?.textContent || ''}
      Press Open Transmission to begin.
      `
    );
  }


  /* GLORB STORY */
  if (
    activeScreen.id ===
    'storyScreen'
  ) {
    const dialogue =
      $('#dialogueText')
        ?.textContent || '';

    return normaliseSpeechText(
      `
      Glorb says.
      ${dialogue}
      `
    );
  }


  /* ACTIVE LISTENING TEACHING CARD */
  if (
    activeScreen.id ===
    'learnScreen'
  ) {
    const cardNumber =
      $('#cardCount')
        ?.textContent || '';

    const title =
      $('#teachingTitle')
        ?.textContent || '';

    const meaning =
      $('#teachingMeaning')
        ?.textContent || '';

    const why =
      $('#teachingWhy')
        ?.textContent || '';

    const glorb =
      $('#teachingGlorb')
        ?.textContent || '';

    return normaliseSpeechText(
      `
      Active listening card
      ${cardNumber}
      of 12.

      ${title}.

      ${meaning}

      Why it helps.
      ${why}

      Glorb says.
      ${glorb}
      `
    );
  }


  /* MISSION CONTROL */
  if (
    activeScreen.id ===
    'missionHub'
  ) {
    const missionCards =
      $$('.mission-card')
        .map(card => {
          const title =
            $('strong', card)
              ?.textContent || '';

          const status =
            $('em', card)
              ?.textContent || '';

          return `${title}. ${status}.`;
        })
        .join(' ');

    return normaliseSpeechText(
      `
      Listening Mission.
      Learning intention.
      We are learning to identify
      what active listening looks like,
      sounds like and feels like,
      and how our body helps us listen.

      ${missionCards}
      `
    );
  }


  /* SORT ACTIVITY */
  if (
    activeScreen.id ===
    'sortScreen'
  ) {
    const remainingCards =
      visibleTextList(
        '.sort-card:not(.hidden-card) span',
        activeScreen
      );

    const placedCards =
      visibleTextList(
        '.placed-sort span',
        activeScreen
      );

    const allOptions =
      [...remainingCards, ...placedCards];

    return normaliseSpeechText(
      `
      Mission one.
      Sort Activity.

      Glorb says.
      I need your help understanding
      human listening.
      I have discovered it can look like,
      sound like and feel like
      different things.
      Can you help me sort each option
      into the correct category?

      Looks like means
      what we see with our eyes.

      Sounds like means
      what we hear with our ears.

      Feels like means
      what we feel in our heart and body.

      The listening options are:
      ${allOptions.join('. ')}.

      ${$('#sortFeedback')?.textContent || ''}
      `
    );
  }


  /* BODY CALIBRATION */
  if (
    activeScreen.id ===
    'bodyScreen'
  ) {
    const bodyInstructions =
      visibleTextList(
        '.body-card:not(.hidden-card)',
        activeScreen
      );

    return normaliseSpeechText(
      `
      Mission two.
      Body Calibration.

      Glorb says.
      I need your help understanding
      my body when I am listening.
      Which positions help me listen well?

      Drag and drop the options
      to the correct spots.

      The body parts are:
      head,
      eyes,
      ears,
      mouth,
      body,
      hands,
      and feet.

      The remaining instructions are:
      ${bodyInstructions.join('. ')}.

      ${$('#bodyFeedback')?.textContent || ''}
      `
    );
  }


  /* HELP GLORB TRY AGAIN */
  if (
    activeScreen.id ===
    'applyScreen'
  ) {
    const actions =
      visibleTextList(
        '#actionChoices .choice',
        activeScreen
      );

    const replyStage =
      $('#replyStage');

    const repliesVisible =
      replyStage &&
      !replyStage.classList
        .contains('hidden');

    const replies =
      repliesVisible
        ? visibleTextList(
            '#replyChoices .choice',
            activeScreen
          )
        : [];

    return normaliseSpeechText(
      `
      Mission three.
      Help Glorb try again.

      Glorb says.
      Pip is coming back.
      Their dog is still sick.
      I have one cloud fact ready,
      but I now suspect this is
      not the correct moment.
      What should I do?

      Choose the four actions
      Glorb should use.

      The options are:
      ${actions.join('. ')}.

      ${$('#actionFeedback')?.textContent || ''}

      ${
        repliesVisible
          ? `Now choose Glorb's best reply.
             The reply options are:
             ${replies.join('. ')}.`
          : ''
      }
      `
    );
  }


  /* FINAL SCREEN */
  if (
    activeScreen.id ===
    'finalScreen'
  ) {
    return normaliseSpeechText(
      `
      Final incident report.
      Glorb tries again.

      Glorb says.
      Pip, I would like to try
      that conversation again.
      I am facing you.
      I will wait until you finish.
      Is your dog feeling better?

      Pip says.
      A little.
      Thanks for asking.

      Glorb says.
      Thank you so much, human.
      I now have made a connection
      with Pip through using
      my active listening skills.

      You taught Glorb that listening
      means showing attention
      with your eyes,
      ears,
      body,
      and words.
      `
    );
  }


  /* FALLBACK */
  const clone =
    activeScreen.cloneNode(
      true
    );

  clone.querySelectorAll(
    `
    button,
    img,
    svg,
    .progress,
    .signal-track,
    [aria-hidden="true"]
    `
  )
    .forEach(element =>
      element.remove()
    );

  return normaliseSpeechText(
    clone.innerText ||
    clone.textContent ||
    ''
  );
}


function splitSpeechText(text, maxLength = 230) {
  const cleaned =
    normaliseSpeechText(text);

  if (!cleaned) {
    return [];
  }

  const sentences =
    cleaned.match(
      /[^.!?]+[.!?]+|[^.!?]+$/g
    ) || [cleaned];

  const chunks = [];
  let current = '';

  sentences.forEach(sentence => {
    const next =
      `${current} ${sentence}`
        .trim();

    if (
      next.length > maxLength &&
      current
    ) {
      chunks.push(current.trim());
      current = sentence.trim();
    }

    else {
      current = next;
    }
  });

  if (current) {
    chunks.push(current.trim());
  }

  return chunks;
}


function getCurrentSpeechSegments() {
  const activeScreen =
    $('.screen.active');

  if (!activeScreen) {
    return [];
  }


  if (
    activeScreen.id ===
    'storyScreen'
  ) {
    return splitSpeechText(
      dialogue[dialogueIndex]?.text || ''
    )
      .map(text => ({
        role: 'glorb',
        text
      }));
  }


  if (
    activeScreen.id ===
    'learnScreen'
  ) {
    const card =
      teaching[teachIndex];

    if (!card) {
      return [];
    }

    const narratorText =
      `
      ${card.title}.
      ${card.meaning}
      Why it helps.
      ${card.why}
      `;

    const narrator =
      splitSpeechText(narratorText)
        .map(text => ({
          role: 'narrator',
          text
        }));

    const glorb =
      splitSpeechText(card.glorb)
        .map(text => ({
          role: 'glorb',
          text
        }));

    return [
      ...narrator,
      ...glorb
    ];
  }


  return splitSpeechText(
    getCurrentScreenText()
  )
    .map(text => ({
      role: 'narrator',
      text
    }));
}


function voiceQualityScore(
  voice,
  role = 'narrator'
) {
  const name =
    String(voice.name || '')
      .toLowerCase();

  const lang =
    String(voice.lang || '')
      .toLowerCase();

  let score = 0;

  if (lang === 'en-au') {
    score += 120;
  }

  else if (lang.startsWith('en-')) {
    score += 55;
  }

  else if (lang === 'en') {
    score += 35;
  }

  if (
    /australian|australia/.test(name)
  ) {
    score += 55;
  }

  if (
    /enhanced|premium|natural|neural|siri/.test(
      name
    )
  ) {
    score += 45;
  }

  if (
    /google/.test(name)
  ) {
    score += 18;
  }

  if (
    /karen|lee/.test(name)
  ) {
    score += 32;
  }

  if (
    /samantha|daniel|moira/.test(name)
  ) {
    score += 16;
  }

  if (voice.localService) {
    score += 8;
  }

  if (
    /compact|eloquence/.test(name)
  ) {
    score -= 22;
  }

  if (
    role === 'glorb' &&
    /lee|daniel/.test(name)
  ) {
    score += 8;
  }

  return score;
}


function chooseSpeechVoice(
  role = 'narrator'
) {
  if (
    !(
      'speechSynthesis'
      in window
    )
  ) {
    return null;
  }

  const voices =
    window.speechSynthesis
      .getVoices();

  if (!voices.length) {
    return null;
  }

  return [...voices]
    .sort(
      (a, b) =>
        voiceQualityScore(
          b,
          role
        ) -
        voiceQualityScore(
          a,
          role
        )
    )[0] || null;
}


let speechQueue = [];
let speechQueueIndex = 0;
let narrationRunId = 0;


function markReadAloudSpeaking() {
  if (!readAloudBtn) {
    return;
  }

  readAloudBtn.classList.add(
    'speaking'
  );

  readAloudBtn.setAttribute(
    'aria-pressed',
    'true'
  );

  const label =
    readAloudBtn.querySelector(
      '.read-label'
    );

  if (label) {
    label.textContent =
      'STOP';
  }
}


function finishNarration(runId) {
  if (
    runId !== narrationRunId
  ) {
    return;
  }

  speechQueue = [];
  speechQueueIndex = 0;
  currentSpeech = null;

  resetReadAloudButton();
}


function speakNextSegment(runId) {
  if (
    runId !== narrationRunId
  ) {
    return;
  }

  if (
    speechQueueIndex >=
    speechQueue.length
  ) {
    finishNarration(runId);
    return;
  }

  const segment =
    speechQueue[
      speechQueueIndex
    ];

  speechQueueIndex += 1;

  const utterance =
    new SpeechSynthesisUtterance(
      segment.text
    );

  currentSpeech =
    utterance;

  utterance.lang =
    'en-AU';

  /*
    The browser still controls the final
    sound, but these settings make the
    built-in voices less robotic.
  */
  if (
    segment.role ===
    'glorb'
  ) {
    utterance.rate = 0.88;
    utterance.pitch = 1.06;
  }

  else {
    utterance.rate = 0.94;
    utterance.pitch = 1;
  }

  utterance.volume = 1;

  const voice =
    chooseSpeechVoice(
      segment.role
    );

  if (voice) {
    utterance.voice =
      voice;
  }

  utterance.onstart =
    markReadAloudSpeaking;

  utterance.onend =
    () => {
      /*
        A small real pause between
        sentences sounds more natural
        than one giant utterance.
      */
      setTimeout(
        () =>
          speakNextSegment(
            runId
          ),
        segment.role ===
          'glorb'
          ? 170
          : 105
      );
    };

  utterance.onerror =
    event => {
      /*
        "interrupted" and "canceled"
        are normal when the learner
        changes screen or presses STOP.
      */
      if (
        event.error ===
          'interrupted' ||
        event.error ===
          'canceled'
      ) {
        return;
      }

      finishNarration(runId);
    };

  window.speechSynthesis
    .speak(
      utterance
    );
}


function speakCurrentScreen() {
  if (
    !(
      'speechSynthesis'
      in window
    ) ||
    !(
      'SpeechSynthesisUtterance'
      in window
    )
  ) {
    alert(
      'Read aloud is not supported in this browser.'
    );

    return;
  }


  if (
    window.speechSynthesis
      .speaking ||
    speechQueue.length
  ) {
    stopNarration();
    return;
  }


  const segments =
    getCurrentSpeechSegments();

  if (!segments.length) {
    return;
  }

  speechQueue =
    segments;

  speechQueueIndex = 0;

  narrationRunId += 1;

  markReadAloudSpeaking();

  speakNextSegment(
    narrationRunId
  );
}


if (readAloudBtn) {
  readAloudBtn.addEventListener(
    'click',
    speakCurrentScreen
  );
}


/*
  Some browsers load their higher-quality
  installed voices a moment after page load.
*/
if (
  'speechSynthesis' in window
) {
  window.speechSynthesis
    .onvoiceschanged =
    () => {
      chooseSpeechVoice(
        'narrator'
      );

      chooseSpeechVoice(
        'glorb'
      );
    };
}


/* =========================================================
   STATE
========================================================= */

const screens = $$('.screen');

const state = {
  score: 0,
  complete: [false, false, false],

  selectedSort: null,
  sortPlaced: 0,

  selectedBody: null,
  bodyPlaced: 0,

  selectedActions: new Set(),
  reply: null
};


/* =========================================================
   HELPERS
========================================================= */

function show(id) {
  stopNarration();

  screens.forEach(screen => {
    screen.classList.toggle(
      'active',
      screen.id === id
    );
  });

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function setProgress(percent) {
  $('#progressFill').style.width = `${percent}%`;
  $('#progressText').textContent = `${percent}%`;
}


function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [copy[i], copy[j]] =
      [copy[j], copy[i]];
  }

  return copy;
}


function setMissionComplete(number) {
  if (state.complete[number - 1]) return;

  state.complete[number - 1] = true;
  state.score += 100;

  $('#score').textContent =
    `${state.score} / 300`;

  const card =
    $(`.mission-card:nth-child(${number})`);

  if (card) {
    card.classList.remove(
      'available',
      'locked'
    );

    card.classList.add('complete');
  }

  const status =
    $(`#m${number}Status`);

  if (status) {
    status.textContent = 'COMPLETE';
  }

  const next =
    $(`.mission-card:nth-child(${number + 1})`);

  if (next) {
    next.disabled = false;

    next.classList.remove('locked');
    next.classList.add('available');

    const nextStatus =
      $(`#m${number + 1}Status`);

    if (nextStatus) {
      nextStatus.textContent =
        'AVAILABLE';
    }
  }

  setProgress(
    [0, 45, 72, 100][number]
  );
}


/* =========================================================
   BOOT
========================================================= */

const bootMessages = [
  'Searching 47 light years of classroom space…',
  'Locating Zorbax-9 curiosity signal…',
  'Removing moon static…',
  'Transmission decoded.'
];

let signal = 0;

const boot = setInterval(() => {
  signal = Math.min(
    100,
    signal + Math.floor(Math.random() * 12) + 8
  );

  $('#signalFill').style.width =
    `${signal}%`;

  $('#signalPercent').textContent =
    `${signal}%`;

  const messageIndex = Math.min(
    bootMessages.length - 1,
    Math.floor(signal / 26)
  );

  $('#bootText').textContent =
    bootMessages[messageIndex];

  if (signal === 100) {
    clearInterval(boot);

    $('#startBtn')
      .classList
      .remove('hidden');
  }
}, 240);


$('#startBtn').onclick = () => {
  show('storyScreen');
  runDialogue();
};


/* =========================================================
   GLORB STORY

   NOTE:
   There is NO "Listening Y-Chart" language anywhere.
   The old arms-out Glorb is not used anywhere.
========================================================= */

const dialogue = [
  {
    img:
      'assets/glorb/intro-glorb.png',

    imageClass:
      'close',

    text:
      'Greetings. I am GLORB, Chief Curiosity Officer from Zorbax-9.\n\n' +
      'I have travelled 47 light years to Earth to join a human school and research how humans learn, communicate and behave.'
  },

  {
    img:
      'assets/glorb/zorbax-glorb.png',

    imageClass:
      'close',

    text:
      'On Zorbax-9, we communicate by transmitting our thoughts directly to one another.\n\n' +
      'Human conversations use words, facial expressions, body language and many unwritten rules that I am still trying to understand.'
  },

  {
    img:
      'assets/glorb/glorb-at-school.png',

    imageClass:
      'wide',

    text:
      'I have been attending school with the humans and observing lessons, playground games and classroom discussions.\n\n' +
      'Unfortunately, I have already made one very important mistake.'
  },

  {
    img:
      'assets/glorb/glorb-interrupts-pip.png',

    imageClass:
      'wide',

    text:
      'Yesterday, a girl named Pip sat beside me and said,\n\n' +
      '"Glorb... my dog is sick."\n\n' +
      'Before Pip finished speaking, I interrupted and said,\n\n' +
      '"DID YOU KNOW CLOUDS ARE NOT SOLID?"'
  },

  {
    img:
      'assets/glorb/pip-walks-away.png',

    imageClass:
      'wide',

    text:
      'Pip stopped talking.\n\n' +
      'She quietly said,\n\n' +
      '"Never mind."\n\n' +
      'Then she walked away.\n\n' +
      'I realised I was thinking about what I wanted to say instead of listening to what Pip was saying.'
  },

  {
    img:
      'assets/glorb/glorb-needs-help.png',

    imageClass:
      'wide',

    text:
      'Earth Expert, I need your help.\n\n' +
      'Please teach me what active listening looks like, sounds like and feels like.\n\n' +
      'Then we can complete a Sort Activity, calibrate my listening body, and help me try talking to Pip again.'
  }
];


let dialogueIndex = 0;
let typing = null;


function runDialogue() {
  stopNarration();

  const item =
    dialogue[dialogueIndex];

  const visual =
    $('.story-visual');

  visual.classList.remove(
    'wide',
    'close'
  );

  if (item.imageClass) {
    visual.classList.add(
      item.imageClass
    );
  }

  $('#storyGlorb').src =
    item.img;

  $('#storyGlorb').alt =
    'Glorb';

  typeText(
    item.text,
    $('#dialogueText')
  );

  $('#nextDialogue').textContent =
    dialogueIndex === dialogue.length - 1
      ? 'BEGIN TRAINING'
      : 'CONTINUE';
}


function typeText(text, target) {
  clearInterval(typing);

  target.textContent = '';

  let index = 0;

  typing = setInterval(() => {
    target.textContent +=
      text[index] || '';

    index += 1;

    if (index >= text.length) {
      clearInterval(typing);
    }
  }, 10);
}


$('#nextDialogue').onclick = () => {
  if (
    dialogueIndex <
    dialogue.length - 1
  ) {
    dialogueIndex += 1;
    runDialogue();
  }

  else {
    setProgress(15);

    show('learnScreen');

    renderTeaching();
  }
};


/* =========================================================
   ACTIVE LISTENING TEACHING CARDS
========================================================= */

const teaching = [
  {
    img: 22,
    title: 'Eye Contact',
    meaning:
      'Look naturally towards the person who is speaking.',
    why:
      'It shows that your attention is with them.',
    glorb:
      'Visual attention signal detected. I should look at the person, not the nearest cloud.',
    glorbImg:
      'assets/glorb/eye-contact-note.png'
  },

  {
    img: 23,
    title: 'Face the Speaker',
    meaning:
      'Turn your head and body towards the speaker.',
    why:
      'Your body shows that you are ready to listen.',
    glorb:
      'My front-facing system must point towards the human. This is surprisingly specific.',
    glorbImg:
      'assets/glorb/face-speaker-note.png'
  },

  {
    img: 24,
    title: 'Listen Carefully',
    meaning:
      'Pay attention to the speaker’s words and important details.',
    why:
      'Careful listening helps you understand the whole message.',
    glorb:
      'The ears collect data. The brain must not replace it with guesses.',
    glorbImg:
      'assets/glorb/listen-carefully-note.png'
  },

  {
    img: 25,
    title: 'Focus',
    meaning:
      'Keep your attention on the conversation.',
    why:
      'Focusing helps you notice words, feelings and meaning.',
    glorb:
      'One conversation at a time. Paper aeroplanes are not part of this research.',
    glorbImg:
      'assets/glorb/focus-note.png'
  },

  {
    img: 26,
    title: 'Nod Your Head',
    meaning:
      'Use a small nod to show you are following along.',
    why:
      'A nod gives the speaker a quiet sign that you are listening.',
    glorb:
      'A tiny head movement can transmit “message received.” Efficient.',
    glorbImg:
      'assets/glorb/nod-note.png'
  },

  {
    img: 27,
    title: 'Wait Your Turn',
    meaning:
      'Let the other person have their speaking turn.',
    why:
      'Taking turns makes conversations fair and easier to understand.',
    glorb:
      'I have discovered that another person’s turn continues even when I have a fact.',
    glorbImg:
      'assets/glorb/wait-turn-note.png'
  },

  {
    img: 28,
    title: 'Ask Questions',
    meaning:
      'Ask a question that connects to what the person said.',
    why:
      'Questions show interest and help you learn more.',
    glorb:
      'Connected questions are useful. “What happened next?” is better than “Are clouds edible?”',
    glorbImg:
      'assets/glorb/ask-questions-note.png'
  },

  {
    img: 29,
    title: 'Repeat Back',
    meaning:
      'Say the important idea in your own words.',
    why:
      'Repeating back checks that you understood correctly.',
    glorb:
      'This is a verification procedure. At last, a social rule with laboratory qualities.',
    glorbImg:
      'assets/glorb/repeat-back-note.png'
  },

  {
    img: 30,
    title:
      'Tell the Speaker You Understand',
    meaning:
      'Use words such as “Okay” or “I understand.”',
    why:
      'These words reassure the speaker that their message arrived.',
    glorb:
      'Humans require delivery confirmation. I will provide it.',
    glorbImg:
      'assets/glorb/understand-note.png'
  },

  {
    img: 31,
    title:
      'Wait for the Speaker to Stop Before Speaking',
    meaning:
      'Pause until the speaker has completely finished.',
    why:
      'Waiting prevents interruptions and gives the speaker time to explain.',
    glorb:
      'Sentence completion must occur before cloud deployment.',
    glorbImg:
      'assets/glorb/wait-before-speaking-note.png'
  },

  {
    img: 32,
    title:
      'Keep Hands and Feet Still',
    meaning:
      'Use a calm body while someone is talking.',
    why:
      'A calm body makes it easier for you and the speaker to focus.',
    glorb:
      'Still hands. Still feet. Now my attention can stay with the human.',
    glorbImg:
      'assets/glorb/calm-body-note.png'
  },

  {
    img: 33,
    title:
      'Ignore Distractions',
    meaning:
      'Bring your attention back when something else catches your eye.',
    why:
      'Ignoring distractions helps the speaker feel important.',
    glorb:
      'The paper aeroplane may continue without my supervision.',
    glorbImg:
      'assets/glorb/ignore-distractions-note.png'
  }
];


let teachingNoteTimer = null;
let teachingNoteTyping = null;


function stopTeachingNote() {
  clearTimeout(
    teachingNoteTimer
  );

  clearInterval(
    teachingNoteTyping
  );

  teachingNoteTimer = null;
  teachingNoteTyping = null;
}


function typeTeachingNote(
  text,
  target,
  annotation
) {
  clearInterval(
    teachingNoteTyping
  );

  target.textContent = '';

  let index = 0;

  teachingNoteTyping =
    setInterval(() => {
      target.textContent +=
        text[index] || '';

      index += 1;

      if (
        index >= text.length
      ) {
        clearInterval(
          teachingNoteTyping
        );

        annotation.classList.add(
          'note-complete'
        );
      }
    }, 24);
}


function revealTeachingNote(card) {
  stopTeachingNote();

  const annotation =
    $('#glorbAnnotation');

  const note =
    $('#teachingGlorb');

  const image =
    $('#teachingGlorbImage');

  annotation.classList.remove(
    'is-visible',
    'note-complete'
  );

  note.textContent = '';

  image.src =
    card.glorbImg ||
    'assets/glorb/intro-glorb.png';

  image.alt =
    `Glorb commenting on ${card.title}`;

  teachingNoteTimer =
    setTimeout(() => {
      annotation.classList.add(
        'is-visible'
      );

      typeTeachingNote(
        card.glorb,
        note,
        annotation
      );
    }, 720);
}


let teachIndex = 0;


function renderTeaching() {
  stopNarration();
  stopTeachingNote();

  const card =
    teaching[teachIndex];

  $('#teachingImage').src =
    `assets/listening/${card.img}.png`;

  $('#teachingImage').alt =
    card.title;

  $('#teachingTitle').textContent =
    card.title;

  $('#teachingMeaning').textContent =
    card.meaning;

  $('#teachingWhy').textContent =
    card.why;

  $('#cardCount').textContent =
    teachIndex + 1;

  $('#prevCard').disabled =
    teachIndex === 0;

  $('#nextCard').textContent =
    teachIndex ===
      teaching.length - 1
      ? 'OPEN MISSION CONTROL'
      : 'NEXT CARD';

  revealTeachingNote(
    card
  );
}


$('#prevCard').onclick = () => {
  if (teachIndex > 0) {
    teachIndex -= 1;
    renderTeaching();
  }
};


$('#nextCard').onclick = () => {
  if (
    teachIndex <
    teaching.length - 1
  ) {
    teachIndex += 1;
    renderTeaching();
  }

  else {
    setProgress(28);
    show('missionHub');
  }
};


/* =========================================================
   MISSION NAVIGATION
========================================================= */

$$('.mission-card').forEach(button => {
  button.onclick = () => {
    if (!button.disabled) {
      show(
        button.dataset.target
      );
    }
  };
});


$$('.hubBtn').forEach(button => {
  button.onclick = () => {
    show('missionHub');
  };
});


/* =========================================================
   MISSION 01 — SORT ACTIVITY

   No Y-chart language.
   No "Glorb's chart is becoming statistically useful".
   No "CHART COMPLETE".
========================================================= */

const sortData = [
  {
    label: 'Eye Contact',
    bucket: 'looks',
    image: '22.png'
  },

  {
    label: 'Face the Speaker',
    bucket: 'looks',
    image: '23.png'
  },

  {
    label: 'Nod Your Head',
    bucket: 'looks',
    image: '26.png'
  },


  {
    label: 'Ask Questions',
    bucket: 'sounds',
    image: '28.png'
  },

  {
    label: 'Repeat Back',
    bucket: 'sounds',
    image: '29.png'
  },

  {
    label:
      'Tell the Speaker You Understand',
    bucket: 'sounds',
    image: '30.png'
  },

  {
    label:
      'Wait for the Speaker to Stop Before Speaking',
    bucket: 'sounds',
    image: '31.png'
  },


  {
    label: 'Listen Carefully',
    bucket: 'feels',
    image: '24.png'
  },

  {
    label: 'Wait Your Turn',
    bucket: 'feels',
    image: '27.png'
  },

  {
    label:
      'Keep Hands and Feet Still',
    bucket: 'feels',
    image: '32.png'
  },

  {
    label:
      'Ignore Distractions',
    bucket: 'feels',
    image: '33.png'
  },

  {
    label: 'Showing Interest',
    bucket: 'feels',
    image:
      'showing-interest-clean.webp'
  }
];


function renderSort() {
  const bank =
    $('#sortBank');

  bank.innerHTML = '';

  $$('.drop-items').forEach(zone => {
    zone.innerHTML =
      '<span class="drop-placeholder">DRAG CARDS HERE</span>';
  });

  state.sortPlaced = 0;
  state.selectedSort = null;

  $('#checkSort').disabled = true;

  $('#sortFeedback').textContent =
    'Sort each listening behaviour into the correct category.';


  shuffle(sortData)
    .forEach((item, index) => {

      const button =
        document.createElement(
          'button'
        );

      button.className =
        'sort-card';

      button.type =
        'button';

      button.draggable =
        true;

      button.dataset.id =
        String(index);

      button.dataset.bucket =
        item.bucket;

      button.dataset.label =
        item.label;

      button.dataset.image =
        item.image;


      button.innerHTML = `
        <img
          src="assets/listening/${item.image}"
          alt=""
        >
        <span>${item.label}</span>
      `;


      button.addEventListener(
        'dragstart',
        event => {
          event.dataTransfer
            .setData(
              'text/glorb-sort',
              String(index)
            );
        }
      );


      button.onclick = () => {
        state.selectedSort =
          state.selectedSort === button
            ? null
            : button;

        $$('.sort-card')
          .forEach(card => {
            card.classList.toggle(
              'selected',
              card === state.selectedSort
            );
          });
      };


      bank.appendChild(button);
    });
}


function placeSort(
  card,
  category
) {
  if (!card || !category) return;

  const oldPlacement =
    $(
      `.placed-sort[data-source-id="${card.dataset.id}"]`
    );

  if (oldPlacement) {
    oldPlacement.remove();
  }

  const target =
    $('.drop-items', category);

  const placeholder =
    $('.drop-placeholder', target);

  if (placeholder) {
    placeholder.remove();
  }

  const placed =
    document.createElement(
      'button'
    );

  placed.className =
    'placed-sort';

  placed.type =
    'button';

  placed.dataset.sourceId =
    card.dataset.id;

  placed.dataset.bucket =
    card.dataset.bucket;

  placed.dataset.currentBucket =
    category.dataset.bucket;

  placed.innerHTML =
    card.innerHTML;


  placed.onclick = () => {
    card.classList.remove(
      'hidden-card'
    );

    placed.remove();

    state.sortPlaced -= 1;

    $('#checkSort').disabled =
      state.sortPlaced !==
      sortData.length;

    $('#sortFeedback').textContent =
      `${state.sortPlaced} of ${sortData.length} cards placed.`;
  };


  target.appendChild(placed);

  card.classList.add(
    'hidden-card'
  );

  state.selectedSort = null;

  state.sortPlaced += 1;

  $$('.sort-card')
    .forEach(item =>
      item.classList.remove(
        'selected'
      )
    );

  $('#checkSort').disabled =
    state.sortPlaced !==
    sortData.length;

  $('#sortFeedback').textContent =
    `${state.sortPlaced} of ${sortData.length} cards placed.`;
}


$$('.listening-category')
  .forEach(category => {

    category.addEventListener(
      'dragover',
      event => {
        event.preventDefault();

        category.classList.add(
          'dragover'
        );
      }
    );


    category.addEventListener(
      'dragleave',
      () => {
        category.classList.remove(
          'dragover'
        );
      }
    );


    category.addEventListener(
      'drop',
      event => {
        event.preventDefault();

        category.classList.remove(
          'dragover'
        );

        const id =
          event.dataTransfer
            .getData(
              'text/glorb-sort'
            );

        const card =
          $(
            `.sort-card[data-id="${id}"]`
          );

        placeSort(
          card,
          category
        );
      }
    );


    category.onclick =
      event => {

        if (
          event.target.closest(
            '.placed-sort'
          )
        ) {
          return;
        }

        if (
          state.selectedSort
        ) {
          placeSort(
            state.selectedSort,
            category
          );
        }
      };
  });


$('#checkSort').onclick = () => {
  const placements =
    $$('.placed-sort');

  const incorrect =
    placements.filter(
      card =>
        card.dataset.bucket !==
        card.dataset.currentBucket
    );

  placements.forEach(card => {
    card.classList.remove(
      'correct',
      'incorrect'
    );

    card.classList.add(
      card.dataset.bucket ===
      card.dataset.currentBucket
        ? 'correct'
        : 'incorrect'
    );
  });


  if (incorrect.length === 0) {
    $('#sortFeedback').textContent =
      'SORT ACTIVITY COMPLETE — You helped Glorb understand what listening looks like, sounds like and feels like.';

    $('#checkSort').disabled =
      true;

    setMissionComplete(1);

    setTimeout(() => {
      show('missionHub');
    }, 1350);
  }

  else {
    $('#sortFeedback').textContent =
      `${incorrect.length} card${incorrect.length === 1 ? '' : 's'} need another look. Move the red cards and try again.`;
  }
};


renderSort();


/* =========================================================
   MISSION 02 — BODY CALIBRATION

   Fixed HEAD / BRAIN mismatch:
   everything now uses "head".
========================================================= */

const bodyData = [
  {
    text:
      'Face the speaker and nod to show you understand.',
    part:
      'head'
  },

  {
    text:
      'Look towards the speaker.',
    part:
      'eyes'
  },

  {
    text:
      'Listen carefully to what the speaker is saying.',
    part:
      'ears'
  },

  {
    text:
      'Stay quiet while they are speaking. Ask questions or respond when it is your turn.',
    part:
      'mouth'
  },

  {
    text:
      'Face the speaker and stay focused.',
    part:
      'body'
  },

  {
    text:
      'Keep hands calm and still.',
    part:
      'hands'
  },

  {
    text:
      'Keep feet calm and stay in one place.',
    part:
      'feet'
  }
];


function renderBody() {
  const host =
    $('#bodyCards');

  host.innerHTML = '';

  state.bodyPlaced = 0;
  state.selectedBody = null;

  $('#checkBody').disabled =
    true;

  $('.body-map')
    .querySelectorAll(
      '.body-zone'
    )
    .forEach(zone => {
      zone.classList.remove(
        'filled',
        'correct',
        'incorrect'
      );

      zone.dataset.assignedPart =
        '';

      $('small', zone)
        .textContent = '';
    });


  shuffle(bodyData)
    .forEach(
      (item, index) => {

        const button =
          document.createElement(
            'button'
          );

        button.className =
          'body-card';

        button.type =
          'button';

        button.draggable =
          true;

        button.dataset.id =
          String(index);

        button.dataset.part =
          item.part;

        button.textContent =
          item.text;


        button.addEventListener(
          'dragstart',
          event => {
            event.dataTransfer
              .setData(
                'text/glorb-body',
                String(index)
              );
          }
        );


        button.onclick = () => {
          state.selectedBody =
            state.selectedBody ===
            button
              ? null
              : button;

          $$('.body-card')
            .forEach(card => {
              card.classList.toggle(
                'selected',
                card ===
                state.selectedBody
              );
            });
        };


        host.appendChild(
          button
        );
      }
    );
}


function placeBody(
  card,
  zone
) {
  if (!card || !zone) return;

  if (
    zone.dataset.assignedPart
  ) {
    const currentCard =
      $(
        `.body-card[data-part="${zone.dataset.assignedPart}"]`
      );

    if (currentCard) {
      currentCard.classList.remove(
        'hidden-card'
      );
    }

    state.bodyPlaced -= 1;
  }


  const existingZone =
    $(
      `.body-zone[data-assigned-id="${card.dataset.id}"]`
    );

  if (
    existingZone &&
    existingZone !== zone
  ) {
    existingZone.dataset.assignedPart =
      '';

    existingZone.dataset.assignedId =
      '';

    existingZone.classList.remove(
      'filled',
      'correct',
      'incorrect'
    );

    $('small', existingZone)
      .textContent = '';

    state.bodyPlaced -= 1;
  }


  zone.dataset.assignedPart =
    card.dataset.part;

  zone.dataset.assignedId =
    card.dataset.id;

  zone.classList.add(
    'filled'
  );

  zone.classList.remove(
    'correct',
    'incorrect'
  );

  $('small', zone)
    .textContent =
      card.textContent;


  card.classList.add(
    'hidden-card'
  );

  state.selectedBody =
    null;

  state.bodyPlaced += 1;

  $$('.body-card')
    .forEach(item =>
      item.classList.remove(
        'selected'
      )
    );


  $('#checkBody').disabled =
    state.bodyPlaced !==
    bodyData.length;

  $('#bodyFeedback').textContent =
    `${state.bodyPlaced} of 7 body parts filled.`;
}


$$('.body-zone')
  .forEach(zone => {

    zone.addEventListener(
      'dragover',
      event => {
        event.preventDefault();

        zone.classList.add(
          'dragover'
        );
      }
    );


    zone.addEventListener(
      'dragleave',
      () => {
        zone.classList.remove(
          'dragover'
        );
      }
    );


    zone.addEventListener(
      'drop',
      event => {
        event.preventDefault();

        zone.classList.remove(
          'dragover'
        );

        const id =
          event.dataTransfer
            .getData(
              'text/glorb-body'
            );

        const card =
          $(
            `.body-card[data-id="${id}"]`
          );

        placeBody(
          card,
          zone
        );
      }
    );


    zone.onclick = () => {
      if (
        state.selectedBody
      ) {
        placeBody(
          state.selectedBody,
          zone
        );
      }
    };
  });


$('#checkBody').onclick = () => {
  const zones =
    $$('.body-zone');

  const incorrect =
    zones.filter(
      zone =>
        zone.dataset.assignedPart !==
        zone.dataset.part
    );


  zones.forEach(zone => {
    zone.classList.remove(
      'correct',
      'incorrect'
    );

    zone.classList.add(
      zone.dataset.assignedPart ===
      zone.dataset.part
        ? 'correct'
        : 'incorrect'
    );
  });


  if (incorrect.length === 0) {
    $('#bodyFeedback').textContent =
      'BODY CALIBRATION COMPLETE — Glorb now knows how to use his body to show he is listening.';

    $('#checkBody').disabled =
      true;

    setMissionComplete(2);

    setTimeout(() => {
      show('missionHub');
    }, 1350);
  }

  else {
    $('#bodyFeedback').textContent =
      `${incorrect.length} body-part answer${incorrect.length === 1 ? '' : 's'} need another look. Move the red answers and try again.`;
  }
};


renderBody();


/* =========================================================
   MISSION 03 — HELP GLORB TRY AGAIN

   Answers are randomized every load.
========================================================= */

const actions = [
  [
    'Face Pip',
    true
  ],

  [
    'Look at Pip, not the sky',
    true
  ],

  [
    'Wait until Pip finishes',
    true
  ],

  [
    'Ask about the dog',
    true
  ],

  [
    'Share the cloud fact immediately',
    false
  ],

  [
    'Look for a paper aeroplane',
    false
  ],

  [
    'Plan a better story while Pip talks',
    false
  ],

  [
    'Walk away before Pip finishes',
    false
  ]
];


const actionHost =
  $('#actionChoices');


shuffle(actions)
  .forEach(
    ([label, correct]) => {

      const button =
        document.createElement(
          'button'
        );

      button.className =
        'choice';

      button.type =
        'button';

      button.textContent =
        label;

      button.dataset.correct =
        String(correct);


      button.onclick = () => {
        button.classList.toggle(
          'selected'
        );

        if (
          button.classList
            .contains('selected')
        ) {
          state.selectedActions
            .add(button);
        }

        else {
          state.selectedActions
            .delete(button);
        }


        $('#checkActions').disabled =
          state.selectedActions.size !==
          4;

        $('#actionFeedback').textContent =
          `${state.selectedActions.size} of 4 actions selected.`;
      };


      actionHost.appendChild(
        button
      );
    }
  );


$('#checkActions').onclick = () => {
  const good =
    state.selectedActions.size === 4 &&
    [...state.selectedActions]
      .every(
        button =>
          button.dataset.correct ===
          'true'
      );


  if (good) {
    [...state.selectedActions]
      .forEach(button => {
        button.classList.add(
          'correct'
        );
      });

    $$('#actionChoices .choice')
      .forEach(button => {
        button.disabled =
          true;
      });

    $('#actionFeedback').textContent =
      'PLAN APPROVED — Glorb will face Pip, look at her, wait until she finishes and ask about her dog.';

    $('#replyStage')
      .classList
      .remove('hidden');
  }

  else {
    [...state.selectedActions]
      .forEach(button => {
        if (
          button.dataset.correct ===
          'false'
        ) {
          button.classList.add(
            'incorrect'
          );
        }
      });

    $('#actionFeedback').textContent =
      'One or more actions would make Pip feel ignored. Try again.';

    setTimeout(() => {
      $$('#actionChoices .choice')
        .forEach(button => {
          button.classList.remove(
            'selected',
            'incorrect'
          );
        });

      state.selectedActions
        .clear();

      $('#checkActions').disabled =
        true;

      $('#actionFeedback').textContent =
        'Select four actions.';
    }, 1200);
  }
};


const replies = [
  [
    '“Did you know clouds are not solid?”',
    false
  ],

  [
    '“Is your dog feeling better? Is there anything I can do?”',
    true
  ],

  [
    '“My spaceship also made a strange sound.”',
    false
  ],

  [
    '“Okay, but I have a more interesting story.”',
    false
  ]
];


const replyHost =
  $('#replyChoices');


shuffle(replies)
  .forEach(
    ([label, correct]) => {

      const button =
        document.createElement(
          'button'
        );

      button.className =
        'choice';

      button.type =
        'button';

      button.textContent =
        label;

      button.dataset.correct =
        String(correct);


      button.onclick = () => {
        $$('#replyChoices .choice')
          .forEach(choice => {
            choice.classList.remove(
              'selected'
            );
          });

        button.classList.add(
          'selected'
        );

        state.reply =
          button;

        $('#checkReply').disabled =
          false;
      };


      replyHost.appendChild(
        button
      );
    }
  );


$('#checkReply').onclick = () => {
  if (!state.reply) return;


  if (
    state.reply.dataset.correct ===
    'true'
  ) {
    state.reply.classList.add(
      'correct'
    );

    $$('#replyChoices .choice')
      .forEach(button => {
        button.disabled =
          true;
      });

    $('#actionFeedback').textContent =
      'RESPONSE APPROVED — The question connects directly to Pip’s message.';

    setMissionComplete(3);

    setTimeout(() => {
      show('finalScreen');
    }, 900);
  }

  else {
    state.reply.classList.add(
      'incorrect'
    );

    $('#actionFeedback').textContent =
      'That response changes the subject back to Glorb. Try a connected question.';

    setTimeout(() => {
      state.reply.classList.remove(
        'selected',
        'incorrect'
      );

      state.reply =
        null;

      $('#checkReply').disabled =
        true;
    }, 900);
  }
};


/* =========================================================
   RESTART
========================================================= */

$('#restartBtn').onclick = () => {
  location.reload();
};
