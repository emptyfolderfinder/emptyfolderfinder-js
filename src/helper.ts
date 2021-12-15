export function printHelpMessage(): void {
  console.log('Usage: npm start [-d] <path>');
  console.log('-d: Delete folders');
}

export function printDirectories(dirs: string[]): void {
  dirs.forEach(dir => {
    console.log(dir);
  });
}
