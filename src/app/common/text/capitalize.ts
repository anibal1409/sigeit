

export function capitalize(str: string): string {
  const arr = str.toLowerCase().trim().split(' ');  

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]?.length > 3) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

  }

  return arr.join(" ");
}
