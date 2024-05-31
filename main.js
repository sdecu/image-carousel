const docEl = (function() {
  const outer = document.querySelector('.outer');
  const inner = document.querySelector('.inner');
  const leftArrow = document.querySelector('#left');
  const pics = document.querySelectorAll('.pic');
  const pic1 = document.querySelector('#pic1');
  const pic2 = document.querySelector('#pic2');
  const pic3 = document.querySelector('#pic3');
  const rightArrow = document.querySelector('#right');
  const dot1 = document.querySelector('#dot1');
  const dot2 = document.querySelector('#dot2');
  const dot3 = document.querySelector('#dot3');

  return {
    outer,
    inner,
    leftArrow,
    pics,
    pic1,
    pic2,
    pic3,
    rightArrow,
    dot1,
    dot2,
    dot3
  };
});

  function appendPicture  ()