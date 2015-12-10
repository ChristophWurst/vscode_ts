/// <reference path="../typings/tsd.d.ts" />
/// <reference path="ILogService.ts" />

class ScreenLogger implements ILogService {
	private elemId: string = "#log-entries";
	private $list: JQuery;

	constructor() {
		this.$list = $(this.elemId);
	}

	public log(msg: string): void {
		var str: string = "["
			+ (new Date()).toLocaleTimeString()
			+ "] "
			+ msg;

		var entry: JQuery = $("<div/>");
		entry.text(str);
		this.$list.prepend(entry);
	}
}

export = ScreenLogger;