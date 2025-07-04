function drawExchangeRateChart() {
  const years = [];
  const exchangeRates = [];
  const startRate = 44.13;
  const annualGrowth = 0.022;

  for (let i = 0; i <= 15; i++) {
    years.push(2025 + i);
    exchangeRates.push(Number((startRate * Math.pow(1 + annualGrowth, i)).toFixed(2)));
  }

  const ctx = document.getElementById('exchangeRateChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'PHP per 1 SGD',
        data: exchangeRates,
        borderColor: 'crimson',
        backgroundColor: 'rgba(220, 20, 60, 0.1)',
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Projected PHP/SGD Apreciation (2.22% Annually)'
        },
        legend: { display: false }
      },
      scales: {
        x: {
          title: { display: true, text: 'Year' }
        },
        y: {
          beginAtZero: false,
          title: { display: true, text: 'PHP per 1 SGD' }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeOutExpo'
      }
    }
  });
}