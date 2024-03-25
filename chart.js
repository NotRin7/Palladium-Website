document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('distribution-chart').getContext('2d');
    var distributionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Liquidity', 'Development Fund', 'Marketing', 'Development'],
            datasets: [{
                label: 'Token Distribution',
                data: [90000000, 1000000, 4000000, 5000000],
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffce56',
                    '#4bc0c0'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
