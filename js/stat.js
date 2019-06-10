'use strict';

window.renderStatistics = (function (ctx, names, times) {
  var textColor = 'black';

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = textColor;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = times[0];

  for (var i = 0; i <= times.length - 1; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }

  var histogramPosition = 140;

  var HISTOGRAM_HEIGHT = 150;
  var HISTOGRAM_WIDTH = 40;
  var HISTOGRAM_STEP = 50;

  for (var j = 0; j <= names.length - 1; j++) {
    var timeHeight = Math.round(HISTOGRAM_HEIGHT * times[j] / maxTime);
    var histogramColorOpacity = Math.random();

    ctx.fillStyle = 'rgba(0, 0, 255,' + histogramColorOpacity + ')';
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(histogramPosition, 90 + HISTOGRAM_HEIGHT - timeHeight, HISTOGRAM_WIDTH, timeHeight);

    ctx.fillStyle = textColor;
    ctx.fillText(Math.round(times[j]), histogramPosition, 80 + HISTOGRAM_HEIGHT - timeHeight);
    ctx.fillText(names[j], histogramPosition, 260);
    histogramPosition += HISTOGRAM_WIDTH + HISTOGRAM_STEP;
  }
});
