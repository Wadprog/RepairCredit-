import userType from "./consts/userTypes";
export const helper = {};
//////////////////////////////////////////////////////////////////////////////////////////////
helper.userType = user => {
  return user.level === userType.AFFILIATE ? "AFFILIATE" : "ADMIN";
};

///////////////////////////////////////////////////////////////////////////////////////////
helper.filter_ = (key, value, array, subObj) => {
  const firstElement = array[0];
  if (firstElement[key]) {
    return array.filter(element =>
      element[key].toLowerCase().includes(value.toLowerCase())
    );
  } else {
    if (firstElement[subObj][key]) {
      const newArray = array.filter(element => {
        if (element[subObj][key].toLowerCase().includes(value.toLowerCase()))
          return element;
      });
      console.log(newArray);
      return newArray;
    }
  }
};
///////////////////////////////////////////////////////////////////////////////////////////

helper.filterObj = (array, options, subObj) => {
  if (typeof options !== "object") return array;
  // All keys
  const allKeys = Object.keys(options);
  let result = array;

  allKeys.forEach(key => {
    try {
      console.log(key + ":" + options[key]);
      if (options[key] !== "")
        result = helper.filter_(key, options[key], result, subObj);
      else return;
    } catch (error) {
      console.log("failled");
      console.log(key + ":" + options[key]);
    }
  });

  return result;
};

/////////////////////////////////////////////////
export default helper;
