import fs from 'fs';

export function checkDirectory(path: string): string[] {
  let result: string[] = [];
  const dirFiles: string[] = [];

  const files = fs.readdirSync(path);

  if (files.length === 0) {
    result.push(path);
    return result;
  }

  files.forEach(file => {
    const relativePath = path + '/' + file;

    const fileStats = fs.statSync(relativePath);

    if (fileStats.isDirectory()) {
      const f = checkDirectory(relativePath);

      if (f) {
        result = result.concat(f);
      }
    } else {
      dirFiles.push(file);
    }
  });

  if (dirFiles.length === 0) {
    result.push(path);
    return result;
  }

  return result;
}

export function deleteDirectories(dirs: string[]): void {
  dirs.forEach(dir => {
    fs.rmdirSync(dir);
  });
}
