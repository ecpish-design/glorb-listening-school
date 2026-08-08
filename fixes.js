
/* =========================================================
   GLORB LISTENING SCHOOL — VISUAL / INTERACTION FIXES V2
   Loaded after the original script.js.
========================================================= */

(() => {
  const q = (selector, parent = document) => parent.querySelector(selector);
  const qa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  const shuffled = items => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  /* ---------------------------------------------------------
     REMOVE THE OLD "Y-CHART" LANGUAGE FROM THE STORY
  --------------------------------------------------------- */
  try {
    const lastIntro = dialogue?.[dialogue.length - 1];
    if (lastIntro) {
      lastIntro.text =
        'Earth Expert, I need your help.\n\n' +
        'Please teach me what active listening looks like, sounds like and feels like.\n\n' +
        'Then we can complete a Sort Activity, calibrate my listening body, and help me try talking to Pip again.';
    }
  } catch (error) {
    console.info('Dialogue wording patch skipped:', error);
  }


  /* =========================================================
     MISSION 1 — SORT ACTIVITY
     Exactly 12 illustrated cards, matching the supplied design.
  ========================================================= */

  const sortCardsV2 = [
    { label: 'Eye Contact', bucket: 'looks', image: '22.webp' },
    { label: 'Face the Speaker', bucket: 'looks', image: '23.webp' },
    { label: 'Nod Your Head', bucket: 'looks', image: '26.webp' },

    { label: 'Ask Questions', bucket: 'sounds', image: '28.webp' },
    { label: 'Repeat Back', bucket: 'sounds', image: '29.webp' },
    { label: 'Tell the Speaker You Understand', bucket: 'sounds', image: '30.webp' },
    { label: 'Wait for the Speaker to Stop Before Speaking', bucket: 'sounds', image: '31.webp' },

    { label: 'Listen Carefully', bucket: 'feels', image: '24.webp' },
    { label: 'Wait Your Turn', bucket: 'feels', image: '27.webp' },
    { label: 'Keep Hands and Feet Still', bucket: 'feels', image: '32.webp' },
    { label: 'Ignore Distractions', bucket: 'feels', image: '33.webp' },
    { label: 'Showing Interest', bucket: 'feels', image: 'showing-interest.webp' }
  ];

  function resetSortState() {
    try {
      state.selectedSort = null;
      state.sortDone = 0;
    } catch (_) {}
  }

  function renderSortV2() {
    const bank = q('#sortBank');
    if (!bank) return;

    resetSortState();
    bank.innerHTML = '';

    qa('.listening-category .drop-items').forEach(zone => {
      zone.innerHTML = '<span class="drop-placeholder">DRAG CARDS HERE</span>';
    });

    shuffled(sortCardsV2).forEach((item, index) => {
      const button = document.createElement('button');
      button.className = 'sort-card visual-sort-card';
      button.type = 'button';
      button.draggable = true;
      button.dataset.bucket = item.bucket;
      button.dataset.sortId = String(index);

      button.innerHTML = `
        <img src="assets/listening/${item.image}" alt="">
        <span>${item.label}</span>
      `;

      button.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/glorb-sort-id', String(index));
      });

      button.addEventListener('click', event => {
        event.stopPropagation();

        try {
          state.selectedSort = state.selectedSort === button ? null : button;
        } catch (_) {}

        qa('.visual-sort-card').forEach(card => {
          card.classList.toggle('selected', card === button && button === state.selectedSort);
        });
      });

      bank.appendChild(button);
    });

    const feedback = q('#sortFeedback');
    if (feedback) {
      feedback.textContent = 'Sort each listening behaviour into the correct category.';
    }
  }

  function placeSortV2(card, category) {
    if (!card || !category) return;

    if (card.dataset.bucket !== category.dataset.bucket) {
      const feedback = q('#sortFeedback');
      if (feedback) {
        feedback.textContent = 'That option belongs in a different category. Try again.';
      }
      card.classList.add('selected');
      window.setTimeout(() => card.classList.remove('selected'), 450);
      return;
    }

    const target = q('.drop-items', category);
    if (!target) return;

    const placeholder = q('.drop-placeholder', target);
    if (placeholder) placeholder.remove();

    const placed = document.createElement('div');
    placed.className = 'placed-card placed-visual-card';
    placed.innerHTML = card.innerHTML;
    target.appendChild(placed);

    card.remove();

    try {
      state.selectedSort = null;
      state.sortDone += 1;
    } catch (_) {}

    const completed = typeof state !== 'undefined' ? state.sortDone : 0;
    const feedback = q('#sortFeedback');

    if (feedback) {
      feedback.textContent = `${completed} of ${sortCardsV2.length} cards sorted.`;
    }

    if (completed === sortCardsV2.length) {
      if (feedback) {
        feedback.textContent =
          'SORT ACTIVITY COMPLETE — You helped Glorb understand what listening looks like, sounds like and feels like.';
      }

      try {
        setMissionComplete(1);
        window.setTimeout(() => show('missionHub'), 1400);
      } catch (_) {}
    }
  }

  qa('.listening-category').forEach(category => {
    category.addEventListener('dragover', event => {
      event.preventDefault();
      category.classList.add('dragover');
    });

    category.addEventListener('dragleave', () => {
      category.classList.remove('dragover');
    });

    category.addEventListener('drop', event => {
      event.preventDefault();
      category.classList.remove('dragover');

      const id = event.dataTransfer.getData('text/glorb-sort-id');
      const card = q(`.visual-sort-card[data-sort-id="${id}"]`);
      placeSortV2(card, category);
    });

    category.addEventListener('click', event => {
      if (event.target.closest('.placed-visual-card')) return;

      try {
        if (state.selectedSort) {
          placeSortV2(state.selectedSort, category);
        }
      } catch (_) {}
    });
  });

  renderSortV2();


  /* =========================================================
     MISSION 2 — BODY CALIBRATION
     Text-only choices + worksheet diagram as the visual map.
  ========================================================= */

  const bodyCardsV2 = [
    ['Face the speaker and nod to show you understand.', 'head'],
    ['Look towards the speaker.', 'eyes'],
    ['Listen carefully to what the speaker is saying.', 'ears'],
    ['Stay quiet while they are speaking. Ask questions or respond when it is your turn.', 'mouth'],
    ['Face the speaker and stay focused.', 'body'],
    ['Keep hands calm and still.', 'hands'],
    ['Keep feet calm and stay in one place.', 'feet']
  ];

  function replaceBodyZonesToRemoveOldListeners() {
    qa('.body-zone').forEach(oldZone => {
      const replacement = oldZone.cloneNode(true);
      replacement.classList.remove('done', 'dragover');
      const small = q('small', replacement);
      if (small) small.textContent = '';
      oldZone.replaceWith(replacement);
    });
  }

  function renderBodyV2() {
    const host = q('#bodyCards');
    if (!host) return;

    try {
      state.selectedBody = null;
      state.bodyDone = 0;
    } catch (_) {}

    host.innerHTML = '';

    shuffled(
      bodyCardsV2.map((item, index) => ({ item, index }))
    ).forEach(({ item, index }) => {
      const [label, part] = item;

      const button = document.createElement('button');
      button.className = 'body-card body-text-card';
      button.type = 'button';
      button.draggable = true;
      button.textContent = label;
      button.dataset.part = part;
      button.dataset.bodyId = String(index);

      button.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/glorb-body-id', String(index));
      });

      button.addEventListener('click', () => {
        try {
          state.selectedBody = state.selectedBody === button ? null : button;
        } catch (_) {}

        qa('.body-text-card').forEach(card => {
          card.classList.toggle('selected', card === state.selectedBody);
        });
      });

      host.appendChild(button);
    });

    const feedback = q('#bodyFeedback');
    if (feedback) {
      feedback.textContent = 'Seven body parts need listening instructions.';
    }
  }

  function placeBodyV2(card, zone) {
    if (!card || !zone || zone.classList.contains('done')) return;

    if (card.dataset.part !== zone.dataset.part) {
      const feedback = q('#bodyFeedback');
      const part = q('span', zone)?.textContent?.toLowerCase() || 'body part';

      if (feedback) {
        feedback.textContent =
          `That instruction does not match Glorb's ${part}. Try another body part.`;
      }
      return;
    }

    const small = q('small', zone);
    if (small) small.textContent = card.textContent;

    zone.classList.add('done');
    card.remove();

    try {
      state.selectedBody = null;
      state.bodyDone += 1;
    } catch (_) {}

    const completed = typeof state !== 'undefined' ? state.bodyDone : 0;
    const feedback = q('#bodyFeedback');

    if (feedback) {
      feedback.textContent = `${completed} of 7 body parts calibrated.`;
    }

    if (completed === 7) {
      if (feedback) {
        feedback.textContent =
          'BODY CALIBRATION COMPLETE — Glorb now knows how to use his body to show he is listening.';
      }

      try {
        setMissionComplete(2);
        window.setTimeout(() => show('missionHub'), 1400);
      } catch (_) {}
    }
  }

  replaceBodyZonesToRemoveOldListeners();
  renderBodyV2();

  qa('.body-zone').forEach(zone => {
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

      const id = event.dataTransfer.getData('text/glorb-body-id');
      const card = q(`.body-text-card[data-body-id="${id}"]`);
      placeBodyV2(card, zone);
    });

    zone.addEventListener('click', () => {
      try {
        if (state.selectedBody) {
          placeBodyV2(state.selectedBody, zone);
        }
      } catch (_) {}
    });
  });


  /* =========================================================
     MISSION 3 — MIX THE CORRECT / INCORRECT OPTIONS
  ========================================================= */

  const actionHost = q('#actionChoices');

  if (actionHost) {
    shuffled(qa('.choice', actionHost)).forEach(choice => {
      actionHost.appendChild(choice);
    });
  }

})();
