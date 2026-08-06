const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const screens = $$('.screen');

const state = {
  score: 0,
  complete: [false, false, false],
  selectedSort: null,
  sortDone: 0,
  selectedBody: null,
  bodyDone: 0,
  selectedActions: new Set(),
  reply: null
};

function show(id) {
  screens.forEach(screen => {
    screen.classList.toggle('active', screen.id === id);
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

function setMissionComplete(number) {
  if (state.complete[number - 1]) return;

  state.complete[number - 1] = true;
  state.score += 100;

  $('#score').textContent = `${state.score} / 300`;

  const card = $(`.mission-card:nth-child(${number})`);

  if (card) {
    card.classList.remove('available', 'locked');
    card.classList.add('complete');
  }

  const status = $(`#m${number}Status`);

  if (status) {
    status.textContent = 'COMPLETE';
  }

  const next = $(`.mission-card:nth-child(${number + 1})`);

  if (next) {
    next.disabled = false;
    next.classList.remove('locked');
    next.classList.add('available');

    const nextStatus = $(`#m${number + 1}Status`);

    if (nextStatus) {
      nextStatus.textContent = 'AVAILABLE';
    }
  }

  setProgress([0, 45, 72, 100][number]);
}

/* =========================================================
   BOOT SEQUENCE
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

  $('#signalFill').style.width = `${signal}%`;
  $('#signalPercent').textContent = `${signal}%`;

  const messageIndex = Math.min(
    bootMessages.length - 1,
    Math.floor(signal / 26)
  );

  $('#bootText').textContent = bootMessages[messageIndex];

  if (signal === 100) {
    clearInterval(boot);
    $('#startBtn').classList.remove('hidden');
  }
}, 240);

$('#startBtn').onclick = () => {
  show('storyScreen');
  runDialogue();
};

/* =========================================================
   GLORB INTRODUCTION
========================================================= */

const dialogue = [
  {
    img: 'assets/glorb/welcome.webp',
    text:
      'Greetings. I am GLORB, Chief Curiosity Officer from Zorbax-9.\n\n' +
      'I have travelled 47 light years to Earth to join a human school and research how humans learn, communicate and behave.'
  },

  {
    img: 'assets/glorb/neutral.webp',
    text:
      'On Zorbax-9, we communicate by transmitting our thoughts directly to one another.\n\n' +
      'Human conversations use words, facial expressions, body language and many unwritten rules that I am still trying to understand.'
  },

  {
    img: 'assets/glorb/welcome.webp',
    text:
      'I have been attending school with the humans and observing lessons, playground games and classroom discussions.\n\n' +
      'Unfortunately, I have already made one very important mistake.'
  },

  {
    img: 'assets/glorb/uneasy-face.webp',
    text:
      'Yesterday, a girl named Pip sat beside me and said,\n\n' +
      '"Glorb... my dog is sick."\n\n' +
      'Before Pip finished speaking, I interrupted and said,\n\n' +
      '"DID YOU KNOW CLOUDS ARE NOT SOLID?"'
  },

  {
    img: 'assets/glorb/sad-face.webp',
    text:
      'Pip stopped talking.\n\n' +
      'She quietly said,\n\n' +
      '"Never mind."\n\n' +
      'Then she walked away.\n\n' +
      'I realised I was thinking about what I wanted to say instead of listening to what Pip was saying.'
  },

  {
    img: 'assets/glorb/excited.webp',
    text:
      'Earth Expert, I need your help.\n\n' +
      'Please teach me what active listening looks like, sounds like and feels like.\n\n' +
      'Then we can build a Listening Y-Chart, calibrate my listening body, and help me try talking to Pip again.'
  }
];

let dialogueIndex = 0;
let typing = null;

function runDialogue() {
  const item = dialogue[dialogueIndex];

  $('#storyGlorb').src = item.img;
  $('#storyGlorb').alt = 'Glorb';

  typeText(item.text, $('#dialogueText'));

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
    target.textContent += text[index] || '';
    index += 1;

    if (index >= text.length) {
      clearInterval(typing);
    }
  }, 13);
}

$('#nextDialogue').onclick = () => {
  if (dialogueIndex < dialogue.length - 1) {
    dialogueIndex += 1;
    runDialogue();
  } else {
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
    meaning: 'Look naturally towards the person who is speaking.',
    why: 'It shows that your attention is with them.',
    glorb:
      'Visual attention signal detected. I should look at the person, not the nearest cloud.'
  },

  {
    img: 23,
    title: 'Face the Speaker',
    meaning: 'Turn your head and body towards the speaker.',
    why: 'Your body shows that you are ready to listen.',
    glorb:
      'My front-facing system must point towards the human. This is surprisingly specific.'
  },

  {
    img: 24,
    title: 'Listen Carefully',
    meaning:
      'Pay attention to the speaker’s words and important details.',
    why:
      'Careful listening helps you understand the whole message.',
    glorb:
      'The ears collect data. The brain must not replace it with guesses.'
  },

  {
    img: 25,
    title: 'Focus',
    meaning: 'Keep your attention on the conversation.',
    why:
      'Focusing helps you notice words, feelings and meaning.',
    glorb:
      'One conversation at a time. Paper aeroplanes are not part of this research.'
  },

  {
    img: 26,
    title: 'Nod Your Head',
    meaning:
      'Use a small nod to show you are following along.',
    why:
      'A nod gives the speaker a quiet sign that you are listening.',
    glorb:
      'A tiny head movement can transmit “message received.” Efficient.'
  },

  {
    img: 27,
    title: 'Wait Your Turn',
    meaning:
      'Let the other person have their speaking turn.',
    why:
      'Taking turns makes conversations fair and easier to understand.',
    glorb:
      'I have discovered that another person’s turn continues even when I have a fact.'
  },

  {
    img: 28,
    title: 'Ask Questions',
    meaning:
      'Ask a question that connects to what the person said.',
    why:
      'Questions show interest and help you learn more.',
    glorb:
      'Connected questions are useful. “What happened next?” is better than “Are clouds edible?”'
  },

  {
    img: 29,
    title: 'Repeat Back',
    meaning:
      'Say the important idea in your own words.',
    why:
      'Repeating back checks that you understood correctly.',
    glorb:
      'This is a verification procedure. At last, a social rule with laboratory qualities.'
  },

  {
    img: 30,
    title: 'Tell the Speaker You Understand',
    meaning:
      'Use words such as “Okay” or “I understand.”',
    why:
      'These words reassure the speaker that their message arrived.',
    glorb:
      'Humans require delivery confirmation. I will provide it.'
  },

  {
    img: 31,
    title: 'Wait Before Speaking',
    meaning:
      'Pause until the speaker has completely finished.',
    why:
      'Waiting prevents interruptions and gives the speaker time to explain.',
    glorb:
      'Sentence completion must occur before cloud deployment.'
  },

  {
    img: 32,
    title: 'Keep Hands and Feet Still',
    meaning:
      'Use a calm body while someone is talking.',
    why:
      'A calm body makes it easier for you and the speaker to focus.',
    glorb:
      'Hands still. Feet grounded. Confusion reduced by approximately 19%.'
  },

  {
    img: 33,
    title: 'Ignore Distractions',
    meaning:
      'Bring your attention back when something else catches your eye.',
    why:
      'Ignoring distractions helps the speaker feel important.',
    glorb:
      'The paper aeroplane may continue without my supervision.'
  }
];

let teachIndex = 0;

function renderTeaching() {
  const card = teaching[teachIndex];

  $('#teachingImage').src =
    `assets/listening/${card.img}.webp`;

  $('#teachingImage').alt = card.title;
  $('#teachingTitle').textContent = card.title;
  $('#teachingMeaning').textContent = card.meaning;
  $('#teachingWhy').textContent = card.why;
  $('#teachingGlorb').textContent = card.glorb;
  $('#cardCount').textContent = teachIndex + 1;

  $('#prevCard').disabled = teachIndex === 0;

  $('#nextCard').textContent =
    teachIndex === teaching.length - 1
      ? 'OPEN MISSION CONTROL'
      : 'NEXT CARD';
}

$('#prevCard').onclick = () => {
  if (teachIndex > 0) {
    teachIndex -= 1;
    renderTeaching();
  }
};

$('#nextCard').onclick = () => {
  if (teachIndex < teaching.length - 1) {
    teachIndex += 1;
    renderTeaching();
  } else {
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
      show(button.dataset.target);
    }
  };
});

