
import NotImplementedException = require("exception/NotImplementedException");

interface ITimerHandler {
	(): boolean;
}

class Timer {
	private intervalTime: number;
	private interval: number;
	private handler: ITimerHandler;

	public constructor(interval: number, handler: ITimerHandler) {
		this.intervalTime = interval;
		this.handler = handler;
	}

	public start(): void {
		var _this = this;
		this.interval = setInterval(function() {
			if (!_this.handler()) {
				clearInterval(_this.interval);
			}
		}, this.intervalTime);
	}

	public stop(): void {
		throw new NotImplementedException();
	}
}

export = Timer;