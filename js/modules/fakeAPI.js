import data from '../FishEyeData.js';


const fakeAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
  }

export { fakeAPI };