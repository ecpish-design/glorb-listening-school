/* GLORB LISTENING MISSION — V10 behaviour/data patch
   Load AFTER script.js. */

(() => {
  /* ---------- NEW LEARNING / SORT VISUALS ----------
     Uploaded resource set mapping:
     28 eye contact, 29 face speaker, 30 listen carefully, 31 focus,
     32 nod, 33 wait turn, 34 ask questions, 35 repeat back,
     36 tell speaker you understand, 37 wait for speaker to stop,
     38 keep hands and feet still, 39 ignore distractions,
     40 showing interest.
  */
  const teachingImageMap = [28,29,30,31,32,33,34,35,36,37,38,39];
  if (typeof teaching !== 'undefined') {
    teaching.forEach((card, i) => {
      if (teachingImageMap[i]) card.img = teachingImageMap[i];
    });
  }

  const sortImageByLabel = {
    'Eye Contact':'28.png',
    'Face the Speaker':'29.png',
    'Listen Carefully':'30.png',
    'Nod Your Head':'32.png',
    'Wait Your Turn':'33.png',
    'Ask Questions':'34.png',
    'Repeat Back':'35.png',
    'Tell the Speaker You Understand':'36.png',
    'Wait for the Speaker to Stop Before Speaking':'37.png',
    'Keep Hands and Feet Still':'38.png',
    'Ignore Distractions':'39.png',
    'Showing Interest':'40.png'
  };

  if (typeof sortData !== 'undefined') {
    sortData.forEach(item => {
      if (sortImageByLabel[item.label]) item.image = sortImageByLabel[item.label];
    });
    if (typeof renderSort === 'function') renderSort();
  }

  /* ---------- STORY LAYOUT FIXES ---------- */
  if (typeof runDialogue === 'function') {
    const originalRunDialogue = runDialogue;
    runDialogue = function patchedRunDialogue(){
      originalRunDialogue();
      const shell = document.querySelector('#storyScreen .story-shell');
      if (!shell) return;
      shell.classList.toggle('walkaway-mode', dialogueIndex === 4);
    };
  }

  /* ---------- FIELD NOTE: TWO-STEP CARD FLOW ----------
     First press reveals Glorb's larger note over the lesson.
     Second press advances to the next research card.
  */
  let v10NoteShown = false;

  function hideV10Note(){
    if (typeof stopTeachingNote === 'function') stopTeachingNote();
    const annotation = document.getElementById('glorbAnnotation');
    if (annotation) {
      annotation.classList.remove('is-visible','note-complete');
    }
    const note = document.getElementById('teachingGlorb');
    if (note) note.textContent = '';
    v10NoteShown = false;
  }

  if (typeof renderTeaching === 'function') {
    renderTeaching = function v10RenderTeaching(){
      if (typeof stopNarration === 'function') stopNarration();
      hideV10Note();

      const card = teaching[teachIndex];
      document.getElementById('teachingImage').src = `assets/listening/${card.img}.png`;
      document.getElementById('teachingImage').alt = card.title;
      document.getElementById('teachingTitle').textContent = card.title;
      document.getElementById('teachingMeaning').textContent = card.meaning;
      document.getElementById('teachingWhy').textContent = card.why;
      document.getElementById('cardCount').textContent = teachIndex + 1;
      document.getElementById('prevCard').disabled = teachIndex === 0;
      document.getElementById('nextCard').textContent = "SHOW GLORB'S NOTE";

      const glorbImg = document.getElementById('teachingGlorbImage');
      glorbImg.src = card.glorbImg || 'assets/glorb/intro-glorb.png';
      glorbImg.alt = `Glorb commenting on ${card.title}`;
    };
  }

  const nextCardBtn = document.getElementById('nextCard');
  if (nextCardBtn) {
    nextCardBtn.onclick = () => {
      const card = teaching[teachIndex];
      if (!v10NoteShown) {
        v10NoteShown = true;
        if (typeof revealTeachingNote === 'function') revealTeachingNote(card);
        nextCardBtn.textContent = teachIndex === teaching.length - 1
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

  /* Make sure current card uses the corrected visual and starts without the note. */
  if (document.querySelector('#learnScreen')) {
    renderTeaching();
  }

  /* ---------- BODY CALIBRATION: WRONG ANSWERS CAN BE CHANGED ---------- */
  function releaseBodyZone(zone){
    const assignedId = zone.dataset.assignedId;
    if (!assignedId) return;

    const card = document.querySelector(`.body-card[data-id="${assignedId}"]`);
    if (card) card.classList.remove('hidden-card');

    zone.dataset.assignedPart = '';
    zone.dataset.assignedId = '';
    zone.classList.remove('filled','correct','incorrect','dragover');
    const small = zone.querySelector('small');
    if (small) small.textContent = '';

    state.bodyPlaced = Math.max(0, state.bodyPlaced - 1);
    state.selectedBody = null;
    document.querySelectorAll('.body-card').forEach(c => c.classList.remove('selected'));

    const check = document.getElementById('checkBody');
    if (check) check.disabled = state.bodyPlaced !== bodyData.length;

    const feedback = document.getElementById('bodyFeedback');
    if (feedback) feedback.textContent = `${state.bodyPlaced} of 7 body parts filled. Choose a new card for the empty box.`;
  }

  document.querySelectorAll('.body-zone').forEach(zone => {
    zone.addEventListener('click', event => {
      if (zone.classList.contains('incorrect') && !state.selectedBody) {
        event.preventDefault();
        event.stopImmediatePropagation();
        releaseBodyZone(zone);
      }
    }, true);
  });

  /* After checking, wrong answers remain editable instead of becoming a dead end. */
  const checkBodyBtn = document.getElementById('checkBody');
  if (checkBodyBtn) {
    const originalCheck = checkBodyBtn.onclick;
    checkBodyBtn.onclick = function(event){
      originalCheck.call(this, event);
      const wrong = document.querySelectorAll('.body-zone.incorrect');
      wrong.forEach(zone => zone.setAttribute('title','Tap this red answer to change it'));
    };
  }
})();
