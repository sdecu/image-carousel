const docEl = (function() {
  const outer = document.querySelector('.outer');
  const inner = document.querySelector('.inner');
  const leftArrow = document.querySelector('#left');
  const pics = document.querySelectorAll('.pic');
  const pic1 = document.querySelector('#pic1');
  const pic2 = document.querySelector('#pic2');
  const pic3 = document.querySelector('#pic3');
  const rightArrow = document.querySelector('#right');
  const dotsDiv = document.querySelector('.dots-div')
  const dots = document.querySelectorAll('.dots')
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
    dotsDiv,
    dots,
    dot1,
    dot2,
    dot3
  };
})();

docEl.outer


docEl.dot1.onclick = (event) => { appendPictureWithDot(docEl.dot1, docEl.pic1)};
docEl.dot2.onclick = (event) => { appendPictureWithDot(docEl.dot2, docEl.pic2)};
docEl.dot3.onclick = (event) => { appendPictureWithDot(docEl.dot3, docEl.pic3)};

  function appendPictureWithDot  (dot, pic) {
    pic.remove();
    docEl.inner.prepend(pic);
    
    for (element of docEl.dots) {
      element.style.fill = 'black';
    };
    dot.style.fill = 'white';
  }
