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
	bigbee : [
		'',
		    chalk.bgBlack.grey('                      MM                '),
		    chalk.bgBlack.grey('          MMM        MM                 '),                          
		    chalk.bgBlack.grey('              MM   MM                   '),                     
		    chalk.bgBlack.grey('                 MM                     '),        
		  chalk.bgBlack.yellow('               $MMMMMM$                 '),          
		  chalk.bgBlack.yellow('             MMMMMMMMMMMM               '),           
		  chalk.bgBlack.yellow('            MMMMMMMMMMMMMM              '),     
		  chalk.bgBlack.yellow('            ~MMMMMMMMMMMM~              '),        
		  chalk.bgBlack.yellow('            MM.          MM ')+chalk.bgBlack.grey('M           '),              
		  chalk.bgBlack.grey('        jD')+chalk.bgBlack.yellow('  MMMMMMMMMMMMMMM.  ')+chalk.bgBlack.grey('M?        '),              
		  chalk.bgBlack.grey('      M')+chalk.bgBlack.yellow('    MMMM.      .MMMMM     ')+chalk.bgBlack.grey('M      '),               
		  chalk.bgBlack.grey('    M')+chalk.bgBlack.yellow('     M    ..MMMMM.     M     ')+chalk.bgBlack.grey('.M    '),               
		  chalk.bgBlack.grey('  M')+chalk.bgBlack.yellow('      .MMMMMMMMMMMMMMMMMMM.      ')+chalk.bgBlack.grey('?   '),               
		  chalk.bgBlack.grey(' M')+chalk.bgBlack.yellow('        MMMMMM~      ~MMMMM        ')+chalk.bgBlack.grey('.. '),               
		  chalk.bgBlack.grey('M')+chalk.bgBlack.yellow('         M                 M         ')+chalk.bgBlack.grey('M '),              
		  chalk.bgBlack.grey(':')+chalk.bgBlack.yellow('         MMMMMMMMMMMMMMMMM.M          ')+chalk.bgBlack.grey('8'),              
		  chalk.bgBlack.grey('.')+chalk.bgBlack.yellow('          MMMMMMMMMMMMMMMMM          ')+chalk.bgBlack.grey(': '),             
		  chalk.bgBlack.grey('M')+chalk.bgBlack.yellow('           M7           7M')+chalk.bgBlack.grey('.,M       M  '),            
		  chalk.bgBlack.grey(' M~     MM')+chalk.bgBlack.yellow('   M..MMMMMMM..M     ')+chalk.bgBlack.grey('M__-M    '),           
		  chalk.bgBlack.grey('    M_ M')+chalk.bgBlack.yellow('        MMMMMMM                 '),          
		  chalk.bgBlack.yellow('                  MMM                   '),        
		    chalk.bgBlack.bold.grey('                   |                    '),   
		chalk.bgBlack('                                        '),
		chalk.bold.bgYellow.red('               bumblebee          v0.1.4'),
		''
	].join('\n'),
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
		chalk.bold.bgYellow.red('     version v.0.1.4  '),
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
    chalk.bgBlack(' ')+chalk.rainbow('WORKING...')+chalk.bgBlack('   ')+chalk.rainbow('-.._.-\'\'-.._..-')+chalk.bgBlack.grey(' -')+chalk.bgBlack.yellow('{|||}')+chalk.bgBlack.green('<  '),
    chalk.bgBlack.grey('                                / \\    '),
    chalk.bgBlack.white('                                `-\'    '),
	].join('\n'),
	wawa : chalk.red([
		'',
		'____    __    ____  ___   ____    __    ____  ___       __   __ ',
		'\\   \\  /  \\  /   / /   \\  \\   \\  /  \\  /   / /   \\     |  | |  |',
		' \\   \\/    \\/   / /  ^  \\  \\   \\/    \\/   / /  ^  \\    |  | |  |',
		'  \\            / /  /_\\  \\  \\            / /  /_\\  \\   |  | |  |',
		'   \\    /\\    / /  _____  \\  \\    /\\    / /  _____  \\  |__| |__|',
		'    \\__/  \\__/ /__/     \\__\\  \\__/  \\__/ /__/     \\__\\ (__) (__)',
		'',
		'                 Game over....try again.',
		''
	].join('\n'))
};
