const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];

/* Alternate initiatilize function using for loop instead of for each + arrow functions

function initialize() {
    for (let i in setData.data) {
        function matchThemeID(element) {
            if (setData.data[i].theme_id === element.id) {
                var matchedID = element.name;
            }
            return matchedID;
        }
        let x = themeData.find(matchThemeID);
        setData.data[i].theme = x;
        sets.push(setData[i].data);
    }
}*/

function initalize() {
    // Iterate over the setData object using for each
    return new Promise((resolve) => {
      setData.data.forEach((setItem) => {
        // Next we find the matching id in the themeData object
        const theme = themeData.find((themeItem) => {
          if (themeItem.id === setItem.theme_id) {
            return themeItem;
          }
        });
        // Theme now has the matching theme name, now we add a new parameter to the set, and push it to the array
        setItem.theme = theme.name;
        sets.push(setItem);
      });
      resolve();
    });
  }
  
  function getAllSets() {
    return new Promise((resolve, reject) => {
      if (sets) {
        resolve(sets);
      } else {
        reject(new Error("Sets not available"));
      }
    });
  }
  
  function getSetsByID(setID) {
    return new Promise((resolve, reject) => {
      const foundSet = sets.find((set) => set.set_ID === setID);
      if (!foundSet) {
        reject("Set not found");
      } else {
        resolve(foundSet);
      }
    });
  }
  
  function getSetsByTheme(theme) {
    return new Promise((resolve, reject) => {
      const foundSet = sets.find((set) => set.theme === theme);
      if (!foundSet) {
        reject("Set not found");
      } else {
        resolve(foundSet);
      }
    });
  }
  
  module.exports = { getAllSets, getSetsByID, getSetsByTheme, initalize };
  