(() => {
  const A = 'assests/';

  const mainPages = [
    {
      type: 'welcome',
      kicker: 'MISSION BRIEF // EARTH SIGNALS',
      title: 'GLORB’S EARTH SIGNALS MISSION',
      transcript: `Welcome to Glorb’s Earth Signals Mission. Enter your name to begin. During the mission you will follow Glorb’s story, investigate Low, Steady, Rising and Overload signals, and sort visual clues into the signal they match.

Learning intentions. I can identify the four signal states. I can use emotion, body and behaviour clues to decide what signal someone may be showing. I can notice when a signal is changing. I can choose a helpful response that matches the signal.`
    },
    {
      source: 'story-01-ship-going-down.svg',
      kicker: 'SOMEWHERE IN ZORBAX',
      title: 'SHIP IS GOING DOWN',
      alt: 'Glorb in his spaceship as the dashboard alarms, followed by his ship crashing.',
      transcript: `Somewhere in Zorbax.

Ship is going down. I repeat, ship is going down. According to my notes, all elements are pointing to total signal meltdown... my ears, my dashboard and my... ship.`
    },
    {
      source: 'story-02-flight-recorder.svg',
      kicker: 'FLIGHT RECORDER // ENTRY 2',
      title: 'THE CRASH',
      alt: 'A taped photograph of Glorb’s wrecked ship with a handwritten research log underneath.',
      transcript: `The signal from my ship didn't jump straight to danger. It climbed slowly, for six minutes, while I kept pushing the ship harder and harder.

My dashboard recorded every second of it. It alerted me. My body was alerting me too. I just wasn't listening. I wanted to see how fast it could go chasing those Gleborna aliens. I don't like them at all.

This was totally preventable. And it's all their fault. Ugh. Now I have to fix this.

To do: Fill out incident report form and mail it to Amy in A.R., Alien Resources. Review charted findings on previous data. Travel to Earth.`
    },
    {
      source: 'story-03-dear-amy.svg',
      kicker: 'ALIEN RESOURCES // OUTGOING',
      title: 'DEAR AMY',
      alt: 'Glorb’s handwritten letter to Alien Resources clipped over his incident report.',
      transcript: `Department of A.R., Alien Resources, Zorbax and Co.

Dear Amy, please find my incident report from today's “incident” attached. I have booked a small holiday home on Earth for some R plus R — Research and Reporting. I will be in touch with my findings. Please forward all correspondence there.

My ship is currently unavailable. Mostly because it exploded.

Thanks, Glorb.

P.S. I am aware this is my third ship. P.P.S. Sorry.`
    },
    {
      source: 'story-04-incident-report.svg',
      kicker: 'ZORBAX-9 RESEARCH DIVISION',
      title: 'INCIDENT REPORT',
      alt: 'Glorb’s formal incident report showing signal overload, his angry ears, and the crashed ship.',
      transcript: `Zorbax-9 Research Division. Incident report form. Subject: self monitored signal overload. Location: in transit, Zorbax-9 orbital lane.

One. Signal identification. Name: signal overload. This is probably not good, considering the outcome. Three red exclamation marks: critical marking, highest importance.

Two. Physical response. Main physical response: angry ear. Pinned flat back against head. Reactive ear. Field note: ears pressed flat against the head. One of the clearest warning signs across the animal world. It usually means the animal feels overwhelmed, scared, or ready to react. Give space.

Three. Observed outcome: not good.

Analyst summary: total signal meltdown. Preventable. Failure to react to rising signal. Systems overwhelmed. Monitor early warning signs.`
    },
    {
      source: 'story-05-timeline.svg',
      kicker: 'CHART READING // CRASH REPORT',
      title: 'TIME LINE OF EVENTS',
      alt: 'A coloured timeline moving from low signal to steady signal, rising signal and signal overload.',
      interactive: 'incidents',
      transcript: `Time line of events. Chart reading extracted from crash report.

Low signal mode: woke up tired, couldn't start ship, just sank. Had breakfast, rested, played with Frog, the flying space dog.

Steady signal: started flying, feeling a bit better, started listening to radio, great tunes, dancing a little while driving, having a good time.

Rising signal: saw those Gleborna aliens on the terrace. They made fun of my ears. They wouldn't stop even when I asked. Started chasing them. Saw rising signal flash on my dash. Ignored it.

Signal overload: they kept making fun of my ears. Chased harder. Ignored all ship signals. Push, push, push.

Open the four similar incident logs to compare Glorb’s Low, Steady, Rising and Overload examples.`
    },
    {
      source: 'story-06-earth-day-23.svg',
      kicker: 'A FEW WEEKS LATER // ON EARTH',
      title: 'RESEARCH LOG // DAY 23',
      alt: 'Glorb’s Earth research log showing him dancing in Tom’s face at lunch while Tom becomes annoyed.',
      transcript: `A few weeks later, on Earth. School playground: lunch.

Glorb: research log, entry 14. Day 23 on Earth.

I have not exploded anything. This feels like the correct amount of progress.

However, today at lunch I went to sit next to my friend Tom. I started dancing in his face and shouting, “Let's have a party, Tommy boy, the world is ours and the day is young!” over and over because I saw someone on TV do it and the audience laughed.

It did not make Tom laugh. Instead, it had an unexpected outcome. Please see my attached drawings of the events that occurred.

Please turn page to see the outcome.`
    },
    {
      source: 'story-07-outcome.svg',
      kicker: 'SCHOOL PLAYGROUND // LUNCH',
      title: 'OUTCOME',
      alt: 'Tom pushes Glorb away after becoming increasingly upset.',
      transcript: `Outcome.

Tommy did apologise for pushing me. However, someone also pointed out that I'd ignored his signals: the ones that showed he was getting more and more upset, long before it got to pushing.

That got me thinking. My ship has signals too. Maybe humans just wear theirs on the outside instead of on a dashboard. I think I need some help sorting them into the right categories.`
    },
    {
      source: 'story-08-signal-categories.svg',
      kicker: 'GLORB // HUMAN SIGNAL CATEGORIES',
      title: 'EXPLORE THE FOUR SIGNALS',
      alt: 'Glorb’s four signal categories: low signal, steady signal, rising signal and signal overload.',
      interactive: 'signals',
      transcript: `I categorised human signals like this. Open each category to find out more. Low signal. Steady signal. Rising signal. Signal overload.`
    },
    {
      source: 'story-09-summary.svg',
      kicker: 'FIELD GUIDE // SUMMARY',
      title: 'FOUR SIGNALS',
      alt: 'A four-part summary showing signal overload, rising signal, steady signal and low signal with emotion examples.',
      transcript: `Glorb's field guide summary. Signal overload. Rising signal. Steady signal. Low signal. Notice the signal early, then choose the kind of help that fits.`
    },
    {
      type: 'sortboard',
      kicker: 'SORT MISSION // FOUR SIGNALS',
      title: 'SORT THE SIGNAL CLUES',
      transcript: `Glorb has collected the signal evidence, but it is mixed up. Sort each visual clue into Low, Steady, Rising or Overload. You can drag a clue, or tap a clue and then tap a signal square. Use Help Me, Glorb for a hint and Zoom for a closer look. When all 20 clues are placed, check your sort.`
    },
    {
      type: 'results',
      kicker: 'ZORBAX-9 // GENERATED REPORTS',
      title: 'GLORB’S COMPLETED SIGNAL REPORTS',
      transcript: `Sort verified. Glorb has generated the completed field reports for Steady, Rising, Overload and Low signals. Open any report to see how the clues fit together.`
    },
    {
      type: 'certificate',
      kicker: 'MISSION COMPLETE // CERTIFICATE',
      title: 'EARTH SIGNALS MISSION COMPLETE',
      final: true,
      transcript: `Mission complete. Your certificate confirms that you investigated the four signals, used visual clues to identify them, noticed how signals can change, and learned that different signals need different kinds of support.`
    }
  ];

  const incidentDetails = {
    low: {
      eyebrow: 'SIMILAR INCIDENT // LOW SIGNAL',
      title: 'LOW SIGNAL LOG',
      equation: 'incident-low-equation.webp',
      note: 'incident-low-note.webp',
      report: 'incident-low-report.webp',
      caption: 'Glorb notices low energy, low attention and a drooping flight pattern.',
      transcript: `Okay, so I don't know about any of this or why I have to write what happened. Basically, I'd been flying for ages, hadn't really talked to anyone, wasn't really paying attention to where I even was. My ears just started drooping and, I don't know, I guess I stopped noticing stuff around me. I wasn't mad. I was just... I don't know... which way? I was just really low. I think I missed a turn somewhere, but I don't even care enough to go check.

Incident report: self monitored low signal. Energy is running low, a bit slow, just down. Easy to miss things while it's happening. Main physical response: sad ear. Observed outcome: starts slowly drooping, not much energy to move in any other direction other than down, down, down.`
    },
    steady: {
      eyebrow: 'SIMILAR INCIDENT // STEADY SIGNAL',
      title: 'STEADY SIGNAL LOG',
      equation: 'incident-steady-equation.webp',
      note: 'incident-steady-note.webp',
      report: 'incident-steady-report.webp',
      caption: 'A good day: nothing needs fixing, and Glorb can keep doing what is working.',
      transcript: `Okay, so honestly nothing really happened. I was just cruising down All-Gravity Street, had a really good breakfast, ears just chilling forward the whole time, listening to my rock and roll tunes.

I didn't need to fix anything, didn't need a break, didn't need anyone to leave me alone. It was just a good day. A perfect day, really. I was in a great mood.

I thought it was worth writing down because I usually write in here after an “incident” happens, and I didn't want you to think I am always having negative incidents. To be honest, I don't really have a story for this one. That's the whole point of it. Great day, ten out of ten.

Incident report: self monitored steady signal. Everything is working the way it's supposed to. Calm. Focused. Ready. Observed outcome: perfection.`
    },
    rising: {
      eyebrow: 'SIMILAR INCIDENT // RISING SIGNAL',
      title: 'RISING SIGNAL LOG',
      equation: 'incident-rising-equation.webp',
      note: 'incident-rising-note.webp',
      report: 'incident-rising-report.webp',
      caption: 'Glorb notices the warning early, changes course and avoids overload.',
      transcript: `Okay, so what happened is: I was just flying past Splartzee Terrace, minding my own business, when I saw those Gleborna aliens. They are always around just sitting there being smug, looking at my ears like that.

I hadn't even done anything yet. My ears just started twitching and I got that jumpy, annoyed feeling. That's around when the fire light came on, actually. I thought I'd better check it out and not ignore it, so I turned around and drove away. Around the corner I pulled over, put out the fire and my ship seemed okay. I went home, had a cup of tea, played with my Frog, floating space dog. Surprisingly, all ended up okay.

Incident report: self monitored rising signal. This means something is off. Probably time to stop and check it out. Main physical response: uneasy ear. Observed outcome: still flying, but a few issues. Fire being one.`
    },
    overload: {
      eyebrow: 'SIMILAR INCIDENT // SIGNAL OVERLOAD',
      title: 'OVERLOAD LOG',
      equation: 'incident-overload-equation.webp',
      note: 'incident-overload-note.webp',
      report: 'incident-overload-report.webp',
      caption: 'Glorb ignores the rising signal, keeps pushing, and ends in signal overload.',
      transcript: `Okay, so what happened is I saw those Gleborna aliens and they were making fun of my ears again. They are not nice.

So I wanted to teach them a lesson and, well, I started chasing them. But they kept getting away and teasing me even more. I don't really know what happened. I sort of blacked out. I know I saw the rising signal and ignored it. I was just trying to catch them, so I pushed my ship to go harder and then all of a sudden it was signal overload.

Incident report: self monitored signal overload. Main physical response: angry ear. Observed outcome: not good.`
    }
  };

  const signalDetails = {
    low: {
      eyebrow: 'HUMAN SIGNAL // LOW',
      title: 'LOW SIGNAL',
      page: 'signal-guide-low.svg',
      caption: 'Low energy, low preparedness, low awareness and low attention.',
      transcript: `Low signal is seen and felt as low energy, low preparedness, low awareness and low attention. It can look like sad, embarrassed, lonely, bored, tired or unsure.\n\nWhat can help: rest for a few minutes. Get a drink of water or a snack. Do some gentle movement, like a stretch or a short walk. Talk to someone about it. Change what you're doing for a bit. Ask for some quiet space.`
    },
    steady: {
      eyebrow: 'HUMAN SIGNAL // STEADY',
      title: 'STEADY SIGNAL',
      page: 'signal-guide-steady.svg',
      caption: 'Steady energy, preparedness, awareness and attention.',
      transcript: `Steady signal is seen and felt as steady energy, steady preparedness, steady awareness and steady attention. It can look like calm, focused, proud and content.\n\nWhat can help: keep doing what's working. Notice how good this feels. Take on a challenge, or help someone else with theirs. Set a goal while your mind is clear. Enjoy it. There's nothing to fix.`
    },
    rising: {
      eyebrow: 'HUMAN SIGNAL // RISING',
      title: 'RISING SIGNAL',
      page: 'signal-guide-rising.svg',
      caption: 'Rising energy, tension, reactivity and urgency.',
      transcript: `Rising signal is seen and felt as rising energy, rising tension, rising reactivity and rising urgency. It can look like upset, disrespected, excited, frustrated or nervous.\n\nWhat can help: take a breath, or count to ten. Step away for a moment. Move your body: shake it out, stretch, squeeze something. Say how you're feeling out loud. Ask for a break before it gets bigger. Use a fidget tool.`
    },
    overload: {
      eyebrow: 'HUMAN SIGNAL // OVERLOAD',
      title: 'SIGNAL OVERLOAD',
      page: 'signal-guide-overload.svg',
      caption: 'Out of control, racing heart, can’t think clearly, ready to react.',
      transcript: `Signal overload is seen and felt as out of control, racing heart, can't think clearly and ready to react. It can look like furious, panicked, terrified or overwhelmed.\n\nWhat can help: get to a safe, quiet space. Ask a trusted adult for help. Take slow, deep breaths. Try a big release: push against a wall or squeeze something tight. It's okay not to talk yet; that comes after. Give it time before deciding anything.`
    }
  };

  const incidentHotspots = [
    { id: 'low', label: 'Open low signal incident', x: 3.2, y: 77.1, w: 23.8, h: 7.4 },
    { id: 'steady', label: 'Open steady signal incident', x: 31.0, y: 66.0, w: 23.8, h: 7.2 },
    { id: 'rising', label: 'Open rising signal incident', x: 55.2, y: 64.4, w: 23.2, h: 7.2 },
    { id: 'overload', label: 'Open signal overload incident', x: 77.0, y: 62.1, w: 21.7, h: 7.2 }
  ];

  const signalHotspots = [
    { id: 'low', label: 'Open low signal guide', x: 2.5, y: 61.8, w: 26.0, h: 27.7 },
    { id: 'steady', label: 'Open steady signal guide', x: 29.1, y: 52.0, w: 25.3, h: 26.6 },
    { id: 'rising', label: 'Open rising signal guide', x: 53.2, y: 49.3, w: 24.8, h: 27.6 },
    { id: 'overload', label: 'Open signal overload guide', x: 76.3, y: 43.9, w: 22.3, h: 27.1 }
  ];

  const signalConfig = {
    low: {
      label: 'LOW SIGNAL',
      short: 'LOW',
      answer: 'sort/teacher-answer-low.png',
      accent: 'blue'
    },
    steady: {
      label: 'STEADY SIGNAL',
      short: 'STEADY',
      answer: 'sort/teacher-answer-steady.png',
      accent: 'green'
    },
    rising: {
      label: 'RISING SIGNAL',
      short: 'RISING',
      answer: 'sort/teacher-answer-rising.png',
      accent: 'orange'
    },
    overload: {
      label: 'SIGNAL OVERLOAD',
      short: 'OVERLOAD',
      answer: 'sort/teacher-answer-overload.png',
      accent: 'red'
    }
  };

  const evidenceTypes = [
    { id: 'wave', label: 'SIGNAL LINE' },
    { id: 'emotions', label: 'EMOTION CLUES' },
    { id: 'equation', label: 'GLORB + DASHBOARD CLUE' },
    { id: 'symbol', label: 'DASHBOARD SYMBOL' },
    { id: 'traits', label: 'SIGNAL DESCRIPTION' }
  ];

  const signals = ['steady', 'rising', 'overload', 'low'];

  // Five clear visual clues per signal. The longer "Looks / Feels Like" and
  // "What Can Help" cards are intentionally kept out of the student sort to
  // reduce reading load. They still appear in the completed reports.
  const evidenceDeck = [
    'wave-steady', 'emotions-rising', 'symbol-overload', 'traits-low',
    'equation-steady', 'symbol-low', 'wave-rising', 'emotions-overload',
    'traits-steady', 'equation-low', 'symbol-rising', 'wave-low',
    'emotions-steady', 'traits-overload', 'equation-rising',
    'symbol-steady', 'wave-overload', 'emotions-low', 'traits-rising',
    'equation-overload'
  ];

  const itemWidths = {
    wave: 47,
    emotions: 66,
    equation: 58,
    symbol: 22,
    traits: 43
  };

  const itemYHalf = {
    wave: 8,
    emotions: 12,
    equation: 10,
    symbol: 11,
    traits: 15
  };

  const defaultPlacement = {
    equation: { x: 30, y: 17 },
    symbol: { x: 82, y: 17 },
    wave: { x: 28, y: 42 },
    emotions: { x: 64, y: 48 },
    traits: { x: 28, y: 76 }
  };

  const signalHelp = {
    steady: {
      title: 'STEADY SIGNAL',
      text: 'Calm, focused and ready. Look for smooth, settled clues and things working as they should.'
    },
    rising: {
      title: 'RISING SIGNAL',
      text: 'Something is starting to build. Look for clues that show more energy, tension or urgency.'
    },
    overload: {
      title: 'SIGNAL OVERLOAD',
      text: 'Everything feels too much and it can be hard to think clearly. Look for the strongest, most intense clues.'
    },
    low: {
      title: 'LOW SIGNAL',
      text: 'Energy has dropped. Look for clues that feel tired, slow, quiet or down.'
    }
  };

  const typeHints = {
    wave: 'Look at the shape of the line. Is it smooth, building, chaotic, or dropping?',
    emotions: 'Look at the faces. What kind of energy do these feelings have?',
    equation: 'Look at Glorb, the dashboard and what happens to the ship. What signal does that story match?',
    symbol: 'This is one of Glorb’s dashboard symbols. Think about what the symbol is warning him about.',
    traits: 'Read the short signal description. Which of the four signal names sounds most like it?'
  };


  const learningIntentions = [
    'Identify and distinguish Low, Steady, Rising and Overload signals.',
    'Use emotion, body and behaviour clues to decide which signal someone may be showing.',
    'Notice when a signal is changing and explain why responding early can help.',
    'Choose a helpful response or strategy that matches the signal.'
  ];

  const STUDENT_KEY = 'glorb-earth-signals-student-v1';
  let studentName = loadStudentName();

  function loadStudentName() {
    try { return String(localStorage.getItem(STUDENT_KEY) || '').trim().slice(0, 60); }
    catch (_) { return ''; }
  }

  function saveStudentName(name) {
    studentName = String(name || '').replace(/\s+/g, ' ').trim().slice(0, 60);
    try {
      if (studentName) localStorage.setItem(STUDENT_KEY, studentName);
      else localStorage.removeItem(STUDENT_KEY);
    } catch (_) {}
    updateStudentChip();
    return studentName;
  }

  function displayName() {
    return studentName || 'Researcher';
  }

  function firstName() {
    return displayName().split(/\s+/)[0] || 'Researcher';
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function pageIndexOfType(type) {
    return mainPages.findIndex(page => page.type === type);
  }

  function summaryPageIndex() {
    return mainPages.findIndex(page => page.source === 'story-09-summary.svg');
  }

  const STORAGE_KEY = 'glorb-signal-category-sort-v4';
  let sortState = loadSortState();
  let selectedItem = null;
  let lastCheckWrong = [];
  let largeClues = false;
  let helperTimer = null;

  const VIEWED_KEY = 'glorb-viewed-interactions-v2';
  let viewedInteractions = loadViewedInteractions();

  let pageIndex = 0;
  let modalData = null;
  let speechActive = false;
  let touchStartX = null;
  let toastTimer = null;

  const studentChip = document.getElementById('studentChip');
  const studentChipName = document.getElementById('studentChipName');

  const pageStage = document.getElementById('pageStage');
  const comicPage = document.getElementById('comicPage');
  const activityStage = document.getElementById('activityStage');
  const pageKicker = document.getElementById('pageKicker');
  const pageCounter = document.getElementById('pageCounter');
  const hotspotLayer = document.getElementById('hotspotLayer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const nextLabel = document.getElementById('nextLabel');
  const tapPrev = document.getElementById('tapPrev');
  const tapNext = document.getElementById('tapNext');
  const pagerDots = document.getElementById('pagerDots');
  const interactionNote = document.getElementById('interactionNote');
  const interactionNoteText = document.getElementById('interactionNoteText');
  const pageTask = document.getElementById('pageTask');
  const pageTaskStep = document.getElementById('pageTaskStep');
  const pageTaskEyebrow = document.getElementById('pageTaskEyebrow');
  const pageTaskTitle = document.getElementById('pageTaskTitle');
  const pageTaskText = document.getElementById('pageTaskText');
  const pageTaskProgress = document.getElementById('pageTaskProgress');
  const pageZoomBtn = document.getElementById('pageZoomBtn');
  const pageReadBtn = document.getElementById('pageReadBtn');

  const speakBtn = document.getElementById('speakBtn');
  const transcriptSpeakBtn = document.getElementById('transcriptSpeakBtn');
  const transcriptBtn = document.getElementById('transcriptBtn');
  const transcriptPanel = document.getElementById('transcriptPanel');
  const transcriptTitle = document.getElementById('transcriptTitle');
  const transcriptText = document.getElementById('transcriptText');
  const closeTranscriptBtn = document.getElementById('closeTranscriptBtn');

  const detailModal = document.getElementById('detailModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSpeakBtn = document.getElementById('modalSpeakBtn');
  const modalEyebrow = document.getElementById('modalEyebrow');
  const modalTitle = document.getElementById('modalTitle');
  const modalVisual = document.getElementById('modalVisual');
  const modalCaption = document.getElementById('modalCaption');
  const toast = document.getElementById('toast');

  function updateStudentChip() {
    if (!studentChip || !studentChipName) return;
    studentChip.hidden = !studentName;
    studentChipName.textContent = studentName || '';
    studentChip.setAttribute('aria-label', studentName ? `Mission researcher: ${studentName}. Change name.` : 'Enter researcher name');
  }

  function setupDots() {
    pagerDots.innerHTML = mainPages.map((_, i) => `<span class="pager__dot${i === pageIndex ? ' is-active' : ''}"></span>`).join('');
  }

  function updateDots() {
    [...pagerDots.children].forEach((dot, i) => dot.classList.toggle('is-active', i === pageIndex));
  }

  function loadViewedInteractions() {
    try {
      const saved = JSON.parse(localStorage.getItem(VIEWED_KEY) || '{}');
      return {
        incidents: Array.isArray(saved.incidents) ? saved.incidents.filter(id => signals.includes(id)) : [],
        signals: Array.isArray(saved.signals) ? saved.signals.filter(id => signals.includes(id)) : []
      };
    } catch (_) {
      return { incidents: [], signals: [] };
    }
  }

  function saveViewedInteractions() {
    try { localStorage.setItem(VIEWED_KEY, JSON.stringify(viewedInteractions)); } catch (_) {}
  }

  function hasViewed(type, id) {
    return Boolean(viewedInteractions[type]?.includes(id));
  }

  function markViewed(type, id) {
    if (!viewedInteractions[type] || hasViewed(type, id)) return;
    viewedInteractions[type].push(id);
    saveViewedInteractions();
    updatePageTask(mainPages[pageIndex]);
    renderHotspots(mainPages[pageIndex]?.interactive);
  }

  function progressMarkup(type) {
    const labels = { low: 'LOW', steady: 'STEADY', rising: 'RISING', overload: 'OVERLOAD' };
    return signals.map(id => `
      <span class="page-task__chip${hasViewed(type, id) ? ' is-done' : ''}">
        <b>${hasViewed(type, id) ? '✓' : '○'}</b>${labels[id]}
      </span>`).join('');
  }

  function updatePageTask(p = mainPages[pageIndex]) {
    if (!pageTask) return;
    if (!p || ['welcome', 'sortboard', 'results', 'certificate'].includes(p.type)) {
      pageTask.hidden = true;
      return;
    }

    pageTask.hidden = false;
    pageTask.className = 'page-task';
    pageTaskStep.textContent = '1';
    pageTaskProgress.hidden = true;
    pageTaskProgress.innerHTML = '';
    pageZoomBtn.hidden = !p.source;
    pageReadBtn.hidden = !p.transcript;

    const name = firstName();

    if (p.interactive === 'incidents') {
      const count = viewedInteractions.incidents.length;
      pageTask.classList.add('page-task--interactive');
      pageTaskStep.textContent = '4';
      pageTaskEyebrow.textContent = `${name.toUpperCase()} // ${count} OF 4 OPENED`;
      pageTaskTitle.textContent = 'OPEN ALL 4 INCIDENT LOGS';
      pageTaskText.textContent = 'Find the four OPEN LOG buttons on the page. Open each one, compare the examples, then continue.';
      pageTaskProgress.hidden = false;
      pageTaskProgress.innerHTML = progressMarkup('incidents');
      return;
    }

    if (p.interactive === 'signals') {
      const count = viewedInteractions.signals.length;
      pageTask.classList.add('page-task--interactive');
      pageTaskStep.textContent = '4';
      pageTaskEyebrow.textContent = `${name.toUpperCase()} // ${count} OF 4 EXPLORED`;
      pageTaskTitle.textContent = 'EXPLORE THE FOUR SIGNALS';
      pageTaskText.textContent = 'Open each EXPLORE button. Look at the feelings, body clues and what can help for each signal.';
      pageTaskProgress.hidden = false;
      pageTaskProgress.innerHTML = progressMarkup('signals');
      return;
    }

    if (pageIndex === summaryPageIndex()) {
      pageTask.classList.add('page-task--review');
      pageTaskEyebrow.textContent = `${name.toUpperCase()} // QUICK REVIEW`;
      pageTaskTitle.textContent = 'LOOK OVER THE FOUR SIGNALS';
      pageTaskText.textContent = 'Use Zoom Page if the summary is small. When you are ready, choose Start Sort Mission.';
      return;
    }

    pageTaskEyebrow.textContent = `${name.toUpperCase()} // STORY`;
    pageTaskTitle.textContent = pageIndex <= 4 ? 'READ OR LISTEN' : 'READ WHAT HAPPENS NEXT';
    pageTaskText.textContent = 'Follow this part of Glorb’s story. If the page feels small, choose Zoom Page +. You can also use Read Aloud.';
  }


  function pageCounterText(p) {
    if (p?.type === 'welcome') return 'MISSION START';
    if (p?.type === 'sortboard') return 'SORT';
    if (p?.type === 'results') return 'REPORTS';
    if (p?.type === 'certificate') return 'CERTIFICATE';
    const stories = mainPages.filter(page => page.source);
    const idx = stories.indexOf(p);
    return idx >= 0 ? `STORY ${String(idx + 1).padStart(2, '0')} / ${String(stories.length).padStart(2, '0')}` : '';
  }

  function renderPage({animate = true} = {}) {
    const p = mainPages[pageIndex];
    stopSpeech();
    closeModal(false);
    selectedItem = null;
    updateStudentChip();

    pageKicker.textContent = p.kicker;
    pageCounter.textContent = pageCounterText(p);
    transcriptTitle.textContent = p.title;
    transcriptText.textContent = personalizeText(p.transcript || '');
    prevBtn.disabled = pageIndex === 0;
    nextBtn.disabled = false;

    if (p.type === 'welcome') {
      nextLabel.textContent = studentName ? 'START MISSION' : 'ENTER NAME';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '→';
    } else if (p.type === 'certificate') {
      nextLabel.textContent = 'RESTART MISSION';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '↻';
    } else if (p.type === 'results') {
      nextLabel.textContent = 'VIEW CERTIFICATE';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '→';
    } else if (pageIndex === summaryPageIndex()) {
      nextLabel.textContent = 'START SORT MISSION';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '→';
    } else if (p.type === 'sortboard') {
      nextLabel.textContent = sortState.complete ? 'GENERATE REPORTS' : 'CHECK SORT';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = sortState.complete ? '→' : '✓';
    } else {
      nextLabel.textContent = 'NEXT';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '→';
    }

    updateDots();
    updateInteractionNote(null);
    updatePageTask(p);
    history.replaceState(null, '', `#page=${pageIndex + 1}`);

    if (['welcome', 'sortboard', 'results', 'certificate'].includes(p.type)) {
      pageStage.classList.add('is-activity');
      pageStage.classList.toggle('is-welcome', p.type === 'welcome');
      pageStage.classList.toggle('is-certificate', p.type === 'certificate');
      pageStage.classList.remove('is-changing');
      comicPage.hidden = true;
      hotspotLayer.innerHTML = '';
      activityStage.hidden = false;
      tapPrev.hidden = true;
      tapNext.hidden = true;

      if (p.type === 'welcome') renderWelcomePage();
      else if (p.type === 'sortboard') renderSortBoard();
      else if (p.type === 'results') renderResultsPage();
      else renderCertificatePage();
      return;
    }

    pageStage.classList.remove('is-activity', 'is-welcome', 'is-certificate');
    activityStage.hidden = true;
    activityStage.innerHTML = '';
    comicPage.hidden = false;
    tapPrev.hidden = false;
    tapNext.hidden = false;

    if (animate) pageStage.classList.add('is-changing');
    const nextSrc = A + p.source;
    const preload = new Image();
    preload.onload = () => {
      comicPage.src = nextSrc;
      comicPage.alt = p.alt || '';
      renderHotspots(p.interactive);
      window.setTimeout(() => pageStage.classList.remove('is-changing'), animate ? 60 : 0);
      preloadAdjacent();
    };
    preload.onerror = () => {
      comicPage.src = nextSrc;
      pageStage.classList.remove('is-changing');
      showToast('I COULDN’T LOAD THIS PAGE IMAGE. CHECK THE ASSESTS FOLDER.');
    };
    preload.src = nextSrc;
  }


  function personalizeText(text) {
    return String(text || '')
      .replace(/\{\{name\}\}/g, displayName())
      .replace(/\{\{firstName\}\}/g, firstName());
  }

  function renderWelcomePage() {
    const saved = escapeHtml(studentName);
    activityStage.innerHTML = `
      <div class="mission-welcome">
        <section class="mission-welcome__hero">
          <div class="mission-welcome__glorb" aria-hidden="true">
            <img src="${A}sort/glorb-helper.png" alt="">
          </div>
          <div class="mission-welcome__copy">
            <span class="mission-welcome__eyebrow">GLORB // EARTH RESEARCH DIVISION</span>
            <h1>EARTH SIGNALS MISSION</h1>
            <p>Help Glorb work out how humans show what is happening on the inside.</p>
            <div class="mission-route" aria-label="Mission steps">
              <div><b>1</b><span><strong>FOLLOW THE STORY</strong><small>Read or listen to Glorb’s field notes.</small></span></div>
              <div><b>2</b><span><strong>INVESTIGATE 4 SIGNALS</strong><small>Open the clues and compare what changes.</small></span></div>
              <div><b>3</b><span><strong>SORT THE EVIDENCE</strong><small>Match 20 visual clues to the correct signal.</small></span></div>
              <div><b>4</b><span><strong>COMPLETE THE MISSION</strong><small>Generate the reports and your certificate.</small></span></div>
            </div>
          </div>
        </section>

        <section class="mission-welcome__learning" aria-labelledby="learningTitle">
          <span>WHAT YOU WILL LEARN</span>
          <h2 id="learningTitle">BY THE END, I CAN…</h2>
          <ul>
            ${learningIntentions.map(item => `<li><span aria-hidden="true">✓</span>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </section>

        <form class="mission-name-card" id="missionNameForm">
          <div>
            <label for="missionName">RESEARCHER NAME</label>
            <p>Enter your name so Glorb can talk to you during the mission and make your certificate at the end.</p>
          </div>
          <div class="mission-name-card__entry">
            <input id="missionName" name="missionName" type="text" maxlength="60" autocomplete="name"
              placeholder="Type your name…" value="${saved}" aria-describedby="missionNameHelp" required>
            <button type="submit">START MISSION →</button>
          </div>
          <small id="missionNameHelp">Your name stays in this browser only. It is used for your mission and certificate.</small>
        </form>

        <div class="mission-access">
          <strong>NEED A LITTLE HELP?</strong>
          <span>Every story page has <b>READ ALOUD</b> and <b>ZOOM PAGE +</b>. The sort has clue zoom and <b>HELP ME, GLORB</b>.</span>
        </div>
      </div>`;

    const form = document.getElementById('missionNameForm');
    const input = document.getElementById('missionName');
    form?.addEventListener('submit', event => {
      event.preventDefault();
      const name = saveStudentName(input?.value);
      if (!name) {
        input?.focus();
        showToast('ENTER YOUR NAME TO START THE MISSION.');
        return;
      }
      pageIndex = 1;
      renderPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`MISSION STARTED — GOOD LUCK, ${firstName().toUpperCase()}!`);
    });
    window.setTimeout(() => input?.focus(), 80);
  }

  function certificateDate() {
    try {
      return new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (_) {
      return new Date().toDateString();
    }
  }

  function certificateMarkup() {
    const name = escapeHtml(displayName());
    return `
      <article class="mission-certificate" id="missionCertificate" aria-label="Glorb Earth Signals Mission certificate for ${name}">
        <div class="mission-certificate__frame">
          <header class="mission-certificate__top">
            <div>
              <span>ZORBAX-9 RESEARCH DIVISION</span>
              <strong>MISSION RECORD // VERIFIED</strong>
            </div>
            <div class="mission-certificate__stamp">✓<small>COMPLETE</small></div>
          </header>

          <div class="mission-certificate__main">
            <span class="mission-certificate__eyebrow">CERTIFICATE OF MISSION COMPLETION</span>
            <p class="mission-certificate__certifies">THIS CERTIFIES THAT</p>
            <h1>${name}</h1>
            <p class="mission-certificate__completed">completed the</p>
            <h2>GLORB // EARTH SIGNALS MISSION</h2>
            <p class="mission-certificate__summary">
              During the mission, ${name} followed Glorb’s Earth field notes, investigated the four signal states,
              explored examples, and correctly sorted 20 visual clues into <b>Low, Steady, Rising</b> and <b>Signal Overload</b>.
            </p>

            <section class="mission-certificate__learning">
              <h3>LEARNING INTENTIONS MET</h3>
              <ul>${learningIntentions.map(item => `<li>✓ ${escapeHtml(item)}</li>`).join('')}</ul>
            </section>

            <p class="mission-certificate__ability">
              <b>${name} is able to</b> notice signal clues, describe what they may look or feel like,
              recognise when a signal is changing, and choose support that better matches the signal.
            </p>
          </div>

          <footer class="mission-certificate__footer">
            <div>
              <span>${escapeHtml(certificateDate())}</span>
              <small>DATE COMPLETED</small>
            </div>
            <div class="mission-certificate__glorb-sign">
              <strong>Glorb</strong>
              <small>CHIEF CURIOSITY OFFICER // ZORBAX-9</small>
            </div>
          </footer>
        </div>
      </article>`;
  }

  function renderCertificatePage() {
    if (!isSortComplete()) {
      activityStage.innerHTML = `
        <div class="certificate-locked">
          <img src="${A}sort/glorb-helper.png" alt="Glorb">
          <span>MISSION RECORD</span>
          <h2>CERTIFICATE LOCKED</h2>
          <p>Finish the signal sort correctly first. Then Glorb can verify the mission.</p>
          <button class="answer-button" type="button" data-back-to-sort>RETURN TO SORT →</button>
        </div>`;
      activityStage.querySelector('[data-back-to-sort]')?.addEventListener('click', () => {
        pageIndex = pageIndexOfType('sortboard');
        renderPage();
      });
      return;
    }

    activityStage.innerHTML = `
      <div class="certificate-screen">
        <header class="certificate-screen__hero">
          <img src="${A}sort/glorb-helper.png" alt="Glorb">
          <div>
            <span>MISSION COMPLETE // ${escapeHtml(firstName().toUpperCase())}</span>
            <h2>YOU DID IT, ${escapeHtml(firstName().toUpperCase())}.</h2>
            <p>Your mission record is verified. Print it, save it as a PDF, download it as an image, or share it.</p>
          </div>
        </header>

        ${certificateMarkup()}

        <div class="certificate-actions" aria-label="Certificate actions">
          <button type="button" class="certificate-action certificate-action--primary" data-print-certificate>PRINT / SAVE PDF</button>
          <button type="button" class="certificate-action" data-download-certificate>DOWNLOAD PNG</button>
          <button type="button" class="certificate-action" data-share-certificate>SHARE</button>
          <button type="button" class="certificate-action certificate-action--ghost" data-change-name>CHANGE NAME</button>
        </div>

        <p class="certificate-note">Tip: on a school computer, choose <b>Print / Save PDF</b>. On a tablet or phone, <b>Share</b> can send the certificate if your browser supports it.</p>
      </div>`;

    activityStage.querySelector('[data-print-certificate]')?.addEventListener('click', () => window.print());
    activityStage.querySelector('[data-download-certificate]')?.addEventListener('click', downloadCertificatePng);
    activityStage.querySelector('[data-share-certificate]')?.addEventListener('click', shareCertificate);
    activityStage.querySelector('[data-change-name]')?.addEventListener('click', () => {
      pageIndex = pageIndexOfType('welcome');
      renderPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 20) {
    const words = String(text).split(/\s+/);
    let line = '';
    let lines = 0;
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, y + lines * lineHeight);
        lines += 1;
        line = word;
        if (lines >= maxLines) break;
      } else {
        line = test;
      }
    }
    if (line && lines < maxLines) {
      ctx.fillText(line, x, y + lines * lineHeight);
      lines += 1;
    }
    return y + lines * lineHeight;
  }

  function buildCertificateCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1800;
    canvas.height = 1270;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#f7f3eb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#171717';
    ctx.lineWidth = 7;
    ctx.strokeRect(55, 55, canvas.width - 110, canvas.height - 110);
    ctx.lineWidth = 2;
    ctx.strokeRect(73, 73, canvas.width - 146, canvas.height - 146);

    ctx.fillStyle = '#171717';
    ctx.textAlign = 'left';
    ctx.font = '700 28px "Courier New", monospace';
    ctx.fillText('ZORBAX-9 RESEARCH DIVISION', 115, 135);
    ctx.font = '700 18px "Courier New", monospace';
    ctx.fillText('MISSION RECORD // VERIFIED', 115, 170);

    ctx.textAlign = 'center';
    ctx.font = '700 22px "Courier New", monospace';
    ctx.fillText('CERTIFICATE OF MISSION COMPLETION', 900, 250);
    ctx.font = '700 18px Arial, sans-serif';
    ctx.fillText('THIS CERTIFIES THAT', 900, 310);

    ctx.font = '700 72px "Courier New", monospace';
    ctx.fillText(displayName(), 900, 400);

    ctx.font = '20px Arial, sans-serif';
    ctx.fillText('completed the', 900, 450);
    ctx.font = '700 46px "Courier New", monospace';
    ctx.fillText('GLORB // EARTH SIGNALS MISSION', 900, 515);

    ctx.font = '24px Arial, sans-serif';
    ctx.textAlign = 'center';
    wrapCanvasText(
      ctx,
      `${displayName()} followed Glorb’s Earth field notes, investigated the four signal states, explored examples, and correctly sorted 20 visual clues into Low, Steady, Rising and Signal Overload.`,
      900, 580, 1360, 34, 4
    );

    ctx.textAlign = 'left';
    ctx.font = '700 23px "Courier New", monospace';
    ctx.fillText('LEARNING INTENTIONS MET', 190, 750);
    ctx.font = '22px Arial, sans-serif';
    let y = 795;
    for (const item of learningIntentions) {
      ctx.fillText('✓', 205, y);
      y = wrapCanvasText(ctx, item, 245, y, 1300, 30, 2) + 12;
    }

    ctx.font = '700 21px Arial, sans-serif';
    ctx.fillText(`${displayName()} is able to notice signal clues, describe what they may look or feel like,`, 190, 1040);
    ctx.font = '21px Arial, sans-serif';
    ctx.fillText('recognise when a signal is changing, and choose support that better matches the signal.', 190, 1075);

    ctx.font = '700 18px "Courier New", monospace';
    ctx.fillText(certificateDate().toUpperCase(), 190, 1160);
    ctx.font = '14px "Courier New", monospace';
    ctx.fillText('DATE COMPLETED', 190, 1187);

    ctx.textAlign = 'right';
    ctx.font = 'italic 44px "Courier New", monospace';
    ctx.fillText('Glorb', 1610, 1148);
    ctx.font = '14px "Courier New", monospace';
    ctx.fillText('CHIEF CURIOSITY OFFICER // ZORBAX-9', 1610, 1187);
    return canvas;
  }

  function certificateFileName() {
    const safe = displayName().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'researcher';
    return `${safe}-Glorb-Earth-Signals-Certificate.png`;
  }

  function canvasToBlob(canvas) {
    return new Promise(resolve => canvas.toBlob(resolve, 'image/png', 0.96));
  }

  async function downloadCertificatePng() {
    const canvas = buildCertificateCanvas();
    if (!canvas) {
      showToast('CERTIFICATE DOWNLOAD ISN’T AVAILABLE IN THIS BROWSER.');
      return;
    }
    const blob = await canvasToBlob(canvas);
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = certificateFileName();
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('CERTIFICATE DOWNLOADED.');
  }

  async function shareCertificate() {
    const canvas = buildCertificateCanvas();
    if (!canvas) return;
    const blob = await canvasToBlob(canvas);
    const file = blob ? new File([blob], certificateFileName(), { type: 'image/png' }) : null;
    const shareData = {
      title: 'Glorb Earth Signals Mission Certificate',
      text: `${displayName()} completed the Glorb Earth Signals Mission.`
    };

    try {
      if (file && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ ...shareData, files: [file] });
      } else if (navigator.share) {
        await navigator.share({ ...shareData, url: location.href });
      } else {
        await downloadCertificatePng();
        showToast('SHARING ISN’T AVAILABLE HERE — THE CERTIFICATE WAS DOWNLOADED INSTEAD.');
      }
    } catch (error) {
      if (error?.name !== 'AbortError') showToast('SHARE CANCELLED OR NOT AVAILABLE.');
    }
  }

  function preloadAdjacent() {
    [pageIndex - 1, pageIndex + 1].forEach(i => {
      const p = mainPages[i];
      if (p?.source) {
        const img = new Image();
        img.src = A + p.source;
      }
    });
  }

  function renderHotspots(type) {
    hotspotLayer.innerHTML = '';
    if (!type) return;
    const spots = type === 'incidents' ? incidentHotspots : signalHotspots;
    spots.forEach(spot => {
      const viewed = hasViewed(type, spot.id);
      const cfg = signalConfig[spot.id];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `hotspot hotspot--${type}${viewed ? ' is-viewed' : ''}`;
      btn.setAttribute('aria-label', `${viewed ? 'Reopen' : 'Open'} ${spot.label.replace(/^Open /, '')}`);
      Object.assign(btn.style, {
        left: `${spot.x}%`, top: `${spot.y}%`, width: `${spot.w}%`, height: `${spot.h}%`
      });

      const verb = type === 'incidents' ? 'OPEN LOG' : 'EXPLORE';
      btn.innerHTML = `
        <span class="hotspot__cta">
          <b>${viewed ? '✓ OPENED' : `${verb} →`}</b>
          <small>${cfg.short}</small>
        </span>`;

      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        markViewed(type, spot.id);
        openDetail(type, spot.id);
      });
      hotspotLayer.appendChild(btn);
    });
  }

  function updateInteractionNote(type) {
    if (!type) {
      interactionNote.hidden = true;
      return;
    }
    interactionNote.hidden = false;
    interactionNoteText.textContent = type === 'incidents'
      ? 'CLICK ANY “SEE OTHER SIMILAR INCIDENTS” NOTE TO OPEN THE LOG.'
      : 'CLICK ANY SIGNAL GUIDE ON THE PAGE TO OPEN IT.';
  }


  function newSortState() {
    return { placements: {}, complete: false };
  }

  function loadSortState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!saved || typeof saved !== 'object' || !saved.placements || typeof saved.placements !== 'object') {
        return newSortState();
      }

      const clean = newSortState();
      evidenceDeck.forEach(item => {
        const placement = saved.placements[item];
        if (!placement || !signals.includes(placement.signal)) return;
        const type = itemType(item);
        const base = defaultPlacement[type] || { x: 50, y: 50 };
        clean.placements[item] = {
          signal: placement.signal,
          x: Number.isFinite(Number(placement.x)) ? Number(placement.x) : base.x,
          y: Number.isFinite(Number(placement.y)) ? Number(placement.y) : base.y
        };
      });
      clean.complete = Boolean(saved.complete) && isPlacementSetCorrect(clean.placements);
      return clean;
    } catch {
      return newSortState();
    }
  }

  function saveSortState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sortState));
    } catch {}
  }

  function itemType(item) {
    return String(item || '').split('-')[0];
  }

  function correctSignalFor(item) {
    return String(item || '').split('-').slice(-1)[0];
  }

  function itemAssetByKey(item) {
    const type = itemType(item);
    const signal = correctSignalFor(item);
    return `${A}sort/${type}-${signal}.png`;
  }

  function itemLabel(item) {
    const type = evidenceTypes.find(t => t.id === itemType(item));
    return type?.label || 'SIGNAL CLUE';
  }

  function placementCount() {
    return Object.keys(sortState.placements).length;
  }

  function signalPlacementCount(signal) {
    return Object.values(sortState.placements).filter(p => p.signal === signal).length;
  }

  function isPlacementSetCorrect(placements = sortState.placements) {
    if (Object.keys(placements).length !== evidenceDeck.length) return false;
    return evidenceDeck.every(item => placements[item]?.signal === correctSignalFor(item));
  }

  function isSortComplete() {
    return Boolean(sortState.complete) && isPlacementSetCorrect();
  }

  function defaultCoordsFor(item, targetSignal) {
    const type = itemType(item);
    const base = defaultPlacement[type] || { x: 50, y: 50 };
    const sameTypeCount = Object.entries(sortState.placements).filter(([key, placement]) =>
      placement.signal === targetSignal && itemType(key) === type && key !== item
    ).length;
    const nudge = sameTypeCount * 4;
    return {
      x: Math.min(90, base.x + nudge),
      y: Math.min(92, base.y + nudge)
    };
  }

  function clampPlacement(item, x, y) {
    const type = itemType(item);
    const width = itemWidths[type] || 38;
    const halfX = width / 2 + 2;
    const halfY = itemYHalf[type] || 12;
    return {
      x: Math.max(halfX, Math.min(100 - halfX, x)),
      y: Math.max(halfY, Math.min(100 - halfY, y))
    };
  }

  function signalBinMarkup(signal) {
    const cfg = signalConfig[signal];
    const count = signalPlacementCount(signal);
    const wrongHere = lastCheckWrong.some(item => sortState.placements[item]?.signal === signal);
    const placed = Object.entries(sortState.placements)
      .filter(([, placement]) => placement.signal === signal)
      .map(([item, placement]) => {
        const type = itemType(item);
        const width = itemWidths[type] || 38;
        const wrong = lastCheckWrong.includes(item);
        return `
          <button class="placed-evidence placed-evidence--${type}${wrong ? ' is-wrong' : ''}${selectedItem === item ? ' is-selected' : ''}"
            type="button" draggable="true" data-item="${item}"
            style="left:${placement.x}%; top:${placement.y}%; width:${width}%"
            aria-label="${itemLabel(item)} placed in ${cfg.label}. Drag to move it, tap to select it, or use Zoom to inspect it.">
            <img src="${itemAssetByKey(item)}" alt="">
            <span class="placed-evidence__zoom" data-zoom-item="${item}" aria-hidden="true">ZOOM +</span>
          </button>`;
      }).join('');

    return `
      <section class="signal-bin signal-bin--${cfg.accent}${wrongHere ? ' has-wrong' : ''}${isSortComplete() ? ' is-verified' : ''}" data-signal-bin="${signal}">
        <header class="signal-bin__header">
          <h3>SIGNAL ${cfg.short}</h3>
          <div class="signal-bin__tools">
            <button class="signal-info" type="button" data-signal-info="${signal}" aria-label="Get a simple explanation of ${cfg.label}">?</button>
            <span>${count}/5</span>
          </div>
        </header>
        <div class="signal-bin__canvas" role="button" tabindex="0" data-signal="${signal}"
          aria-label="Drop clues for ${cfg.label} anywhere in this square">
          ${count === 0 ? '<span class="signal-bin__placeholder">DROP CLUES ANYWHERE IN THIS SQUARE</span>' : ''}
          ${placed}
        </div>
      </section>`;
  }

  function clueBankMarkup() {
    const remaining = evidenceDeck.filter(item => !sortState.placements[item]);
    if (!remaining.length) {
      return `<div class="clue-bank__empty">ALL CLUES HAVE BEEN PLACED. CHECK YOUR SORT.</div>`;
    }

    return remaining.map(item => {
      const type = itemType(item);
      return `
        <button class="clue-card clue-card--${type}${selectedItem === item ? ' is-selected' : ''}"
          type="button" draggable="true" data-item="${item}"
          aria-label="Select ${itemLabel(item).toLowerCase()} clue. Use Zoom to inspect it more closely.">
          <img src="${itemAssetByKey(item)}" alt="">
          <span class="clue-card__zoom" data-zoom-item="${item}" aria-hidden="true">ZOOM +</span>
        </button>`;
    }).join('');
  }

  function renderSortBoard() {
    const count = placementCount();
    const complete = isSortComplete();

    activityStage.innerHTML = `
      <div class="category-sort${largeClues ? ' is-large-clues' : ''}">
        <header class="category-sort__intro category-sort__intro--clean">
          <div>
            <span class="sort-mission__eyebrow">GLORB // SIGNAL SORT MISSION</span>
            <h2>SORT THE CLUES, ${escapeHtml(firstName().toUpperCase())}</h2>
            <p>Put each clue into the signal it matches. Use <b>ZOOM +</b> if a clue is small, or ask Glorb for a hint.</p>
          </div>
          <div class="category-sort__counter" aria-label="${count} of ${evidenceDeck.length} clues placed">
            <strong>${count}/${evidenceDeck.length}</strong>
            <span>CLUES PLACED</span>
          </div>
        </header>

        <div class="sort-steps" aria-label="How to complete the sort">
          <div class="sort-step${!selectedItem && count === 0 ? ' is-current' : ''}"><span>1</span><strong>CHOOSE A CLUE</strong><small>Pick one from the Evidence Bank</small></div>
          <div class="sort-step${selectedItem ? ' is-current' : ''}"><span>2</span><strong>MOVE IT TO A SIGNAL</strong><small>Drag it, or tap a signal square</small></div>
          <div class="sort-step${count === evidenceDeck.length && !complete ? ' is-current' : ''}"><span>3</span><strong>CHECK YOUR SORT</strong><small>Glorb will mark anything to try again</small></div>
        </div>

        <div class="sort-support-bar">
          <button class="glorb-help-button" type="button" data-ask-glorb>
            <img src="${A}sort/glorb-helper.png" alt="">
            <span><strong>HELP ME, GLORB</strong><small>Get a hint without moving the clue</small></span>
          </button>
          <p id="selectionHelp">${selectedItem
            ? 'CLUE SELECTED — NOW TAP A SIGNAL SQUARE.'
            : 'TIP: START WITH THE FOUR DASHBOARD SYMBOLS.'}</p>
        </div>

        <div class="sort-workspace">
          <div class="signal-bin-grid" aria-label="Four signal sorting areas">
            ${['steady', 'rising', 'overload', 'low'].map(signalBinMarkup).join('')}
          </div>

          <section class="clue-bank" id="clueBank" data-clue-bank tabindex="0">
            <header class="clue-bank__header">
              <div>
                <span class="sort-mission__eyebrow">MIXED VISUAL CLUES</span>
                <h3>EVIDENCE BANK</h3>
              </div>
              <div class="clue-bank__tools">
                <p>${evidenceDeck.length - count} LEFT</p>
                <button class="clue-size-toggle" type="button" data-large-clues>
                  ${largeClues ? 'NORMAL SIZE' : 'LARGER CLUES +'}
                </button>
              </div>
            </header>
            <div class="clue-bank__grid">
              ${clueBankMarkup()}
            </div>
          </section>
        </div>

        <div class="sort-actions sort-actions--clean">
          <div>
            <button class="check-sort" type="button" data-check-sort ${complete ? 'disabled' : ''}>
              ${complete ? 'SORT VERIFIED ✓' : 'CHECK MY SORT'}
            </button>
            <button class="reset-sort reset-sort--light" type="button" data-reset-sort>RESET</button>
          </div>
          <p>Wrong clues will be marked so you can try again.</p>
        </div>

        ${complete ? `
          <div class="sort-success" id="sortSuccess">
            <span>✓</span>
            <div>
              <strong>SORT VERIFIED.</strong>
              <p>Nice work, ${escapeHtml(firstName())}. All 20 clues are in the correct signal. Glorb can now generate the completed reports.</p>
            </div>
            <button class="generate-reports" type="button" data-generate-reports>GENERATE REPORTS →</button>
          </div>` : ''}

        <aside class="glorb-helper" id="glorbHelper" aria-live="polite" hidden>
          <button class="glorb-helper__close" type="button" data-close-glorb aria-label="Close Glorb hint">×</button>
          <img class="glorb-helper__face" src="${A}sort/glorb-helper.png" alt="Glorb">
          <div>
            <span>GLORB SAYS:</span>
            <p id="glorbHelperText">${escapeHtml(firstName())}, start with the dashboard symbols. They are the easiest clues.</p>
          </div>
        </aside>
      </div>`;

    attachCategorySortListeners();
  }

  function renderResultsPage() {
    if (!isSortComplete()) {
      activityStage.innerHTML = `
        <div class="generated-results generated-results--locked">
          <header class="generated-results__hero">
            <span class="sort-mission__eyebrow">ZORBAX-9 // GENERATED REPORTS</span>
            <h2>REPORTS LOCKED.</h2>
            <p>${escapeHtml(firstName())}, finish sorting all 20 clues correctly first. The completed reports are the answer to the sort.</p>
            <button class="answer-button" type="button" data-back-to-sort>RETURN TO SORT →</button>
          </header>
        </div>`;
      activityStage.querySelector('[data-back-to-sort]')?.addEventListener('click', () => {
        pageIndex = pageIndexOfType('sortboard');
        renderPage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    activityStage.innerHTML = `
      <div class="generated-results">
        <header class="generated-results__hero is-complete">
          <span class="sort-mission__eyebrow">ZORBAX-9 // SORT VERIFIED</span>
          <h2>REPORTS GENERATED, ${escapeHtml(firstName().toUpperCase())}.</h2>
          <p>You sorted the signal evidence correctly. Open any report to see how the clues fit together.</p>
        </header>

        <div class="results-next-step">
          <span>1</span>
          <div>
            <strong>CHECK YOUR GENERATED REPORTS</strong>
            <p>Open any signal report for a full-size answer.</p>
          </div>
          <span>2</span>
          <div>
            <strong>GET YOUR MISSION CERTIFICATE</strong>
            <p>Your name and learning intentions will be added automatically.</p>
          </div>
        </div>

        <div class="answer-grid answer-grid--generated">
          ${['steady', 'rising', 'overload', 'low'].map(signal => {
            const cfg = signalConfig[signal];
            return `
              <article class="answer-card answer-card--${cfg.accent} is-unlocked">
                <div class="answer-card__status">GENERATED ✓</div>
                <h3>${cfg.label}</h3>
                <img src="${A + cfg.answer}" alt="${cfg.label} completed Glorb report">
                <button class="answer-button" type="button" data-answer="${signal}">OPEN FULL REPORT →</button>
              </article>`;
          }).join('')}
        </div>

        <div class="certificate-cta">
          <img src="${A}sort/glorb-helper.png" alt="Glorb">
          <div>
            <span>FINAL STEP</span>
            <strong>MISSION VERIFIED, ${escapeHtml(firstName().toUpperCase())}.</strong>
            <p>Generate your printable and shareable certificate with the learning intentions you met.</p>
          </div>
          <button type="button" class="generate-reports" data-view-certificate>GET MY CERTIFICATE →</button>
        </div>

        <div class="sort-results__footer">
          <button class="reset-sort" id="resetSortBtn" type="button">RESET SORT ACTIVITY</button>
          <span>The completed sheets are the answer guide for the sorting activity.</span>
        </div>
      </div>`;

    activityStage.querySelectorAll('[data-answer]').forEach(btn => {
      btn.addEventListener('click', () => openAnswerGuide(btn.dataset.answer));
    });
    activityStage.querySelector('[data-view-certificate]')?.addEventListener('click', () => {
      pageIndex = pageIndexOfType('certificate');
      renderPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.getElementById('resetSortBtn')?.addEventListener('click', resetSortMission);
  }

  function attachDraggableClue(card) {
    card.addEventListener('dragstart', event => {
      selectedItem = card.dataset.item;
      event.dataTransfer?.setData('text/plain', selectedItem);
      if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
      card.classList.add('is-dragging');
    });
    card.addEventListener('dragend', () => card.classList.remove('is-dragging'));
    card.addEventListener('click', event => {
      event.stopPropagation();

      const zoomTarget = event.target.closest?.('[data-zoom-item]');
      if (zoomTarget) {
        openClueZoom(zoomTarget.dataset.zoomItem);
        return;
      }

      const same = selectedItem === card.dataset.item;
      selectedItem = same ? null : card.dataset.item;
      activityStage.querySelectorAll('[data-item]').forEach(c => c.classList.toggle('is-selected', c.dataset.item === selectedItem));
      const help = document.getElementById('selectionHelp');
      if (help) help.textContent = selectedItem
        ? 'CLUE SELECTED — NOW TAP A SIGNAL SQUARE.'
        : 'TIP: START WITH THE FOUR DASHBOARD SYMBOLS.';
    });
  }

  function openClueZoom(item) {
    if (!evidenceDeck.includes(item)) return;
    stopSpeech();

    modalData = { transcript: `${itemLabel(item)}. ${typeHints[itemType(item)] || 'Look closely at this clue.'} Which signal does it match?` };
    modalEyebrow.textContent = 'EVIDENCE ZOOM';
    modalTitle.textContent = itemLabel(item);
    modalCaption.textContent = `${typeHints[itemType(item)] || 'Look closely at the clue.'} Which signal does it match?`;
    modalVisual.classList.remove('modal__visual--incident', 'modal__visual--answer');
    modalVisual.classList.add('modal__visual--clue');
    modalVisual.innerHTML = `
      <div class="clue-zoom">
        <img src="${itemAssetByKey(item)}" alt="${itemLabel(item)} clue enlarged">
        <p>${typeHints[itemType(item)] || 'Look closely at this clue.'}</p>
      </div>`;

    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => modalCloseBtn.focus(), 10);
  }

  function openGlorbHelper(message, targetSignal = null) {
    clearTimeout(helperTimer);
    const helper = document.getElementById('glorbHelper');
    const text = document.getElementById('glorbHelperText');
    if (!helper || !text) return;

    text.textContent = message;
    helper.hidden = false;
    helper.classList.add('is-visible');

    activityStage.querySelectorAll('[data-signal-bin]').forEach(bin => {
      bin.classList.toggle('is-hint-target', Boolean(targetSignal) && bin.dataset.signalBin === targetSignal);
    });

    helperTimer = window.setTimeout(() => {
      helper.classList.remove('is-visible');
      activityStage.querySelectorAll('[data-signal-bin]').forEach(bin => bin.classList.remove('is-hint-target'));
      window.setTimeout(() => { if (helper) helper.hidden = true; }, 180);
    }, 9000);
  }

  function closeGlorbHelper() {
    clearTimeout(helperTimer);
    const helper = document.getElementById('glorbHelper');
    helper?.classList.remove('is-visible');
    activityStage.querySelectorAll('[data-signal-bin]').forEach(bin => bin.classList.remove('is-hint-target'));
    window.setTimeout(() => { if (helper) helper.hidden = true; }, 180);
  }

  function askGlorb() {
    if (selectedItem && evidenceDeck.includes(selectedItem)) {
      const signal = correctSignalFor(selectedItem);
      const type = itemType(selectedItem);
      openGlorbHelper(`${firstName()}, ${typeHints[type]} I’d look closely at the ${signalHelp[signal].title.toLowerCase()} square.`, signal);
      return;
    }

    const remaining = evidenceDeck.filter(item => !sortState.placements[item]);
    if (!remaining.length) {
      openGlorbHelper(`${firstName()}, you placed every clue! Press “Check my sort” and I’ll tell you which ones need another look.`);
      return;
    }

    openGlorbHelper(`${firstName()}, start with the dashboard symbols: ✓, flame, !!! and the down arrow. They are the easiest clues. Then match the colours, faces and signal lines around them.`);
  }

  function showSignalInfo(signal) {
    const info = signalHelp[signal];
    if (!info) return;
    openGlorbHelper(`${info.title}: ${info.text}`);
  }

  function attachCategorySortListeners() {
    activityStage.querySelectorAll('.clue-card, .placed-evidence').forEach(attachDraggableClue);

    activityStage.querySelectorAll('.signal-bin__canvas').forEach(zone => {
      zone.addEventListener('dragover', event => {
        event.preventDefault();
        zone.classList.add('is-dragover');
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
      });
      zone.addEventListener('dragleave', event => {
        if (!zone.contains(event.relatedTarget)) zone.classList.remove('is-dragover');
      });
      zone.addEventListener('drop', event => {
        event.preventDefault();
        zone.classList.remove('is-dragover');
        const item = event.dataTransfer?.getData('text/plain') || selectedItem;
        if (item) placeItem(item, zone.dataset.signal, event.clientX, event.clientY, zone);
      });
      zone.addEventListener('click', event => {
        if (!selectedItem) return;
        placeItem(selectedItem, zone.dataset.signal, event.clientX, event.clientY, zone);
      });
      zone.addEventListener('keydown', event => {
        if ((event.key === 'Enter' || event.key === ' ') && selectedItem) {
          event.preventDefault();
          placeItem(selectedItem, zone.dataset.signal, null, null, zone);
        }
      });
    });

    const bank = activityStage.querySelector('[data-clue-bank]');
    if (bank) {
      bank.addEventListener('dragover', event => {
        event.preventDefault();
        bank.classList.add('is-dragover');
      });
      bank.addEventListener('dragleave', event => {
        if (!bank.contains(event.relatedTarget)) bank.classList.remove('is-dragover');
      });
      bank.addEventListener('drop', event => {
        event.preventDefault();
        bank.classList.remove('is-dragover');
        const item = event.dataTransfer?.getData('text/plain') || selectedItem;
        if (item && sortState.placements[item]) returnItemToBank(item);
      });
      bank.addEventListener('click', event => {
        if (event.target.closest('[data-item]')) return;
        if (selectedItem && sortState.placements[selectedItem]) returnItemToBank(selectedItem);
      });
      bank.addEventListener('keydown', event => {
        if ((event.key === 'Enter' || event.key === ' ') && selectedItem && sortState.placements[selectedItem]) {
          event.preventDefault();
          returnItemToBank(selectedItem);
        }
      });
    }

    activityStage.querySelector('[data-check-sort]')?.addEventListener('click', checkSort);
    activityStage.querySelector('[data-reset-sort]')?.addEventListener('click', resetSortMission);
    activityStage.querySelector('[data-generate-reports]')?.addEventListener('click', generateReports);
    activityStage.querySelector('[data-ask-glorb]')?.addEventListener('click', askGlorb);
    activityStage.querySelector('[data-close-glorb]')?.addEventListener('click', closeGlorbHelper);
    activityStage.querySelector('[data-large-clues]')?.addEventListener('click', () => {
      largeClues = !largeClues;
      renderSortBoard();
    });
    activityStage.querySelectorAll('[data-signal-info]').forEach(btn => {
      btn.addEventListener('click', event => {
        event.stopPropagation();
        showSignalInfo(btn.dataset.signalInfo);
      });
    });
  }

  function placeItem(item, targetSignal, clientX, clientY, zone) {
    if (!evidenceDeck.includes(item) || !signals.includes(targetSignal)) return;

    let coords = defaultCoordsFor(item, targetSignal);
    if (Number.isFinite(clientX) && Number.isFinite(clientY) && zone) {
      const rect = zone.getBoundingClientRect();
      if (rect.width && rect.height) {
        coords = {
          x: ((clientX - rect.left) / rect.width) * 100,
          y: ((clientY - rect.top) / rect.height) * 100
        };
      }
    }

    coords = clampPlacement(item, coords.x, coords.y);
    sortState.placements[item] = { signal: targetSignal, x: coords.x, y: coords.y };
    sortState.complete = false;
    lastCheckWrong = [];
    selectedItem = null;
    saveSortState();
    renderSortBoard();
  }

  function returnItemToBank(item) {
    if (!sortState.placements[item]) return;
    delete sortState.placements[item];
    sortState.complete = false;
    lastCheckWrong = [];
    selectedItem = null;
    saveSortState();
    renderSortBoard();
  }

  function checkSort() {
    const missing = evidenceDeck.length - placementCount();
    if (missing > 0) {
      lastCheckWrong = [];
      showToast(`${missing} ${missing === 1 ? 'CLUE IS' : 'CLUES ARE'} STILL IN THE EVIDENCE BANK.`);
      return;
    }

    const wrong = evidenceDeck.filter(item => sortState.placements[item]?.signal !== correctSignalFor(item));
    if (wrong.length) {
      lastCheckWrong = wrong;
      sortState.complete = false;
      saveSortState();
      renderSortBoard();
      showToast(`${wrong.length} ${wrong.length === 1 ? 'CLUE NEEDS' : 'CLUES NEED'} ANOTHER LOOK. WRONG SIGNALS ARE MARKED.`);
      return;
    }

    lastCheckWrong = [];
    sortState.complete = true;
    saveSortState();
    renderSortBoard();
    showToast('SORT CORRECT — GLORB’S COMPLETED REPORTS ARE READY.');
    window.setTimeout(() => document.getElementById('sortSuccess')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
  }

  function generateReports() {
    if (!isSortComplete()) {
      checkSort();
      return;
    }
    pageIndex = pageIndexOfType('results');
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openAnswerGuide(signal) {
    if (!isSortComplete()) {
      showToast('SORT ALL FOUR SIGNALS CORRECTLY FIRST TO GENERATE THE REPORTS.');
      return;
    }
    stopSpeech();
    const cfg = signalConfig[signal];
    modalData = {
      transcript: `Completed teacher answer guide for ${cfg.label}.`
    };
    modalEyebrow.textContent = 'COMPLETED GLORB REPORT // ANSWER';
    modalTitle.textContent = cfg.label;
    modalCaption.textContent = 'This completed report is the answer generated after the signal clues are sorted correctly.';
    modalVisual.classList.remove('modal__visual--incident');
    modalVisual.classList.add('modal__visual--answer');
    modalVisual.innerHTML = `
      <div class="answer-guide">
        <div class="answer-guide__sheet">
          <img src="${A + cfg.answer}" alt="${cfg.label} completed answer guide">
        </div>
      </div>`;
    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => modalCloseBtn.focus(), 10);
  }

  function resetSortMission() {
    if (!window.confirm('Reset the four-signal sort and return every clue to the evidence bank?')) return;
    sortState = newSortState();
    selectedItem = null;
    lastCheckWrong = [];
    saveSortState();
    pageIndex = pageIndexOfType('sortboard');
    renderPage();
    showToast('SORT ACTIVITY RESET.');
  }

  function go(delta) {
    const current = mainPages[pageIndex];

    if (current.final && delta > 0) {
      pageIndex = pageIndexOfType('welcome');
      renderPage();
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    if (current.type === 'welcome' && delta > 0) {
      startMissionFromWelcome();
      return;
    }

    if (current.type === 'sortboard' && delta > 0 && !isSortComplete()) {
      checkSort();
      return;
    }

    const next = Math.max(0, Math.min(mainPages.length - 1, pageIndex + delta));
    if (next === pageIndex) return;

    if (['results', 'certificate'].includes(mainPages[next]?.type) && !isSortComplete()) {
      pageIndex = pageIndexOfType('sortboard');
      renderPage();
      showToast('SORT THE FOUR SIGNALS CORRECTLY BEFORE CONTINUING.');
      return;
    }

    pageIndex = next;
    renderPage();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function startMissionFromWelcome() {
    const input = document.getElementById('missionName');
    if (input && !saveStudentName(input.value)) {
      input.focus();
      showToast('ENTER YOUR NAME TO START THE MISSION.');
      return;
    }
    if (!studentName) {
      pageIndex = pageIndexOfType('welcome');
      renderPage();
      showToast('ENTER YOUR NAME TO START THE MISSION.');
      return;
    }
    pageIndex = 1;
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleNext() {
    const current = mainPages[pageIndex];
    if (current.type === 'welcome') {
      startMissionFromWelcome();
      return;
    }
    if (current.type === 'sortboard') {
      if (isSortComplete()) generateReports();
      else checkSort();
      return;
    }
    if (current.type === 'results') {
      pageIndex = pageIndexOfType('certificate');
      renderPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    go(1);
  }

  function openPageZoom() {
    const p = mainPages[pageIndex];
    if (!p?.source) return;
    stopSpeech();
    modalData = { transcript: p.transcript || '' };
    modalEyebrow.textContent = 'PAGE ZOOM';
    modalTitle.textContent = p.title || 'GLORB FIELD NOTE';
    modalCaption.textContent = 'Scroll to read the page at a larger size. Use the speaker button to hear it aloud.';
    modalVisual.classList.remove('modal__visual--answer', 'modal__visual--clue', 'modal__visual--incident');
    modalVisual.classList.add('modal__visual--page');
    modalVisual.innerHTML = `<div class="page-zoom"><img src="${A + p.source}" alt="${p.alt || p.title || 'Glorb story page'} enlarged"></div>`;
    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => modalCloseBtn.focus(), 10);
  }

  function openDetail(type, id) {
    stopSpeech();
    modalData = type === 'incidents' ? incidentDetails[id] : signalDetails[id];
    if (!modalData) return;

    modalEyebrow.textContent = modalData.eyebrow;
    modalTitle.textContent = modalData.title;
    modalCaption.textContent = modalData.caption;
    modalVisual.classList.remove('modal__visual--answer', 'modal__visual--clue');
    modalVisual.classList.toggle('modal__visual--incident', type === 'incidents');

    if (type === 'incidents') {
      modalVisual.innerHTML = `
        <div class="incident-detail">
          <img class="incident-detail__equation" src="${A + modalData.equation}" alt="${modalData.title} signal equation">
          <div class="incident-detail__grid">
            <figure class="incident-detail__panel incident-detail__panel--note">
              <img src="${A + modalData.note}" alt="${modalData.title} handwritten field note">
            </figure>
            <figure class="incident-detail__panel incident-detail__panel--report">
              <img src="${A + modalData.report}" alt="${modalData.title} incident report">
            </figure>
          </div>
        </div>`;
    } else {
      modalVisual.innerHTML = `<img src="${A + modalData.page}" alt="${modalData.title} guide">`;
    }

    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => modalCloseBtn.focus(), 10);
  }

  function closeModal(restoreFocus = true) {
    if (!detailModal.classList.contains('is-open')) return;
    stopSpeech();
    detailModal.classList.remove('is-open');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalData = null;
    modalVisual.classList.remove('modal__visual--answer', 'modal__visual--incident', 'modal__visual--clue', 'modal__visual--page');
    if (restoreFocus) window.setTimeout(() => pageStage.focus?.(), 0);
  }

  function toggleTranscript(force) {
    const shouldOpen = typeof force === 'boolean' ? force : !transcriptPanel.classList.contains('is-open');
    transcriptPanel.classList.toggle('is-open', shouldOpen);
    transcriptPanel.setAttribute('aria-hidden', String(!shouldOpen));
    transcriptBtn.setAttribute('aria-expanded', String(shouldOpen));
    if (shouldOpen) closeTranscriptBtn.focus();
  }

  function chooseVoice() {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    return voices.find(v => /^en-AU/i.test(v.lang))
      || voices.find(v => /^en-GB/i.test(v.lang))
      || voices.find(v => /^en/i.test(v.lang))
      || null;
  }

  function speak(text) {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      showToast('READ-ALOUD ISN’T SUPPORTED IN THIS BROWSER. THE TRANSCRIPT IS STILL AVAILABLE.');
      return;
    }
    if (speechActive) {
      stopSpeech();
      return;
    }
    const cleaned = (text || '').replace(/\s+/g, ' ').trim();
    if (!cleaned) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleaned);
    const voice = chooseVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || 'en-AU';
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }

  function setSpeaking(on) {
    speechActive = on;
    speakBtn.classList.toggle('is-speaking', on);
    speakBtn.setAttribute('aria-pressed', String(on));
    modalSpeakBtn.classList.toggle('is-speaking', on && !!modalData);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  function readCurrent() {
    speak(personalizeText(modalData?.transcript || mainPages[pageIndex].transcript));
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }

  function initFromHash() {
    const match = location.hash.match(/page=(\d+)/);
    if (match) pageIndex = Math.max(0, Math.min(mainPages.length - 1, Number(match[1]) - 1));
    if (!studentName) pageIndex = pageIndexOfType('welcome');
  }

  studentChip?.addEventListener('click', () => {
    pageIndex = pageIndexOfType('welcome');
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  comicPage?.addEventListener('click', event => {
    if (event.target !== comicPage || mainPages[pageIndex]?.type) return;
    openPageZoom();
  });

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', handleNext);
  tapPrev.addEventListener('click', () => go(-1));
  tapNext.addEventListener('click', () => go(1));

  transcriptBtn.addEventListener('click', () => toggleTranscript());
  closeTranscriptBtn.addEventListener('click', () => toggleTranscript(false));
  speakBtn.addEventListener('click', readCurrent);
  pageReadBtn?.addEventListener('click', readCurrent);
  pageZoomBtn?.addEventListener('click', openPageZoom);
  transcriptSpeakBtn.addEventListener('click', () => speak(personalizeText(mainPages[pageIndex].transcript)));
  modalSpeakBtn.addEventListener('click', readCurrent);
  modalCloseBtn.addEventListener('click', () => closeModal());
  modalBackdrop.addEventListener('click', () => closeModal());

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (detailModal.classList.contains('is-open')) closeModal();
      else if (transcriptPanel.classList.contains('is-open')) toggleTranscript(false);
      else stopSpeech();
      return;
    }
    if (detailModal.classList.contains('is-open') || transcriptPanel.classList.contains('is-open')) return;
    if (event.key === 'ArrowRight') handleNext();
    if (event.key === 'ArrowLeft') go(-1);
    if (event.key.toLowerCase() === 'r') readCurrent();
  });

  pageStage.addEventListener('touchstart', (event) => {
    if (mainPages[pageIndex]?.type) { touchStartX = null; return; }
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, {passive: true});

  pageStage.addEventListener('touchend', (event) => {
    if (touchStartX == null) return;
    const dx = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
    touchStartX = null;
    if (Math.abs(dx) < 55) return;
    go(dx < 0 ? 1 : -1);
  }, {passive: true});

  window.addEventListener('beforeunload', stopSpeech);
  window.speechSynthesis?.addEventListener?.('voiceschanged', () => {});

  initFromHash();
  updateStudentChip();
  setupDots();
  renderPage({animate: false});
})();
