 const capObj = document.getElementById('cap');
 const sagObj = document.getElementById('sag');
 const scoObj = document.getElementById('sco');
 const libObj = document.getElementById('lib');
 const virObj = document.getElementById('vir');
 const leoObj = document.getElementById('leo');
 const canObj = document.getElementById('can');
 const gemObj = document.getElementById('gem');
 const tauObj = document.getElementById('tau');
 const ariObj = document.getElementById('ari');
 const pisObj = document.getElementById('pis');
 const aquObj = document.getElementById('aqu');
 const helpObj = document.getElementById('help');

 capObj.addEventListener('click', function(evt) {
    console.log('cap button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
 });

 sagObj.addEventListener('click', function(evt) {
   console.log('sag button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

scoObj.addEventListener('click', function(evt) {
   console.log('sco button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

libObj.addEventListener('click', function(evt) {
   console.log('lib button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

virObj.addEventListener('click', function(evt) {
   console.log('vir button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

leoObj.addEventListener('click', function(evt) {
   console.log('leo button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

canObj.addEventListener('click', function(evt) {
   console.log('can button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

gemObj.addEventListener('click', function(evt) {
  console.log('gem button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

tauObj.addEventListener('click', function(evt) {
   console.log('tau button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

ariObj.addEventListener('click', function(evt) {
   console.log('ari button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

pisObj.addEventListener('click', function(evt) {
   console.log('pis button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});

aquObj.addEventListener('click', function(evt) {
   console.log('aqu button clicked: ' + evt.target.id);
   const idName = evt.target.id;
   userPicked(idName);
});
helpObj.addEventListener('click', function(evt) {
  console.log('help button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

 function userPicked(whichButton) {
      console.log('userPicked called: ' +whichButton);
 }


 function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'cap':
      img.src = 'images/cap_large.jpg';
      title.innerHTML = "BONSAI";
      date.innerHTML = "December 22nd - January 19th";
      info.innerHTML = "You're a bonsai! You're the epitome of discipline and responsibility. You thrive in rules and tradition. Growing Bonsai requires a lot of discipline and control just like you.";
      stopAllAudio();
      bonsaiObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'sag':
      img.src = 'images/sag_large.jpg';
      title.innerHTML = "AIR PLANT";
      date.innerHTML = "November 22nd - December 21st";
      info.innerHTML = "You're an air plant! You tend to be adventurous, always ready to explore. You're also independent and go after you want. As an adaptable traveler, you're just like an air plant, free to grow anywhere.";
      stopAllAudio();
      airObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'sco':
      img.src = 'images/sco_large.jpg';
      title.innerHTML = "SNAKE PLANT";
      date.innerHTML = "October 23rd - November 21st";
      info.innerHTML = "You're a snake plant! Also known as mother-in-law's tongue. They're independent and prefer to be left on their own. As low-light plants needing minimal watering, they don't need much attention.";
      stopAllAudio();
      snakeObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'lib':
      img.src = 'images/lib_large.jpg';
      title.innerHTML = "PEACE LILY";
      date.innerHTML = "September 23rd - October 22nd";
      info.innerHTML = "You're a peace lily! You're rational and balanced and understand the complex nature of human relationships. You put others before yourself and you're great at compromising. Peace lilies are well known for their air purifying qualities and bloom beautiful flowers.";
      stopAllAudio();
      lilyObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'vir':
      img.src = 'images/vir_large.jpg';
      title.innerHTML = "STROMANTHE TRIOSTAR";
      date.innerHTML = "August 23rd - September 22nd";
      info.innerHTML = "You're a stromanthe triostar! A beautiful plant with pink and white varigated foliage. You're loyal and gentle, but also have high expectations as a perfectionist. Stromanthes tend to be a bit picky about moisture and sunlight, but are beautiful nonetheless.";
      stopAllAudio();
      triostarObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'leo':
      img.src = 'images/leo_large.jpg';
      title.innerHTML = "MONSTERA DELICIOSA";
      date.innerHTML = "July 23rd- August 22nd";
      info.innerHTML = "You're a monstera deliciosa! A dramatic, proud and showy plant. They're adaptable, but require a bit more attention. With sunlight, the leaves' fenestration is more pronounced.";
      stopAllAudio();
      monsteraObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'can':
      img.src = 'images/can_large.jpg';
      title.innerHTML = "PRAYER PLANT";
      date.innerHTML = "June 21st - July 22nd";
      info.innerHTML = "You're a prayer plant! You're intuitive, compassionate, and protective. Prayer plants need extra care as they can be quite sensitive to changes. Throughout the day, their leaves move up and down. ";
      stopAllAudio();
      prayerObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'gem':
      img.src = 'images/gem_large.jpg';
      title.innerHTML = "MARBLE QUEEN POTHOS";
      date.innerHTML = "May 21st - June 20th";
      info.innerHTML = "You're a marble queen pothos! You're versatile, expressive and kind. You're curious just like pothos which can climb in all directions. The marble queen has beautiful speckled white foliage and is very easy to care for.";
      stopAllAudio();
      pothosObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'tau':
      img.src = 'images/tau_large.jpg';
      title.innerHTML = "JADE PLANT";
      date.innerHTML = "April 20th - May 20th";
      info.innerHTML = "You're a jade plant! You're self reliant and hard working. You love routine and hate big changes. Jade plants grow slowly and steadily. Plant care is easy and the small, circular leaves bring good luck.";
      stopAllAudio();
      jadeObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'ari':
      img.src = 'images/ari_large.jpg';
      title.innerHTML = "BARREL CACTUS";
      date.innerHTML = "March 21st - April 19th";
      info.innerHTML = "You're a barrel cactus! You're passionate, bold and ambitious. These prickly, sun-loving plants are perfect for your fiery nature. Despite the prickly exterior, they can flower with enough sunlight. They're easy to care for and need minimal watering.";
      stopAllAudio();
      cactusObj.play();
      modal.hidden = !modal.hidden;
      break;

    case 'pis':
      img.src = 'images/pis_large.jpg';
      title.innerHTML = "ALOE VERA";
      date.innerHTML = "February 19th - March 21st";
      info.innerHTML = "You're an aloe! You are an empathetic and nurturing person. A natural-born healer! This succulent is well known for its healing properties. You can use the gel inside on burns.  ";
      stopAllAudio();
      aloeObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'aqu':
        img.src = 'images/aqu_large.jpg';
        title.innerHTML = "RAVEN ZZ";
        date.innerHTML = "January 20th - February 18th";
        info.innerHTML = "You're a Raven ZZ! A rare variety of the ZZ plant. You're independent, progressive and a humanitarian. ZZs are associated with understanding and forgiveness. They also don't need much light or water, independent and strong just like you!";
        stopAllAudio();
        zzObj.play();
        modal.hidden = !modal.hidden;
        break;

        case 'help':
          img.src = 'images/help.jpg';
          title.innerHTML = "HELP";
          date.innerHTML = "What Houseplant are You?";
          info.innerHTML = "To find out what houseplant you are, click on any of the plant images. Or you can enter your birthday in the box on the front page and a plant for you will pop up. Feel free to see what other plants your family and friends are!";
          modal.hidden = !modal.hidden;
          break;
    }
}


 //calendar//

 const userSubmitObj = document.getElementById('submit');

 userSubmitObj.addEventListener('click', function() {
    console.log('User clicked on submit button');

    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is ' +userBday);

    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);

    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);

    let AstroSign= "";

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
      AstroSign = "cap";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
      AstroSign = "sag";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
      AstroSign = "sco";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
      AstroSign = "lib";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
      AstroSign = "vir";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
      AstroSign = "leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
      AstroSign = "can";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
      AstroSign = "gem";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
      AstroSign = "tau";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
      AstroSign = "ari";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
      AstroSign = "pis";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
      AstroSign = "aqu";
    }

    console.log('AstroSign is: ' + AstroSign);
    userPicked(AstroSign);


 });


 //MODAL!//

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  console.log('Close this modal!');
  modal.hidden = !modal.hidden;
});

const img = document.getElementById('img');
const title = document.getElementById('title');
const date = document.getElementById('date');
const info = document.getElementById('info');

// SOUNDS!
const bonsaiObj = document.getElementById('soundBonsai');
const airObj = document.getElementById('soundAir');
const snakeObj = document.getElementById('soundSnake');
const lilyObj = document.getElementById('soundLily');
const triostarObj = document.getElementById('soundTriostar');
const monsteraObj = document.getElementById('soundMonstera');
const prayerObj = document.getElementById('soundPrayer');
const pothosObj = document.getElementById('soundPothos');
const jadeObj = document.getElementById('soundJade');
const cactusObj = document.getElementById('soundCactus');
const aloeObj = document.getElementById('soundAloe');
const zzObj = document.getElementById('soundZz');

function stopAllAudio() {
  bonsaiObj.pause();
  bonsaiObj.currentTime = 0;
  //
  airObj.pause();
  airObj.currentTime = 0;
  //
  snakeObj.pause();
  snakeObj.currentTime = 0;
 //
  lilyObj.pause();
  lilyObj.currentTime = 0;
 //
  triostarObj.pause();
  triostarObj.currentTime = 0;
 //
  monsteraObj.pause();
  monsteraObj.currentTime = 0;
 //
  prayerObj.pause();
  prayerObj.currentTime = 0;
 //
  pothosObj.pause();
  pothosObj.currentTime = 0;
 //
  jadeObj.pause();
  jadeObj.currentTime = 0;
 //
  cactusObj.pause();
  cactusObj.currentTime = 0;
 //
  aloeObj.pause();
  aloeObj.currentTime = 0;
 //
  zzObj.pause();
  zzObj.currentTime = 0;

}