var chalk = require('chalk');

// Rainbow display
var rainbowColors = [
	chalk.bgBlack.red,
	chalk.bgBlack.yellow,
	chalk.bgBlack.green,
	chalk.bgBlack.blue,
	chalk.bgBlack.magenta
];

chalk.rainbow = function(str) {
	var arStr = str.split(''),
		out = '';
	for (var i in arStr) {
		if (arStr[i] == ' ' || arStr[i] == '\t' || arStr[i] == '\n')
			out += arStr[i];
		else
			out += rainbowColors[i % rainbowColors.length](arStr[i]);
	}
	return out;
};

module.exports = {
	littlebee : [
			  chalk.bgYellow('   ')+         chalk.bgBlack('                   '),
		      chalk.bgYellow.bold.red(' B ')+chalk.bgBlack.yellow('        \\ /        '),
		 chalk.bgYellow.bold.red(' u ')+chalk.bgBlack.white('        O O        '),
		chalk.bgYellow.bold.red(' m ')+chalk.bgBlack.grey('     /.')+chalk.bgBlack.yellow('=====')+chalk.bgBlack.grey('.\\     '),
		 chalk.bgYellow.bold.red(' b ')+chalk.bgBlack.grey('    /||')+chalk.bgBlack.yellow('=====')+chalk.bgBlack.grey('||\\    '),
		 chalk.bgYellow.bold.red(' l ')+chalk.bgBlack.grey('   /|||')+chalk.bgBlack.yellow('=====')+chalk.bgBlack.grey('|||\\   '),
		 chalk.bgYellow.bold.red(' e ')+chalk.bgBlack.grey('   \\|/  ')+chalk.bgBlack.yellow('===  ')+chalk.bgBlack.grey('\\|/   '),
		 chalk.bgYellow.bold.red(' b ')+chalk.bgBlack.bold.grey('         |         '),
		 chalk.bgYellow.bold.red(' e ')+chalk.bgBlack.grey('                   '),
		      chalk.bgYellow.bold.red(' e ')+chalk.bgBlack('                   '),
		chalk.bold.bgYellow.red('     version v.0.1.15 '),
		''
	].join('\n'),
	rainbowlittlebee : [
			  chalk.bgYellow('   ')+         chalk.bgBlack('                   '),
		      chalk.bgYellow.bold.red(' B ')+chalk.bgBlack.green('        \\ /        '),
		 chalk.bgYellow.bold.red(' u ')+chalk.bgBlack.white('        O O        '),
		chalk.bgYellow.bold.red(' m ')+chalk.bgBlack.white('     ')+chalk.rainbow('/.')+chalk.bgBlack.yellow('=====')+chalk.rainbow('.\\')+chalk.bgBlack('     '),
		 chalk.bgYellow.bold.red(' b ')+chalk.bgBlack.white('    ')+chalk.rainbow('/||')+chalk.bgBlack.yellow('=====')+chalk.rainbow('||\\')+chalk.bgBlack('    '),
		 chalk.bgYellow.bold.red(' l ')+chalk.bgBlack.white('   ')+chalk.rainbow('/|||')+chalk.bgBlack.yellow('=====')+chalk.rainbow('|||\\')+chalk.bgBlack('   '),
		 chalk.bgYellow.bold.red(' e ')+chalk.bgBlack.white('   ')+chalk.rainbow('\\|/')+chalk.bgBlack.yellow('  ===  ')+chalk.rainbow('\\|/')+chalk.bgBlack('   '),
		 chalk.bgYellow.bold.red(' b ')+chalk.bgBlack.bold.grey('         |         '),
		 chalk.bgYellow.bold.red(' e ')+chalk.bgBlack.grey('                   '),
		      chalk.bgYellow.bold.red(' e ')+chalk.bgBlack('                   '),
		chalk.bold.bgYellow.red('        COMPLETE!     '),
		''
	].join('\n'),
	redlittlebee : [
			  chalk.bgYellow('   ')+         chalk.bgBlack('                   '),
		      chalk.bgYellow.bold.red(' B ')+chalk.bgBlack.grey('        \\ /        '),
		 chalk.bgYellow.bold.red(' u ')+chalk.bgBlack.red('        0 0        '),
		chalk.bgYellow.bold.red(' m ')+chalk.bgBlack.grey('     /.')+chalk.bgBlack.red('=====')+chalk.bgBlack.grey('.\\     '),
		 chalk.bgYellow.bold.red(' b ')+chalk.bgBlack.grey('    /||')+chalk.bgBlack.red('=====')+chalk.bgBlack.grey('||\\    '),
		 chalk.bgYellow.bold.red(' l ')+chalk.bgBlack.grey('   /|||')+chalk.bgBlack.red('=====')+chalk.bgBlack.grey('|||\\   '),
		 chalk.bgYellow.bold.red(' e ')+chalk.bgBlack.grey('   \\|/  ')+chalk.bgBlack.red('===')+chalk.bgBlack.grey('  \\|/   '),
		 chalk.bgYellow.bold.red(' b ')+chalk.bgBlack.bold.grey('         |         '),
		 chalk.bgYellow.bold.red(' e ')+chalk.bgBlack.grey('                   '),
		      chalk.bgYellow.bold.red(' e ')+chalk.bgBlack('                   '),
		chalk.bold.bgYellow.red('          ERROR       '),
		''
	].join('\n'),
	go : [
	chalk.bgBlack.white('                                ,-.    '),
    chalk.bgBlack.grey('                                \\_/    '),
    chalk.bgBlack(' ')+chalk.rainbow('WORKING...')+chalk.bgBlack('   ')+chalk.rainbow('-.._.-\'\'-.._..-')+chalk.bgBlack.grey(' -')+chalk.bgBlack.yellow('{|||}')+chalk.bgBlack.yellow('<  '),
    chalk.bgBlack.grey('                                / \\    '),
    chalk.bgBlack.white('                                `-\'    '),
	].join('\n')
};
