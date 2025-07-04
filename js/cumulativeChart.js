function drawCumulativeChart() {
  const ctx = document.getElementById('cumulativeChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['5-Year Plan', '10-Year Plan'],
      datasets: [{
        label: 'Cumulative Projected Returns (PHP)',
        data: [2272795.83, 2061730.35],
        backgroundColor: ['gold', 'silver']
      }]
    },
    options: {
      animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'PHP Value' }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()}`
          }
        }
      }
    }
  });
}