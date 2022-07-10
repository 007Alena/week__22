$(document).on('ready', function () {
    $(".center").slick();
});

const xmlhttp = new XMLHttpRequest
var url = ""
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        datasets: [{
            label: 'Задачи по учебе',
            data: [5, 2, 6, 3, 4, 2, 6, 3, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 3
        },{
            label: 'Задачи по дому',
            data: [2, 4, 2, 2, 4, 2, 6, 3, 4],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}
);
