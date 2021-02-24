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