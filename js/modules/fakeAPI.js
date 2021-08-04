import data from '../FishEyeData.js';


const fakeAPI = () => {
    return new Promise((resolve, reject) => {
       resolve(data);
      
    });
  }

export { fakeAPI };