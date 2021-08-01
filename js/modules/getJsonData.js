let json;
// get Json Data
const getJsonData = () => {
    return fetch('../../db/FishEyeData.json').then((response) => {
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

// share scope json
if(1 == 1) {
  json = getJsonData();
}









export { getJsonData };
