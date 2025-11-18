const assert = require('assert');
const { execSync } = require('child_process');

try {
  const output = execSync('node index.js', { encoding: 'utf8' }).trim();
  assert.strictEqual(output, 'Hello, DevOps World!');
  console.log('Test passed.');
  process.exit(0);
} catch (err) {
  console.error('Test failed:', err.message);
  process.exit(1);
}
