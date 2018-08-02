const fs = require('fs');
const path = require('path');

const installHooks = () => {
  const source = path.resolve('.githooks/pre-commit');
  const destination = path.resolve('.git/hooks/pre-commit');

  console.log('--> Installing Git Hooks');
  // Check if a pre-commit hook already exists
  if (fs.existsSync(destination)) {
    console.log('Hook already exists');
    return 0;
  }

  // else
  try {
    fs.copyFileSync(source, destination);
    console.log('--> Pre commit hook copied');

    // Check for execute permission and set it
    fs.access(destination, fs.constants.X_OK, (err) => {
      console.log('--> Setting permissions for hooks');
      err && fs.chmod(destination, 0755);
    });

    return 0;
  } catch (err) {
    console.error('Error while installing git hook');
    console.error(err);
  }
}

installHooks();
