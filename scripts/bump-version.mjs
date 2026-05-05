import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const msg = readFileSync('.git/COMMIT_EDITMSG', 'utf8').trim();

const isBreaking = msg.includes('BREAKING CHANGE') || /^[a-z]+(\(.+\))?!:/.test(msg);
const type = msg.match(/^([a-z]+)(\(.+\))?(!)?:/)?.[1] ?? '';

let bump = null;
if (isBreaking) bump = 'major';
else if (type === 'feat') bump = 'minor';
else if (['fix', 'perf', 'refactor', 'deps'].includes(type)) bump = 'patch';

if (!bump) process.exit(0);

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
let [major, minor, patch] = pkg.version.split('.').map(Number);

if (bump === 'major') { major++; minor = 0; patch = 0; }
else if (bump === 'minor') { minor++; patch = 0; }
else { patch++; }

pkg.version = `${major}.${minor}.${patch}`;
writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');

execSync('git add package.json');
console.log(`bumped to ${pkg.version} (${bump})`);
