let data; 

const fakeAPI = () => {
    return new Promise(res => {
      setTimeout(() => res(data), 2000);
    });
  }

export { fakeAPI };