
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

 const displayObj = document.getElementById('display');

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

 function userPicked(whichButton) {
      console.log('userPicked called: ' +whichButton);
 }


 function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'pis':
      zDisplayImgObj.src = 'images/pis_large.jpg';
      zTitleObj.innerHTML = "ALOE VERA";
      zDateRangeObj.innerHTML = "February 19th - March 21st";
      zMoreInfoObj.innerHTML = "You're an aloe! You are an empathetic and nurturing person. A natural-born healer! This succulent is well known for its healing properties. You can use the gel inside on burns.  ";
      modal.hidden = !modal.hidden;
      break;

      case 'aqu':
        zDisplayImgObj.src = 'images/aqu_large.jpg';
        zTitleObj.innerHTML = "ZZ RAVEN";
        zDateRangeObj.innerHTML = "January 20th - February 18th";
        zMoreInfoObj.innerHTML = "blah";
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


 }, false);


 //Modal//

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  console.log('Close this modal!');
  modal.hidden = !modal.hidden;
});

const zDisplayImgObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');