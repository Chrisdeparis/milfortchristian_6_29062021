import { getJsonData } from './getJsonData.js'

// get Photographers
const getPhotographers = () => {
  return new Promise(res => {
    getJsonData().then(data => {
      res(data.photographers);
    });
  });
};

export { getPhotographers };