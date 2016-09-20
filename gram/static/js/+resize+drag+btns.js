  $(function () {
    $('.screen').resizable({
      minHeight: 490,
      minWidth: 285,
    });

    $('.marble.btn.red').on('click', function(eve) {
      // caching? or just visibility: hidden ?
      screen = $(eve.target).closest('.screen');
      screen.css({
        visiblity: 'hidden'
      });
    });

    $('.marble.btn.green').on('click', function(eve) {
      screen = $(eve.target).closest('.screen');
      screen.css({
        width: '100%',
        height: '100%'
      });
    });

    $('.marble.btn.yellow').on('click', function(eve) {

    });
  });

  // For each item with a `window` class…
  var windows = document.querySelectorAll('.screen');
  [].forEach.call(windows, function (win) {

    // …find the title bar inside it and do something onmousedown
    var title = win.querySelector('.titlebar');
    title.addEventListener('mousedown', function (evt) {

      // Record where the window started
      var real = window.getComputedStyle(win),
          winX = parseFloat(real.left),
          winY = parseFloat(real.top);

      // Record where the mouse started
      var mX = evt.clientX,
          mY = evt.clientY;

      // When moving anywhere on the page, drag the window
      // …until the mouse button comes up
      document.body.addEventListener('mousemove', drag, false);
      document.body.addEventListener('mouseup', function () {
        document.body.removeEventListener('mousemove', drag, false);
      }, false);

      // Every time the mouse moves, we do the following
      function drag(evt) {
        // Add difference between where the mouse is now
        // versus where it was last to the original positions
        win.style.left = winX + evt.clientX-mX + 'px';
        win.style.top  = winY + evt.clientY-mY + 'px';
      };
    },false);
  });
