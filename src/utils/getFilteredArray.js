function getFilteredArray(
  filter,
  filterChoice,
  value,
  outputImages,
  origImages
) {
  let tempArray = outputImages;
  if (!isNaN(value)) value = Number(value);
  console.log("tempArray in funct befre=", tempArray);
  switch (filterChoice) {
    case "equal":
      tempArray = outputImages.filter((image) => {
        if (image[filter] === value) return true;
        return false;
      });
      break;
    case "less-than":
      tempArray = outputImages.filter((image) => {
        if (image[filter] < value) return true;
        return false;
      });
      break;
    case "less-than-or-equal":
      tempArray = outputImages.filter((image) => {
        if (image[filter] <= value) return true;
        return false;
      });
      break;
    case "greater-than":
      tempArray = outputImages.filter((image) => {
        if (image[filter] > value) return true;
        return false;
      });
      break;
    case "greater-than-or-equal":
      tempArray = outputImages.filter((image) => {
        if (image[filter] >= value) return true;
        return false;
      });
      break;
    case "not-equal":
      tempArray = outputImages.filter((image) => {
        if (image[filter] !== value) return true;
        return false;
      });
      break;
    case "contains":
      tempArray = outputImages.filter((image) => {
        if (image[filter].toString().includes(value)) return true;
        return false;
      });
      break;
    default:
      tempArray = origImages;
      break;
  }
  console.log("tempArray in funct=", tempArray);
  if (tempArray.length === 0) tempArray = origImages;
  return tempArray;
}
export default getFilteredArray;
