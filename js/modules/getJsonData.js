let json;
// get Json Data
const getJsonData = () => {
    return fetch('./db/FishEyeData.json').then((response) => {
    return response
      .json()
      .then((data) => {
        json = data;
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export { getJsonData };
