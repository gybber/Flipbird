// 标题中的小鸟
var hTitle = document.getElementById('headTitle');
var tBird = document.getElementById('headBird');
//先中两块草地
var grassLand1 = document.getElementById('grassLand1');
var grassLand2 = document.getElementById('grassLand2');
// 让草地往左移动
var landTimer = setInterval(landRun, 30);
function landRun() {
  if(grassLand1.offsetLeft <= -343) {
    grassLand1.style.left = "343px";
  }
  if(grassLand2.offsetLeft <= -343) {
    grassLand2.style.left = "343px";
  }
  grassLand1.style.left = grassLand1.offsetLeft -3 + 'px';
  grassLand2.style.left = grassLand2.offsetLeft -3 + 'px';
}

// console.log(hTitle);
// 定时器
var index = 0; //开始 0 结束 1
var imgArr = ['img/bird0.png','img/bird1.png'];
var y = 3;
setInterval(headWave,200);
function headWave() {
  // console.log('飞');
  y *= -1;
  tBird.src = imgArr[index++];
  if(index == 2) {  //边界
    index = 0;
  }
  hTitle.style.top = hTitle.offsetTop + y + 'px';

  // index 0|1
  // 小鸟的图片切换
  // 整个标题上下抖动
}