(function () {
  var canvas = document.getElementById('mono-topography');
  var context = canvas && canvas.getContext('2d');
  if (!context) return;

  var width = 0, height = 0, ratio = 1, step = 22;
  var columns = 0, rows = 0, values = new Float32Array(0);
  var time = 0, frameId = 0, lastFrame = 0;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    columns = Math.ceil(width / step) + 1;
    rows = Math.ceil(height / step) + 1;
    values = new Float32Array(columns * rows);
  }

  function hash(x, y) {
    var value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return (value - Math.floor(value)) * 2 - 1;
  }

  function noise(x, y) {
    var ix = Math.floor(x), iy = Math.floor(y);
    var fx = x - ix, fy = y - iy;
    fx *= fx * (3 - 2 * fx);
    fy *= fy * (3 - 2 * fy);
    var topLeft = hash(ix, iy);
    var topRight = hash(ix + 1, iy);
    var bottomLeft = hash(ix, iy + 1);
    var bottomRight = hash(ix + 1, iy + 1);
    var top = topLeft + (topRight - topLeft) * fx;
    var bottom = bottomLeft + (bottomRight - bottomLeft) * fx;
    return top + (bottom - top) * fy;
  }

  function draw(timestamp) {
    frameId = 0;
    if (document.hidden || !canvas.isConnected) return;
    if (!reducedMotion && timestamp - lastFrame < 40) {
      frameId = window.requestAnimationFrame(draw);
      return;
    }

    lastFrame = timestamp;
    context.clearRect(0, 0, width, height);
    var index = 0, x, y;
    for (y = 0; y < rows; y++) {
      for (x = 0; x < columns; x++) {
        var px = x * step, py = y * step;
        values[index++] = noise(px / 330 + time, py / 330) +
          noise(px / 125 - time * .7 + 37, py / 125 + 19) * .32;
      }
    }

    context.lineWidth = 1;
    context.lineCap = 'round';
    context.strokeStyle = 'rgba(236,238,244,.11)';
    for (var layer = 0; layer < 8; layer++) {
      var threshold = layer / 8 * 1.5 - .72;
      context.beginPath();
      for (y = 0; y < rows - 1; y++) {
        for (x = 0; x < columns - 1; x++) {
          var offset = y * columns + x;
          var x0 = x * step, y0 = y * step;
          var corners = [
            [values[offset], x0, y0],
            [values[offset + 1], x0 + step, y0],
            [values[offset + columns + 1], x0 + step, y0 + step],
            [values[offset + columns], x0, y0 + step]
          ];
          var firstX = 0, firstY = 0, count = 0;
          for (var edge = 0; edge < 4; edge++) {
            var start = corners[edge], end = corners[(edge + 1) % 4];
            if ((start[0] > threshold) === (end[0] > threshold)) continue;
            var amount = (threshold - start[0]) / (end[0] - start[0]);
            var crossX = start[1] + (end[1] - start[1]) * amount;
            var crossY = start[2] + (end[2] - start[2]) * amount;
            if (count === 0) {
              firstX = crossX;
              firstY = crossY;
            } else {
              context.moveTo(firstX, firstY);
              context.lineTo(crossX, crossY);
            }
            count++;
          }
        }
      }
      context.stroke();
    }

    if (!reducedMotion) {
      time += .003;
      frameId = window.requestAnimationFrame(draw);
    }
  }

  function start() {
    if (!frameId && !document.hidden) frameId = window.requestAnimationFrame(draw);
  }

  resize();
  start();
  window.addEventListener('resize', function () {
    resize();
    start();
  }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
    } else {
      start();
    }
  });
})();
