/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};

  for (let i = 1; i < names.length; i++) {
    const arr1 = names.slice();
    arr1.splice(i, 1);

    if (arr1.includes(names[i])) {
      let c = names[i];
      c = `${names[i]}(${1})`;
      names.splice(i, 1, c);
    }

    if (obj[names[i]] !== undefined) {
      ++obj[names[i]];
    } else {
      obj[names[i]] = 1;
    }
  }

  for (let i = names.length; i > 0; i--) {
    if (obj[names[i]] > 1) {
      const co = obj[names[i]];
      --obj[names[i]];
      const v = names[i].split('');
      v.splice(names[i].length - 2, 1, co);
      names.splice(i, 1, v.join(''));
    }
  }
  return names;
}

module.exports = renameFiles;
