#!/usr/bin/env node
import { rpsls } from "/lib/rpsls.js"
import minimist  from "minimist";

// take input
const input = minimist(process.argv.slice(2));

if(input.h || input.help){
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
        ' - Scissors CUTS Paper\n',
        ' - Paper COVERS Rock\n',
        ' - Rock SMOOSHES Lizard\n',
        ' - Lizard POISONS Spock\n',
        ' - Spock SMASHES Scissors\n',
        ' - Scissors DECAPITATES Lizard\n',
        ' - Lizard EATS Paper\n',
        ' - Paper DISPROVES Spock\n',
        ' - Spock VAPORIZES Rock\n',
        ' - Rock CRUSHES Scissors');
    process.exit(0);
}

if(input.r || input.rules){
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
        ' - Scissors CUTS Paper\n',
        ' - Paper COVERS Rock\n',
        ' - Rock SMOOSHES Lizard\n',
        ' - Lizard POISONS Spock\n',
        ' - Spock SMASHES Scissors\n',
        ' - Scissors DECAPITATES Lizard\n',
        ' - Lizard EATS Paper\n',
        ' - Paper DISPROVES Spock\n',
        ' - Spock VAPORIZES Rock\n',
        ' - Rock CRUSHES Scissors');
    process.exit(0);
}

let args = rpsls(input._[0]);
if(args == 'out-of-range-error'){
    console.log(input._[0] + ' is out of range.')
    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
    console.log('');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit');
    console.log('');
    console.log('Examples:');
    console.log('  node-rpsls\t  Return JSON with single player RPSLS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:');
    console.log('');
    console.log(' Scissors CUTS Paper');
    console.log(' Paper COVERS Rock');
    console.log(' Rock SMOOSHES Lizard');
    console.log(' Lizard POISONS Spock');
    console.log(' Spock SMASHES Scissors');
    console.log(' Scissors DECAPITATES Lizard');
    console.log(' Lizard EATS Paper');
    console.log(' Paper DISPROVES Spock');
    console.log(' Spock VAPORIZES Rock');
    console.log(' Rock CRUSHES Scissors');
} else{
    console.log(JSON.stringify(args));
}