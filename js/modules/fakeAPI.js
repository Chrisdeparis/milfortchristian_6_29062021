let data; 

const fakeAPI = () => {
    return new Promise(res => {
      setTimeout(() => res(data), 1);
    });
  }

export { fakeAPI };