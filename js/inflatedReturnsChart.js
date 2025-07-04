function drawInflatedReturnsChart() {
  const plans = ['5-Year', '10-Year'];
  const phpReturns = [2272795.83, 2061730.35]; // from your model
  const exchangeRateStart = 44.13;
  const exchangeGrowth = 0.022;

  const exchangeRates = [
    exchangeRateStart * Math.pow(1 + exchangeGrowth, 5),
    exchangeRateStart * Math.pow(1 + exchangeGrowth, 10)
  ];

  const sgdAdjustedReturns = phpReturns.map((val, i) => Number((val / exchangeRates[i]).toFixed(2)));

  const ctx = document.getElementById('inflatedReturnsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: plans,
      datasets: [
        {
          label: 'Total Returns (PHP)',
          data: phpReturns,
          backgroundColor: 'darkgreen'
        },
        {
          label: 'SGD Adjusted Returns',
          data: sgdAdjustedReturns,
          backgroundColor: 'indigo'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Investment Growth vs. SGD Appreciation Impact'
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const label = ctx.dataset.label;
              const val = ctx.parsed.y;
              if (label.includes('PHP')) {
                return `${label}: ₱${val.toLocaleString()}`;
              } else {
                return `${label}: S$${val.toLocaleString()}`;
              }
            }
          }
        },
        legend: { position: 'bottom' }
      },
      scales: {
        y: {
          title: { display: true, text: 'Value' },
          beginAtZero: true
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeOutElastic'
      }
    }
  });
}