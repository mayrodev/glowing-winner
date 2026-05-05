import { readFileSync, unlinkSync, existsSync } from 'fs';
import { execSync } from 'child_process';

const flagFile = '.git/BUMP_VERSION';
if (!existsSync(flagFile)) process.exit(0);

const version = readFileSync(flagFile, 'utf8').trim();
unlinkSync(flagFile);

execSync(`git tag v${version}`);
console.log(`tagged v${version}`);
