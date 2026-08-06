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

const dialogue=[
 {img:'assets/glorb/welcome.webp',text:'Greetings. I am GLORB, Chief Curiosity Officer from Zorbax-9.\n\nI travelled 47 light years to study how humans communicate. I am not from here. I feel this is important to say early.'},
 {img:'assets/glorb/neutral.webp',text:'On my planet, we communicate by blinking our seventeen eyes in a pattern. Simple. Efficient. Nobody changes the subject to clouds.'},
 {img:'assets/glorb/uneasy-face.webp',text:'Yesterday, Pip told me, “My dog is sick.”\n\nBefore Pip finished, I said, “DID YOU KNOW CLOUDS ARE NOT SOLID?” I was looking at the sky as supporting evidence.'},
 {img:'assets/glorb/sad-face.webp',text:'Pip said, “Never mind,” and walked away.\n\nI replayed this 6 times in my memory banks. I now believe I was waiting to speak, not listening.'},
 {img:'assets/glorb/welcome.webp',text:'Earth Expert, I need your help. First, we will learn the active listening signals. Then you will help me build a chart, calibrate my body and try again.'}
];
let dialogueIndex=0, typing=null;
function runDialogue(){ const item=dialogue[dialogueIndex];$('#storyGlorb').src=item.img;typeText(item.text,$('#dialogueText'));$('#nextDialogue').textContent=dialogueIndex===dialogue.length-1?'BEGIN TRAINING':'CONTINUE'; }
function typeText(text,target){clearInterval(typing);target.textContent='';let i=0;typing=setInterval(()=>{target.textContent+=text[i++]||'';if(i>=text.length)clearInterval(typing);},13);}
$('#nextDialogue').onclick=()=>{if(dialogueIndex<dialogue.length-1){dialogueIndex++;runDialogue();}else{setProgress(15);show('learnScreen');renderTeaching();}};

const teaching=[
 {img:22,title:'Eye Contact',meaning:'Look naturally towards the person who is speaking.',why:'It shows that your attention is with them.',glorb:'Visual attention signal detected. I should look at the person, not the nearest cloud.'},
 {img:23,title:'Face the Speaker',meaning:'Turn your head and body towards the speaker.',why:'Your body shows that you are ready to listen.',glorb:'My front-facing system must point towards the human. This is surprisingly specific.'},
 {img:24,title:'Listen Carefully',meaning:'Pay attention to the speaker’s words and important details.',why:'Careful listening helps you understand the whole message.',glorb:'The ears collect data. The brain must not replace it with guesses.'},
 {img:25,title:'Focus',meaning:'Keep your attention on the conversation.',why:'Focusing helps you notice words, feelings and meaning.',glorb:'One conversation at a time. Paper aeroplanes are not part of this research.'},
 {img:26,title:'Nod Your Head',meaning:'Use a small nod to show you are following along.',why:'A nod gives the speaker a quiet sign that you are listening.',glorb:'A tiny head movement can transmit “message received.” Efficient.'},
 {img:27,title:'Wait Your Turn',meaning:'Let the other person have their speaking turn.',why:'Taking turns makes conversations fair and easier to understand.',glorb:'I have discovered that another person’s turn continues even when I have a fact.'},
 {img:28,title:'Ask Questions',meaning:'Ask a question that connects to what the person said.',why:'Questions show interest and help you learn more.',glorb:'Connected questions are useful. “What colour was it?” is better than “Are clouds edible?”'},
 {img:29,title:'Repeat Back',meaning:'Say the important idea in your own words.',why:'Repeating back checks that you understood correctly.',glorb:'This is a verification procedure. At last, a social rule with laboratory qualities.'},
 {img:30,title:'Tell the Speaker You Understand',meaning:'Use words such as “Okay” or “I understand.”',why:'These words reassure the speaker that their message arrived.',glorb:'Humans require delivery confirmation. I will provide it.'},
 {img:31,title:'Wait Before Speaking',meaning:'Pause until the speaker has completely finished.',why:'Waiting prevents interruptions and gives the speaker time to explain.',glorb:'Sentence completion must occur before cloud deployment.'},
 {img:32,title:'Keep Hands and Feet Still',meaning:'Use a calm body while someone is talking.',why:'A calm body makes it easier for you and the speaker to focus.',glorb:'Four limbs still. Two feet grounded. Confusion reduced by approximately 19%.'},
 {img:33,title:'Ignore Distractions',meaning:'Bring your attention back when something else catches your eye.',why:'Ignoring distractions helps the speaker feel important.',glorb:'The paper aeroplane may continue without my supervision.'}
];
let teachIndex=0;
function renderTeaching(){const t=teaching[teachIndex];$('#teachingImage').src=`assets/listening/${t.img}.webp`;$('#teachingImage').alt=t.title;$('#teachingTitle').textContent=t.title;$('#teachingMeaning').textContent=t.meaning;$('#teachingWhy').textContent=t.why;$('#teachingGlorb').textContent=t.glorb;$('#cardCount').textContent=teachIndex+1;$('#prevCard').disabled=teachIndex===0;$('#nextCard').textContent=teachIndex===teaching.length-1?'OPEN MISSION CONTROL':'NEXT CARD';}
$('#prevCard').onclick=()=>{if(teachIndex>0){teachIndex--;renderTeaching();}};
$('#nextCard').onclick=()=>{if(teachIndex<teaching.length-1){teachIndex++;renderTeaching();}else{setProgress(28);show('missionHub');}};
$$('.mission-card').forEach(b=>b.onclick=()=>{if(!b.disabled)show(b.dataset.target);});$$('.hubBtn').forEach(b=>b.onclick=()=>show('missionHub'));

