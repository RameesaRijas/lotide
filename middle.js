//getting input arrays
const middle = (arrayOfElement) => {
  let middleElementArray = [];
  if (arrayOfElement.length > 2) {
    // even-length array (two middle elements)
    if (arrayOfElement.length % 2 === 0) {
      let middleEvenArray = arrayOfElement[(arrayOfElement.length / 2) - 1];
      middleElementArray.push(middleEvenArray);
    }
    let middleElement = arrayOfElement[Math.floor(arrayOfElement.length / 2)];
    middleElementArray.push(middleElement);
  }
  return middleElementArray;
};

module.exports = middle;