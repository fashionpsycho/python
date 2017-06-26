//スマホの閲覧時間をグラフに描画する
(function(labels, data){

  let ctx = document.getElementById("myChart").getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels, //ここに日付
      datasets: [{
        label: 'スマホ閲覧時間',
        data: data, //ここにスマホ閲覧時間
        fill: false,
        borderColor: [
            'rgba(255,99,132,1)'
          ],
        borderWidth: 1
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
          }]
      }
    }
  });
})(window.dateList, window.usageData);
