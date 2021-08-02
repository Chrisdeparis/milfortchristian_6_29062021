let data; 

const fakeAPI = () => {
    return new Promise(res => {
      setTimeout(() => res(data), 1000);
    });
  }

export { fakeAPI };