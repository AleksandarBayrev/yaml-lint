import path from 'path';
import fs from 'fs';
import { lint } from 'yaml-lint';
const filename = process.argv[2];
if (!filename) {
    throw new Error('Filename not specified!');
}
const filePath = path.join(__dirname, filename);
if (!fs.existsSync(filePath)) {
    throw new Error(`${filePath} is missing!`);
}
console.log(`Validating ${filePath}...`);
setTimeout(async () => {
    try {
        await lint(fs.readFileSync(filePath).toString());
        console.log(`YAML valid!`);
    } catch(err: any) {
        console.log('YAML invalid!', err.message);
    }
});