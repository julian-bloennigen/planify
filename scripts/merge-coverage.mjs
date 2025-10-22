import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const frontendCoverage = './apps/frontend/coverage/lcov.info';
const backendCoverage = './apps/backend/coverage/lcov.info';
const outputCoverage = './coverage/lcov.info';

function mergeLcovFiles() {
  console.log('🔍 Merging coverage files...');

  let mergedContent = '';
  let filesFound = 0;

  // Read frontend coverage
  if (existsSync(frontendCoverage)) {
    console.log('✅ Found frontend coverage');
    const content = readFileSync(frontendCoverage, 'utf-8');
    // Adjust paths to be relative to repo root
    const adjustedContent = content.replace(/SF:(.+)/g, (match, path) => {
      return `SF:apps/frontend/${path}`;
    });
    mergedContent += adjustedContent + '\n';
    filesFound++;
  } else {
    console.log('⚠️  Frontend coverage not found');
  }

  // Read backend coverage
  if (existsSync(backendCoverage)) {
    console.log('✅ Found backend coverage');
    const content = readFileSync(backendCoverage, 'utf-8');
    // Adjust paths to be relative to repo root
    const adjustedContent = content.replace(/SF:(.+)/g, (match, path) => {
      return `SF:apps/backend/${path}`;
    });
    mergedContent += adjustedContent + '\n';
    filesFound++;
  } else {
    console.log('⚠️  Backend coverage not found');
  }

  if (filesFound === 0) {
    console.error('❌ No coverage files found!');
    process.exit(1);
  }

  // Ensure output directory exists
  const outputDir = dirname(outputCoverage);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Write merged coverage
  writeFileSync(outputCoverage, mergedContent);
  console.log(`✅ Merged coverage written to ${outputCoverage}`);
  console.log(`📊 Combined coverage from ${filesFound} source(s)`);
}

mergeLcovFiles();