$$('.hubBtn').forEach(button => {
  button.onclick = () => {
    show('missionHub');
  };
});

/* =========================================================
   MISSION 1 — LISTENING Y-CHART
========================================================= */

const sortData = [
  ['Eye Contact', 'looks'],
  ['Face the Speaker', 'looks'],
  ['Listen Carefully', 'looks'],
  ['Focus', 'looks'],
  ['Nod Your Head', 'looks'],
  ['Wait Your Turn', 'looks'],
  ['Keep Hands and Feet Still', 'looks'],
  ['Ignore Distractions', 'looks'],
  ['Showing Interest', 'looks'],

  ['Ask Questions', 'sounds'],
  ['Repeat Back', 'sounds'],
  ['Tell the Speaker You Understand', 'sounds'],
  ['Wait for the Speaker to Stop Before Speaking', 'sounds'],
  ['Quiet Voices', 'sounds'],
  ['Kind / Encouraging Words', 'sounds'],
  ['“Okay.”', 'sounds'],
  ['“I understand.”', 'sounds'],
  ['“Can you explain that again?”', 'sounds'],
  ['“That’s a good idea.”', 'sounds'],

  ['Happy', 'feels'],
  ['Important', 'feels'],
  ['Valued', 'feels'],
  ['Respected', 'feels'],
  ['Understood', 'feels']
];

