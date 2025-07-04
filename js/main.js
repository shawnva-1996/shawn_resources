document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    console.log(`Navigating to ${e.target.href}`);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (typeof drawCumulativeChart === 'function') {
    drawCumulativeChart();
  }

  if (typeof drawReturnsChart === 'function') {
    drawReturnsChart();
  }

  if (typeof drawExchangeRateChart === 'function') {
    drawExchangeRateChart();
  }
});