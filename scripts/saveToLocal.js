(function(timer){
  $("#timer").html(timer);

  //過去の記録（ローカルない）を取得
if (!localStorage.usageData) {
  localStorage.usageData = JSON.stringify([0]);
}
if (!localStorage.dateList) {
  localStorage.dateList = JSON.stringify([0]);
}


let usageData = JSON.parse(localStorage.usageData);
let dateList = JSON.parse(localStorage.dateList);
let today = getDate();
let timer = dateList[dateList.length - 1];


//もし今日の日付が存在しなければ追加して更新する
//存在していれば、配列の最後の値を更新する
if (dateList.indexOf(today) < 0) {
  dateList.push(today);
  localStorage.dateList = JSON.stringify(dateList);

  //次の日付配列に値を追加する
  usageData.push(timer);
} else {
  usageData[usageData.length - 1] = timer;
}

localStorage.usageData = JSON.stringify(usageData);




function getDate() {
  //日付を取得
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDay();

  today = "" + year + month + day; //stringに変換

  return today;
}

})(window.timer);

