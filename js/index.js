const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

refs = {
    body: document.body,
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
};

refs.stop.disabled=true;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const colorSwitcher= ()=> {
      refs.body.style.backgroundColor=
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  };

let intervalId = '';
let random = null;
let colorSwitch = null;

refs.start.addEventListener("click", onStartBtnClick);
refs.stop.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
    refs.start.disabled=true;
    refs.stop.disabled=false;
    intervalId=setInterval(colorSwitcher, 1000)
}
function onStopBtnClick() {
    refs.start.disabled=false;
    refs.stop.disabled=true;
    clearInterval(intervalId);
}