function renderSort() {
  const bank = $('#sortBank');

  bank.innerHTML = '';

  sortData.forEach(([label, bucket], index) => {
    const button = document.createElement('button');

    button.className = 'sort-card';
    button.textContent = label;
    button.draggable = true;
    button.dataset.bucket = bucket;
    button.dataset.id = index;

    button.addEventListener('dragstart', event => {
      event.dataTransfer.setData(
        'text/plain',
        String(index)
      );
    });

    button.onclick = () => {
      state.selectedSort =
        state.selectedSort === button
          ? null
          : button;

      $$('.sort-card').forEach(card => {
        card.classList.toggle(
          'selected',
          card === state.selectedSort
        );
      });
    };

    bank.appendChild(button);
  });
}

renderSort();

$$('.drop-zone').forEach(zone => {
  zone.addEventListener('dragover', event => {
    event.preventDefault();
    zone.classList.add('dragover');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('dragover');
  });

  zone.addEventListener('drop', event => {
    event.preventDefault();
    zone.classList.remove('dragover');

    const id =
      event.dataTransfer.getData('text/plain');

    const card =
      $(`.sort-card[data-id="${id}"]`);

    placeSort(card, zone);
  });

  zone.onclick = event => {
    if (event.target.closest('.placed-card')) return;

    if (state.selectedSort) {
      placeSort(state.selectedSort, zone);
    }
  };
});

function placeSort(card, zone) {
  if (!card) return;

  const correct =
    card.dataset.bucket === zone.dataset.bucket;

  if (correct) {
    const tag = document.createElement('span');

    tag.className = 'placed-card';
    tag.textContent = card.textContent;

    $('.drop-items', zone).appendChild(tag);

    card.remove();

    state.selectedSort = null;
    state.sortDone += 1;

    $('#sortFeedback').textContent =
      `${state.sortDone} of ${sortData.length} cards sorted. ` +
      'Glorb’s chart is becoming statistically useful.';

    if (state.sortDone === sortData.length) {
      $('#sortFeedback').textContent =
        'CHART COMPLETE — Listening looks like, sounds like and feels like data successfully separated.';

      setMissionComplete(1);

      setTimeout(() => {
        show('missionHub');
      }, 1200);
    }
  } else {
    const heading = $('h3', zone)?.textContent || 'that section';

    $('#sortFeedback').textContent =
      `That card does not belong in “${heading}.” ` +
      'My calculations request another attempt.';

    card.classList.add('selected');

    setTimeout(() => {
      card.classList.remove('selected');
    }, 500);
  }
}

/* =========================================================
   MISSION 2 — CALIBRATE GLORB
========================================================= */

const bodyData = [
  ['Focus my thinking', 'brain'],
  ['Look at the speaker', 'eyes'],
  ['Listen carefully', 'ears'],
  ['Wait before speaking', 'mouth'],
  ['Face the speaker', 'body'],
  ['Keep my hands still', 'hands'],
  ['Keep my feet still', 'feet']
];

function renderBody() {
  const host = $('#bodyCards');

  host.innerHTML = '';

  bodyData.forEach(([label, part], index) => {
    const button = document.createElement('button');

    button.className = 'body-card';
    button.textContent = label;
    button.draggable = true;
    button.dataset.part = part;
    button.dataset.id = index;

    button.addEventListener('dragstart', event => {
      event.dataTransfer.setData(
        'text/plain',
        String(index)
      );
    });

    button.onclick = () => {
      state.selectedBody =
        state.selectedBody === button
          ? null
          : button;

      $$('.body-card').forEach(card => {
        card.classList.toggle(
          'selected',
          card === state.selectedBody
        );
      });
    };

    host.appendChild(button);
  });
}

renderBody();

$$('.body-zone').forEach(zone => {
  zone.addEventListener('dragover', event => {
    event.preventDefault();
    zone.classList.add('dragover');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('dragover');
  });

  zone.addEventListener('drop', event => {
    event.preventDefault();
    zone.classList.remove('dragover');

    const id =
      event.dataTransfer.getData('text/plain');

    const card =
      $(`.body-card[data-id="${id}"]`);

    placeBody(card, zone);
  });

  zone.onclick = () => {
    if (state.selectedBody) {
      placeBody(state.selectedBody, zone);
    }
  };
});

