//スマホの閲覧時間をdeviceOrientationから入手してlocalStorageに保管する
(function () {
  'use strict';

  //ローカルから今日の日付があれば取得したいが今は0でいい
  let timer = 0;

  window.addEventListener("deviceorientation", function (event) {
    //角度に応じてtimerを加算。グローバルに展開していく

    let beta = event.beta;
    $("#beta").html("beta: " + beta);
    $("#timer").html("timer: " + timer);
    timer = checkOrientation(beta, timer);
    window.timer = timer;
  });

  function checkOrientation(beta, timer) {
    if ((beta > 160 && beta < 180) || (beta < -160 && beta > -180)) {
      //画面の向きが下を向いているため、加算しない
    } else {
      //スマホが他の向きを向いていたのでタイマーを加算する
      timer += 1;
    }
    return timer;
  }
}());
