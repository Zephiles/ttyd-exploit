
// Build our WAT WebAssembly modules.

import * as path from 'path';
import * as fs from 'fs';

function buildData(filename: string): string {
    const binary = fs.readFileSync(path.join(__dirname, filename));
    return `"${binary.toString('base64')}"`;
}

function main() {
    const out = `
const BinaryDataInit = {
    [GameVersion.JP]: ${buildData('bin/Init_JP.bin')},
    [GameVersion.EU]: ${buildData('bin/Init_EU.bin')},
    [GameVersion.US]: ${buildData('bin/Init_US.bin')},
};

const BinaryDataMain = {
    [GameVersion.JP]: ${buildData('bin/Main_JP.bin')},
    [GameVersion.EU]: ${buildData('bin/Main_EU.bin')},
    [GameVersion.US]: ${buildData('bin/Main_US.bin')},
};
`;
    fs.writeFileSync(path.join(__dirname, 'BinaryData.ts'), out);
}

main();
