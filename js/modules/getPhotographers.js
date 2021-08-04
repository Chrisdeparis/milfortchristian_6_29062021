import { getJsonData } from './getJsonData.js'

// get Photographers
const getPhotographers = () => {
  return new Promise((resolve, reject) => {
    getJsonData().then(data => {
      resolve(data.photographers);
      
    })
    .catch(error  => reject(error))
  });
};

export { getPhotographers };