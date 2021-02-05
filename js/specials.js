
(() => {
    if (document.querySelector('.carousel')) {
      let pSlides = document.querySelector('.carousel')
      let partnerFlkty = new Flickity(pSlides, {
        draggable: true,
        wrapAround: false,
        prevNextButtons: true,
        pageDots: true,
        adaptiveHeight: false,
        autoPlay: 4000,
        cellAlign: 'center',
        groupCells: 4,
        arrowShape: {
          x0: 10,
          x1: 60, y1: 50,
          x2: 70, y2: 40,
          x3: 30
        },
      });
    }
  })();


