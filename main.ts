/// <reference path="service/ILogService.ts"/>

import ScreenLogger = require("service/ScreenLogger");
import Timer = require("util/Timer");

class App {
	private logger: ILogService;

	constructor(logger: ILogService) {
		this.logger = logger;
	}

	public start(): void {
		this.logger.log("App started");

		var _this = this;
		var cnt: number = 0;
		var t: Timer = new Timer(1000, function() {
			cnt++;
			_this.logger.log("Timer elapsed " + cnt + " times");

			// stop after 10 intervals 
			return cnt < 10;
		});

		t.start();
	}
}

var app: App = new App(new ScreenLogger());
app.start();