const sortData=[
 ['Eye Contact','looks'],['Face the Speaker','looks'],['Listen Carefully','looks'],['Focus','looks'],['Nod Your Head','looks'],['Wait Your Turn','looks'],['Keep Hands and Feet Still','looks'],['Ignore Distractions','looks'],['Showing Interest','looks'],
 ['Ask Questions','sounds'],['Repeat Back','sounds'],['Tell the Speaker You Understand','sounds'],['Wait for the Speaker to Stop Before Speaking','sounds'],['Quiet Voices','sounds'],['Kind / Encouraging Words','sounds'],['“Okay.”','sounds'],['“I understand.”','sounds'],['“Can you explain that again?”','sounds'],['“That’s a good idea.”','sounds'],
 ['Happy','feels'],['Important','feels'],['Valued','feels'],['Respected','feels'],['Understood','feels']
];
function renderSort(){const bank=$('#sortBank');bank.innerHTML='';sortData.forEach(([label,bucket],i)=>{const b=document.createElement('button');b.className='sort-card';b.textContent=label;b.draggable=true;b.dataset.bucket=bucket;b.dataset.id=i;b.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',i));b.onclick=()=>{state.selectedSort=state.selectedSort===b?null:b;$$('.sort-card').forEach(x=>x.classList.toggle('selected',x===state.selectedSort));};bank.appendChild(b);});}
renderSort();
$$('.drop-zone').forEach(z=>{z.addEventListener('dragover',e=>{e.preventDefault();z.classList.add('dragover')});z.addEventListener('dragleave',()=>z.classList.remove('dragover'));z.addEventListener('drop',e=>{e.preventDefault();z.classList.remove('dragover');placeSort($(`.sort-card[data-id="${e.dataTransfer.getData('text/plain')}"]`),z);});z.onclick=e=>{if(e.target.closest('.placed-card'))return;if(state.selectedSort)placeSort(state.selectedSort,z);};});
function placeSort(card,zone){if(!card)return;const correct=card.dataset.bucket===zone.dataset.bucket;if(correct){const tag=document.createElement('span');tag.className='placed-card';tag.textContent=card.textContent;$('.drop-items',zone).appendChild(tag);card.remove();state.selectedSort=null;state.sortDone++;$('#sortFeedback').textContent=`${state.sortDone} of 24 cards sorted. Glorb's chart is becoming statistically useful.`;if(state.sortDone===sortData.length){$('#sortFeedback').textContent='CHART COMPLETE — Looks, sounds and feelings data successfully separated.';setMissionComplete(1);setTimeout(()=>show('missionHub'),1200);}}else{$('#sortFeedback').textContent=`That card does not belong in “${$('h3',zone).textContent}.” My calculations request another attempt.`;card.classList.add('selected');setTimeout(()=>card.classList.remove('selected'),500);}}

const bodyData=[['Focus my thinking','brain'],['Look at the speaker','eyes'],['Listen carefully','ears'],['Wait before speaking','mouth'],['Face the speaker','body'],['Keep my hands still','hands'],['Keep my feet still','feet']];
function renderBody(){const host=$('#bodyCards');bodyData.forEach(([label,part],i)=>{const b=document.createElement('button');b.className='body-card';b.textContent=label;b.draggable=true;b.dataset.part=part;b.dataset.id=i;b.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',i));b.onclick=()=>{state.selectedBody=state.selectedBody===b?null:b;$$('.body-card').forEach(x=>x.classList.toggle('selected',x===state.selectedBody));};host.appendChild(b);});}
renderBody();
$$('.body-zone').forEach(z=>{z.addEventListener('dragover',e=>e.preventDefault());z.addEventListener('drop',e=>{e.preventDefault();placeBody($(`.body-card[data-id="${e.dataTransfer.getData('text/plain')}"]`),z);});z.onclick=()=>{if(state.selectedBody)placeBody(state.selectedBody,z);};});
function placeBody(card,zone){if(!card||zone.classList.contains('done'))return;if(card.dataset.part===zone.dataset.part){$('small',zone).textContent=card.textContent;zone.classList.add('done');card.remove();state.selectedBody=null;state.bodyDone++;$('#bodyFeedback').textContent=`${state.bodyDone} of 7 systems calibrated.`;if(state.bodyDone===7){$('#bodyFeedback').textContent='FULL BODY CALIBRATION COMPLETE — Glorb is physically prepared to listen.';setMissionComplete(2);setTimeout(()=>show('missionHub'),1200);}}else{$('#bodyFeedback').textContent=`That instruction does not match the ${$('span',zone).textContent.toLowerCase()} system. Please reroute it.`;}}

const actions=[['Face Pip',true],['Look at Pip, not the sky',true],['Wait until Pip finishes',true],['Ask about the dog',true],['Share the cloud fact immediately',false],['Look for a paper aeroplane',false],['Plan a better story while Pip talks',false],['Walk away before Pip finishes',false]];
const actionHost=$('#actionChoices');actions.forEach(([label,correct],i)=>{const b=document.createElement('button');b.className='choice';b.textContent=label;b.dataset.correct=correct;b.onclick=()=>{b.classList.toggle('selected');b.classList.contains('selected')?state.selectedActions.add(b):state.selectedActions.delete(b);$('#checkActions').disabled=state.selectedActions.size!==4;$('#actionFeedback').textContent=`${state.selectedActions.size} of 4 actions selected.`;};actionHost.appendChild(b);});
$('#checkActions').onclick=()=>{const good=[...state.selectedActions].every(b=>b.dataset.correct==='true');if(good){[...state.selectedActions].forEach(b=>b.classList.add('correct'));$$('#actionChoices .choice').forEach(b=>b.disabled=true);$('#actionFeedback').textContent='PLAN APPROVED — Glorb will face, look, wait and ask a connected question.';$('#replyStage').classList.remove('hidden');}else{[...state.selectedActions].forEach(b=>{if(b.dataset.correct==='false')b.classList.add('incorrect')});$('#actionFeedback').textContent='One or more actions would make Pip feel ignored. Resetting plan.';setTimeout(()=>{$$('#actionChoices .choice').forEach(b=>b.classList.remove('selected','incorrect'));state.selectedActions.clear();$('#checkActions').disabled=true;$('#actionFeedback').textContent='Select four actions.';},1300);}};
const replies=[['“Did you know clouds are not solid?”',false],['“Is your dog feeling better? Is there anything I can do?”',true],['“My spaceship also made a strange sound.”',false],['“Okay, but I have a more interesting story.”',false]];
const replyHost=$('#replyChoices');replies.forEach(([label,correct])=>{const b=document.createElement('button');b.className='choice';b.textContent=label;b.dataset.correct=correct;b.onclick=()=>{$$('#replyChoices .choice').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.reply=b;$('#checkReply').disabled=false;};replyHost.appendChild(b);});
$('#checkReply').onclick=()=>{if(state.reply.dataset.correct==='true'){state.reply.classList.add('correct');$('#actionFeedback').textContent='RESPONSE APPROVED — The question connects directly to Pip’s message.';setMissionComplete(3);setTimeout(()=>show('finalScreen'),900);}else{state.reply.classList.add('incorrect');$('#actionFeedback').textContent='That response changes the subject back to Glorb. Try a connected question.';setTimeout(()=>{state.reply.classList.remove('selected','incorrect');state.reply=null;$('#checkReply').disabled=true;},900);}};
$('#restartBtn').onclick=()=>location.reload();
