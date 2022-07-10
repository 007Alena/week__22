
const http = new XMLHttpRequest
var url = "https://my-json-server.typicode.com/007Alena/week_22/db";
http.open("GET", url,true);
http.send();
http.onreadystatechange = function(){
    if (this.readyState ==4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let day = data.deals.map(function(elem){
            return elem.date;
        });
        let home = data.deals.map(function(elem){
            return elem.home;
        });
        let study = data.deals.map(function(elem){
            return elem.study;
        });

        const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: day,
        datasets: [{
            label: 'Задачи по учебе',
            data: study,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 3
        },{
            label: 'Задачи по дому',
            data: home,
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
    }
}

$(document).on('ready', function () {
    $(".center").slick();
});

