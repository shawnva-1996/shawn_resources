function drawReturnsChart() {
  const ctx = document.getElementById('returnsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['5-Year', '10-Year'],
      datasets: [
        {
          label: 'Invested Capital',
          data: [1138554, 1112076],
          backgroundColor: 'skyblue'
        },
        {
          label: 'Total Returns',
          data: [2272795.83, 2061730.35],
          backgroundColor: 'darkgreen'
        }
      ]
    },
    options: {
      animation: {
        duration: 2000,
        easing: 'easeOutQuart'
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'PHP' }
        }
      },
      plugins: {
        title: { display: true, text: 'Investment vs. Returns' },
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString('en-PH', {
              style: 'currency',
              currency: 'PHP'
            })}`
          }
        }
      }
    }
  });
}