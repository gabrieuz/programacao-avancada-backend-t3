const os = require("os");
const log = require("./logger");

const { freemem, totalmem } = os;

setInterval(() => {
	const total = parseInt(totalmem() / 1024 / 1024);
	const freeMem = parseInt(freemem() / 1024 / 1024);
	const usage = 100 - parseInt((freeMem / total) * 100);
	const data = new Date();
	const timeAndDate = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;

	const stats = {
		total: `${total} MB`,
		livre: `${freeMem} MB`,
		usado: `${usage}%`,
		data: timeAndDate,
	};

	console.clear();
	console.log("======= PC STATS =======");
	console.table(stats);

	log(`${JSON.stringify(stats)}\n`);
}, 1000);
