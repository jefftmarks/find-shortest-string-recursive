function findShortestStringRecursive(arr) {
	if (arr.length === 1) return arr[0];

	const shortest = arr[0].length <= arr[1].length ? arr[0] : arr[1];

	if (arr.length == 2) return shortest

	return findShortestStringRecursive([shortest, ...arr.slice(2)])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
compare element at index 0 with element at index 1
if 0 is greater length than 1, push 0 to end of array and vice versa
run method on same arr but slice from index 2

*/
