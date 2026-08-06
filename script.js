const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];
const screens = $$('.screen');
const state = { score:0, complete:[false,false,false], selectedSort:null, sortDone:0, selectedBody:null, bodyDone:0, selectedActions:new Set(), reply:null };

function show(id){ screens.forEach(s=>s.classList.toggle('active',s.id===id)); window.scrollTo({top:0,behavior:'smooth'}); }
function setProgress(percent){ $('#progressFill').style.width=`${percent}%`; $('#progressText').textContent=`${percent}%`; }
function setMissionComplete(n){
  if(state.complete[n-1]) return;
  state.complete[n-1]=true; state.score+=100; $('#score').textContent=`${state.score} / 300`;
  const card=$(`.mission-card:nth-child(${n})`); card.classList.remove('available','locked'); card.classList.add('complete'); $(`#m${n}Status`).textContent='COMPLETE';
  const next=$(`.mission-card:nth-child(${n+1})`); if(next){next.disabled=false;next.classList.remove('locked');next.classList.add('available');$(`#m${n+1}Status`).textContent='AVAILABLE';}
  setProgress([0,45,72,100][n]);
}

// Boot
const bootMessages=['Searching 47 light years of classroom space…','Locating Zorbax-9 curiosity signal…','Removing moon static…','Transmission decoded.'];
let signal=0; const boot=setInterval(()=>{signal=Math.min(100,signal+Math.floor(Math.random()*12)+8);$('#signalFill').style.width=`${signal}%`;$('#signalPercent').textContent=`${signal}%`;$('#bootText').textContent=bootMessages[Math.min(3,Math.floor(signal/26))];if(signal===100){clearInterval(boot);$('#startBtn').classList.remove('hidden');}},240);
$('#startBtn').onclick=()=>{show('storyScreen');runDialogue();};

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
      'Before Pip finished speaking I interrupted and said,\n\n' +
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
