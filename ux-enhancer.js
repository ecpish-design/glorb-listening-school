(() => {
  const app = document.getElementById('app');
  const pageShell = document.getElementById('pageShell');
  const pageTask = document.getElementById('pageTask');
  const pageTaskStep = document.getElementById('pageTaskStep');
  const pageTaskEyebrow = document.getElementById('pageTaskEyebrow');
  const pageTaskTitle = document.getElementById('pageTaskTitle');
  const pageTaskText = document.getElementById('pageTaskText');
  const nextBtn = document.getElementById('nextBtn');
  const tapNext = document.getElementById('tapNext');
  const pageCounter = document.getElementById('pageCounter');
  const pageKicker = document.getElementById('pageKicker');
  const toast = document.getElementById('toast');
  const transcriptTitle = document.getElementById('transcriptTitle');
  const studentChipName = document.getElementById('studentChipName');
  const activityStage = document.getElementById('activityStage');

  let panel;
  let rafPending = false;
  let helperTimer = null;
  let toastTimer = null;

  function firstName() {
    return (studentChipName?.textContent || 'Researcher').trim().split(/\s+/)[0] || 'Researcher';
  }

  function ensurePanel() {
    if (panel && document.body.contains(panel)) return panel;
    panel = document.createElement('section');
    panel.id = 'uxMissionPanel';
    panel.className = 'page-mission-panel';
    panel.hidden = true;
    pageShell?.insertAdjacentElement('afterend', panel);
    return panel;
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }

  function pageInfo() {
    const kicker = (pageKicker?.textContent || '').trim();
    const counter = (pageCounter?.textContent || '').trim();
    const title = (transcriptTitle?.textContent || '').trim();
    const storyMatch = counter.match(/STORY\s+(\d+)/i);
    const storyNum = storyMatch ? Number(storyMatch[1]) : null;
    let mode = 'other';
    if (kicker.includes('CHART READING // CRASH REPORT') || title === 'TIME LINE OF EVENTS') mode = 'incidents';
    else if (kicker.includes('GLORB // HUMAN SIGNAL CATEGORIES') || title === 'EXPLORE THE FOUR SIGNALS') mode = 'signals';
    else if ((counter || '').includes('SORT')) mode = 'sort';
    return { kicker, counter, title, storyNum, mode };
  }

  function chapterLabel(storyNum) {
    if (!storyNum) return '';
    if (storyNum >= 1 && storyNum <= 4) return 'CHAPTER 1 OF 4 // THE CRASH';
    if (storyNum === 5) return 'CHAPTER 2 OF 4 // WHAT WENT WRONG?';
    if (storyNum === 6 || storyNum === 7) return 'CHAPTER 3 OF 4 // ON EARTH';
    if (storyNum === 8 || storyNum === 9) return 'CHAPTER 4 OF 4 // HUMAN SIGNALS';
    return '';
  }

  function signalCardMeta(mode) {
    if (mode === 'incidents') {
      return {
        eyebrow: `${firstName().toUpperCase()} // INVESTIGATION`,
        step: '2',
        title: 'OPEN ALL 4 INCIDENT LOGS',
        text: 'Use the big buttons below the artwork. Open Low, Steady, Rising and Overload, compare them, then continue.',
        introTitle: 'INVESTIGATE ALL 4 INCIDENT LOGS',
        introText: 'Use these large buttons instead of clicking over the artwork. Open each log, compare the examples, then continue.',
        cards: [
          { key: 'low', label: 'LOW SIGNAL', desc: 'See the low-signal example from Glorb’s log.' },
          { key: 'steady', label: 'STEADY SIGNAL', desc: 'See the calm, working-well example.' },
          { key: 'rising', label: 'RISING SIGNAL', desc: 'See the early warning example.' },
          { key: 'overload', label: 'SIGNAL OVERLOAD', desc: 'See what happens when Glorb keeps pushing.' }
        ]
      };
    }
    if (mode === 'signals') {
      return {
        eyebrow: `${firstName().toUpperCase()} // FIELD GUIDE`,
        step: '4',
        title: 'EXPLORE THE FOUR SIGNALS',
        text: 'Use the four large signal cards below. Open each one to see what it looks like, what it can feel like, and what can help.',
        introTitle: 'EXPLORE THE FOUR SIGNALS',
        introText: 'Open each signal card to learn what it can look like, what it can feel like, and what can help.',
        cards: [
          { key: 'low', label: 'LOW SIGNAL', desc: 'Low energy, low attention, slow or down.' },
          { key: 'steady', label: 'STEADY SIGNAL', desc: 'Calm, focused, ready and okay.' },
          { key: 'rising', label: 'RISING SIGNAL', desc: 'Building up, more energy, more tension.' },
          { key: 'overload', label: 'SIGNAL OVERLOAD', desc: 'Too much right now, hard to think clearly.' }
        ]
      };
    }
    return null;
  }

  function hotspotMap() {
    const map = {};
    document.querySelectorAll('.hotspot-layer .hotspot').forEach(btn => {
      const label = (btn.getAttribute('aria-label') || '').toLowerCase();
      if (label.includes('low')) map.low = btn;
      else if (label.includes('steady')) map.steady = btn;
      else if (label.includes('rising')) map.rising = btn;
      else if (label.includes('overload')) map.overload = btn;
    });
    return map;
  }

  function viewed(btn) {
    return !!btn && btn.classList.contains('is-viewed');
  }

  function progressCount(hotspots) {
    return Object.values(hotspots).filter(viewed).length;
  }

  function missionComplete(mode) {
    if (!['incidents', 'signals'].includes(mode)) return true;
    const hs = hotspotMap();
    return ['low', 'steady', 'rising', 'overload'].every(key => viewed(hs[key]));
  }

  function renderMissionPanel() {
    const info = pageInfo();
    const root = ensurePanel();
    if (!root) return;

    if (!['incidents', 'signals'].includes(info.mode)) {
      root.hidden = true;
      root.innerHTML = '';
      document.documentElement.classList.remove('ux-hide-hotspots');
      return;
    }

    const meta = signalCardMeta(info.mode);
    const hs = hotspotMap();
    if (!meta || Object.keys(hs).length < 4) {
      root.hidden = true;
      root.innerHTML = '';
      return;
    }

    document.documentElement.classList.add('ux-hide-hotspots');
    root.hidden = false;
    root.innerHTML = `
      <div class="mission-panel mission-panel--${info.mode}">
        <div class="mission-panel__intro">
          <span class="mission-panel__eyebrow">YOUR JOB ON THIS PAGE</span>
          <h3>${meta.introTitle}</h3>
          <p>${meta.introText}</p>
        </div>
        <div class="mission-card-grid">
          ${meta.cards.map(card => {
            const isDone = viewed(hs[card.key]);
            return `
            <article class="mission-card mission-card--${card.key}${isDone ? ' is-done' : ''}">
              <span class="mission-card__status">${isDone ? (info.mode === 'incidents' ? 'OPENED ✓' : 'EXPLORED ✓') : 'OPEN THIS ONE'}</span>
              <h4>${card.label}</h4>
              <p>${card.desc}</p>
              <button type="button" class="mission-card__button" data-open-signal="${card.key}">${isDone ? 'OPEN AGAIN →' : (info.mode === 'incidents' ? 'OPEN LOG →' : 'EXPLORE →')}</button>
            </article>`;
          }).join('')}
        </div>
      </div>`;

    root.querySelectorAll('[data-open-signal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-open-signal');
        hs[key]?.click();
        setTimeout(scheduleRefresh, 100);
      });
    });
  }

  function refreshMetaAndTask() {
    const info = pageInfo();
    if (info.storyNum) {
      const label = chapterLabel(info.storyNum);
      if (label) pageCounter.textContent = label;
    }

    if (pageTask && !pageTask.hidden) {
      if (info.mode === 'incidents' || info.mode === 'signals') {
        const meta = signalCardMeta(info.mode);
        if (meta) {
          pageTaskStep.textContent = meta.step;
          pageTaskEyebrow.textContent = meta.eyebrow;
          pageTaskTitle.textContent = meta.title;
          pageTaskText.textContent = meta.text;
        }
      } else if (info.storyNum) {
        pageTaskStep.textContent = '1';
        pageTaskEyebrow.textContent = `${firstName().toUpperCase()} // ${chapterLabel(info.storyNum).split('//')[1]?.trim() || 'STORY'}`;
        pageTaskTitle.textContent = info.storyNum <= 4 ? 'READ THIS PART OF THE STORY' : 'SEE WHAT HAPPENS NEXT';
        pageTaskText.textContent = 'Read the page, or press Read Aloud. Then choose Next to keep moving through the mission.';
      } else if (info.mode === 'sort') {
        pageTask.hidden = true;
      }
    }
  }

  function scheduleRefresh() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      refreshMetaAndTask();
      renderMissionPanel();
    });
  }

  function blockAdvanceIfNeeded(event) {
    const info = pageInfo();
    if (!['incidents', 'signals'].includes(info.mode)) return;
    if (missionComplete(info.mode)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showToast(info.mode === 'incidents' ? 'OPEN ALL 4 INCIDENT LOGS BEFORE CONTINUING.' : 'EXPLORE ALL 4 SIGNALS BEFORE CONTINUING.');
    ensurePanel()?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showHelper(message) {
    const helper = document.getElementById('glorbHelper');
    const text = document.getElementById('glorbHelperText');
    if (!helper || !text) return;
    clearTimeout(helperTimer);
    text.textContent = message;
    helper.hidden = false;
    helper.classList.add('is-visible');
    helperTimer = setTimeout(() => {
      helper.classList.remove('is-visible');
      setTimeout(() => { helper.hidden = true; }, 180);
    }, 8000);
  }

  nextBtn?.addEventListener('click', blockAdvanceIfNeeded, true);
  tapNext?.addEventListener('click', blockAdvanceIfNeeded, true);
  document.addEventListener('keydown', event => {
    if (event.key !== 'ArrowRight') return;
    const info = pageInfo();
    if (!['incidents', 'signals'].includes(info.mode) || missionComplete(info.mode)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showToast(info.mode === 'incidents' ? 'OPEN ALL 4 INCIDENT LOGS BEFORE CONTINUING.' : 'EXPLORE ALL 4 SIGNALS BEFORE CONTINUING.');
  }, true);

  document.addEventListener('click', event => {
    const helpBtn = event.target.closest('[data-ask-glorb]');
    if (helpBtn) {
      const selected = activityStage?.querySelector('.category-sort [data-item].is-selected');
      if (!selected) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showHelper(`${firstName()}, tap one clue first so I can give you a real hint for that clue. Easy starters are the dashboard symbols: ✓, flame, !!! and the down arrow.`);
      }
      return;
    }

    if (event.target.closest('.page-task__button')) {
      setTimeout(scheduleRefresh, 80);
    }
  }, true);

  const observer = new MutationObserver(scheduleRefresh);
  observer.observe(app || document.body, { childList: true, subtree: true, characterData: true });
  scheduleRefresh();
})();
