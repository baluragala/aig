function last(arr) {
  return arr[arr.length - 1];
}

export function first(arr) {
  return arr[0];
}

const publicMembers = { last, first };

export default publicMembers;
