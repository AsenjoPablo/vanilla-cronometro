class Cronometro {
	constructor() {
		this.minutes = 0;
		this.seconds = 0;
		this.splits = [];
		this.interval = null;
	}

	start()
	{
		this.interval = setInterval(() => {
			this.updateTimer();
		}, 1000);

		splitButton.disabled = false;
		stopButton.disabled = false;
		this.hideStartButton();

		return this.interval;
	}

	pause() {
		clearInterval(this.interval);
		this.hidePauseButton();
	}

	stop() {
		clearInterval(this.interval);
		this.seconds = 0;
		this.minutes = 0;
		this.clearSplits();

		splitButton.disabled = true;
		stopButton.disabled = true;
		this.hidePauseButton();
		this.updateDOM();
	}

	updateTimer() {
		this.seconds++;

		if (this.seconds === 60) {
			this.seconds = 0;
			this.minutes++;
		}

		if (this.minutes === 60) {
			this.seconds = 0;
			this.minutes = 0;
		}

		this.updateDOM();
	}

	hideStartButton()
	{
		startButton.style.display = 'none';
		pauseButton.style.display = 'inline';
	}

	hidePauseButton()
	{
		startButton.style.display = 'inline';
		pauseButton.style.display = 'none';
	}

	updateDOM() {
		minutes.innerText = (this.minutes).toString().padStart(2, '0');
		seconds.innerText = (this.seconds).toString().padStart(2, '0');
	}


	// splits
	split()
	{
		this.splits.push({
			seconds: this.seconds,
			minutes: this.minutes,
		});

		this.updateSplitsDOM();

		console.log(this.splits)
	}

	clearSplits()
	{
		this.splits = [];
		splitsGroup.innerHTML = '';			// empty
	}

	updateSplitsDOM()
	{
		splitsGroup.innerHTML = '';			// empty

		this.splits.map((split, idx) =>			// re generate
		{
			let splitNode = document.createElement('li');
			splitNode.className = 'split__instance';
			splitNode.innerText = `${idx++} - ${split.minutes.toString().padStart(2, '0')}:${split.seconds.toString().padStart(2, '0')}`;
			splitsGroup.appendChild(splitNode);
		})
	}
}
