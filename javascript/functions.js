// function myFunc(a, b) {
//   return a + b;
// }

// const myFunc1 = (a, b) => {
//   return a + b;
// };
// const myFunc2 = (a, b) => a + b;

// alert(myFunc(1, 3));
const arrayOfObjects = [
  { id: 1, fl: [{ opt: '', opt1: '' }] },
  { id: 2, fl: [{ opt: '', opt1: '' }] }
];

// Define the new value you want for the 'fl' key
const newFlValue = [{ opt: 'newOptValue', opt1: 'newOpt1Value' }];

// Define the id you want to update
const idToUpdate = 1;

// Iterate through the array and update the 'fl' key for the specified id
const updatedArrayOfObjects = arrayOfObjects.map(obj => {
  if (obj.id === idToUpdate) {
    return {
      ...obj, // Keep the existing properties of the object
      fl: newFlValue // Update the 'fl' key with the new value
    };
  }
  return obj; // For other objects, return them as they are
});

// Now, updatedArrayOfObjects contains the updated objects
console.log(updatedArrayOfObjects);