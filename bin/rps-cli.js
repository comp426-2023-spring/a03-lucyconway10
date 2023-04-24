#!/usr/bin/env node

import { rps } from "../lib/rpsls.js";
import minimist from "minimist";

const helpMessage = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples: 
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`

const rulesMessage = `Rules for Rock Paper Scissors:
  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`

const args = minimist(process.argv.slice(2));

if (args.r || args.rules) {
    console.log(rulesMessage);
    process.exit(0);
}

if (args.h || args.help) {
    console.log(helpMessage);
    process.exit(0);
}

try {
    console.log(JSON.stringify(rps(args._[0])));
} catch (error) {
    if (error instanceof RangeError) {
        console.log(`${args._[0]} is out of range.`);
        console.log(rulesMessage);
        process.exit();
    }
}