function placeBody(card, zone) {
  if (!card || zone.classList.contains('done')) {
    return;
  }

  if (card.dataset.part === zone.dataset.part) {
    const small = $('small', zone);

    if (small) {
      small.textContent = card.textContent;
    }

    zone.classList.add('done');
    card.remove();

    state.selectedBody = null;
    state.bodyDone += 1;

    $('#bodyFeedback').textContent =
      `${state.bodyDone} of 7 systems calibrated.`;

    if (state.bodyDone === 7) {
      $('#bodyFeedback').textContent =
        'FULL BODY CALIBRATION COMPLETE — Glorb is physically prepared to listen.';

      setMissionComplete(2);

      setTimeout(() => {
        show('missionHub');
      }, 1200);
    }
  } else {
    const partName =
      $('span', zone)?.textContent.toLowerCase() ||
      'selected';

    $('#bodyFeedback').textContent =
      `That instruction does not match the ${partName} system. Please reroute it.`;
  }
}

/* =========================================================
   MISSION 3 — HELP GLORB TRY AGAIN
========================================================= */

const actions = [
  ['Face Pip', true],
  ['Look at Pip, not the sky', true],
  ['Wait until Pip finishes', true],
  ['Ask about the dog', true],
  ['Share the cloud fact immediately', false],
  ['Look for a paper aeroplane', false],
  ['Plan a better story while Pip talks', false],
  ['Walk away before Pip finishes', false]
];

const actionHost = $('#actionChoices');

actions.forEach(([label, correct]) => {
  const button = document.createElement('button');

  button.className = 'choice';
  button.textContent = label;
  button.dataset.correct = String(correct);

  button.onclick = () => {
    button.classList.toggle('selected');

    if (button.classList.contains('selected')) {
      state.selectedActions.add(button);
    } else {
      state.selectedActions.delete(button);
    }

    $('#checkActions').disabled =
      state.selectedActions.size !== 4;

    $('#actionFeedback').textContent =
      `${state.selectedActions.size} of 4 actions selected.`;
  };

  actionHost.appendChild(button);
});

$('#checkActions').onclick = () => {
  const good =
    state.selectedActions.size === 4 &&
    [...state.selectedActions].every(
      button => button.dataset.correct === 'true'
    );

  if (good) {
    [...state.selectedActions].forEach(button => {
      button.classList.add('correct');
    });

    $$('#actionChoices .choice').forEach(button => {
      button.disabled = true;
    });

    $('#actionFeedback').textContent =
      'PLAN APPROVED — Glorb will face Pip, look at her, wait and ask a connected question.';

    $('#replyStage').classList.remove('hidden');
  } else {
    [...state.selectedActions].forEach(button => {
      if (button.dataset.correct === 'false') {
        button.classList.add('incorrect');
      }
    });

    $('#actionFeedback').textContent =
      'One or more actions would make Pip feel ignored. Resetting plan.';

    setTimeout(() => {
      $$('#actionChoices .choice').forEach(button => {
        button.classList.remove(
          'selected',
          'incorrect'
        );
      });

      state.selectedActions.clear();

      $('#checkActions').disabled = true;
      $('#actionFeedback').textContent =
        'Select four actions.';
    }, 1300);
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

const replyHost = $('#replyChoices');

replies.forEach(([label, correct]) => {
  const button = document.createElement('button');

  button.className = 'choice';
  button.textContent = label;
  button.dataset.correct = String(correct);

  button.onclick = () => {
    $$('#replyChoices .choice').forEach(choice => {
      choice.classList.remove('selected');
    });

    button.classList.add('selected');

    state.reply = button;
    $('#checkReply').disabled = false;
  };

  replyHost.appendChild(button);
});

$('#checkReply').onclick = () => {
  if (!state.reply) return;

  if (state.reply.dataset.correct === 'true') {
    state.reply.classList.add('correct');

    $$('#replyChoices .choice').forEach(button => {
      button.disabled = true;
    });

    $('#actionFeedback').textContent =
      'RESPONSE APPROVED — The question connects directly to Pip’s message.';

    setMissionComplete(3);

    setTimeout(() => {
      show('finalScreen');
    }, 900);
  } else {
    state.reply.classList.add('incorrect');

    $('#actionFeedback').textContent =
      'That response changes the subject back to Glorb. Try a connected question.';

    setTimeout(() => {
      state.reply.classList.remove(
        'selected',
        'incorrect'
      );

      state.reply = null;
      $('#checkReply').disabled = true;
    }, 900);
  }
};

/* =========================================================
   RESTART
========================================================= */

$('#restartBtn').onclick = () => {
  location.reload();
};
