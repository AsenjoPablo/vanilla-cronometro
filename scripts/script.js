const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const splitsGroup = document.getElementById('splits-group');
const splitButton = document.getElementById('split-button');

const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const cronometro = new Cronometro();

startButton.addEventListener('click', () => {cronometro.start()});
pauseButton.addEventListener('click', () => {cronometro.pause()});
stopButton.addEventListener('click', () => {cronometro.stop()});
splitButton.addEventListener('click', () => {cronometro.split()});