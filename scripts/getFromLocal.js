//スマホの閲覧時間をローカルストレージから出力する
(function () {
  'use strict';

  if (localStorage.dateList && localStorage.usageData) {
    window.dateList = JSON.parse(localStorage.dateList);
    window.usageData = JSON.parse(localStorage.usageData);
  }

}());
