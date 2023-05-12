
function profile() {
  const myElement1 = document.getElementById('myElement1');
  const myElement2 = document.getElementById('myElement2');
  const myElement3 = document.getElementById('myElement3');
  const myElement4 = document.getElementById('myElement4');
  const myElement5 = document.getElementById('myElement5');
  const myElement6 = document.getElementById('myElement6');




  setTimeout(function () {
    myElement1.style.backgroundColor = '#3AB748';
  }, 2000);

  setTimeout(function () {
    myElement2.style.backgroundColor = '#3AB748';
  }, 4000);
  setTimeout(function () {
    myElement3.style.backgroundColor = '#3AB748';
  }, 6000);
  setTimeout(function () {
    myElement4.style.backgroundColor = '#3AB748';
  }, 8000);
  setTimeout(function () {
    myElement5.style.backgroundColor = '#3AB748';
  }, 10000);
  setTimeout(function () {
    myElement6.style.backgroundColor = '#3AB748';
  }, 12000);



  const progressbar = document.getElementById("line1");
  const changeProgress = (progress) => {
    progressbar.style.height = `${progress}px`;

  };
  setTimeout(() => changeProgress(35), 3000);


  const progressbar2 = document.getElementById("line2");
  const changeProgress2 = (progress) => {
    progressbar2.style.height = `${progress}px`;

  };
  setTimeout(() => changeProgress2(35), 5000);

  const progressbar3 = document.getElementById("line3");
  const changeProgress3 = (progress) => {
    progressbar3.style.height = `${progress}px`;

  };
  setTimeout(() => changeProgress3(35), 7000);

  const progressbar4 = document.getElementById("line4");
  const changeProgress4 = (progress) => {
    progressbar4.style.height = `${progress}px`;

  };
  setTimeout(() => changeProgress4(35), 9000);

  const progressbar5 = document.getElementById("line5");
  const changeProgress5 = (progress) => {
    progressbar5.style.height = `${progress}px`;

  };
  setTimeout(() => changeProgress5(35), 11000);

}
