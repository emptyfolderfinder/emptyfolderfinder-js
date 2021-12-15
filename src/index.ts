import { checkDirectory, deleteDirectories } from './directory';
import { printHelpMessage, printDirectories } from './helper';

function main(): void {
  const args = process.argv;
  let del = false;
  let path = '';

  if (args.length < 3) {
    printHelpMessage();
    return;
  }

  if (args[2] === '-d') {
    if (args.length !== 4) {
      printHelpMessage();
    }

    del = true;
    path = args[3];
  } else {
    path = args[2];
  }

  const dirs = checkDirectory(path);

  if (dirs.length === 0) {
    console.log('No empty directories found');
    return;
  }

  if (del) {
    deleteDirectories(dirs);

    console.log('Delete the following directories');
    printDirectories(dirs);
  } else {
    printDirectories(dirs);
  }
}

main();
