import { getJsonData } from './getJsonData.js'


// get Photographers
const getPhotographers = () => {
  return new Promise((resolve, reject) => {
    getJsonData().then((data) => {
      console.log(data);
      return resolve(data.photographers);
    });
  });
};

export { getPhotographers };