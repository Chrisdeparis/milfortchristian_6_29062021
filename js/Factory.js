class Photographer {
    constructor( id, name, city, tagline, price, tags, portrait ) {
        this.id = id;
        this.name = name;  
        this.city = city;
        this.tagline = tagline;
        this.price = price;
        this.tags = tags;
        this.portrait = portrait;
    }
    getInfo = () => {
        return { id: this.id, name: this.name, city: this.city, tagline: this.tagline, price: this.price, tags: this.tags, portrait: this.portrait};
    }
    getName = () => {
        return this.name;
    }
    getCity = () => {
        return this.city;
    }
    getTagline = () => {
        return this.tagline;
    }
    getPrice = () => {
        return this.price;
    }
    getTags = () => {
        return this.tags;
    }
    getPortrait = () => {
        return this.portrait;
    }

  }
const photograph1 = new Photographer();
// console.log(photograph1);

class Router {
    constructor(name, routes) {
        this.name = name;
        this.routes = routes;
    }
}

// UI Class: Handle UI Tasks
class Ui {
    static displayPhotographers() {
        const photographers = Store.getPhotographers();
    }
}


// Store Class: Handles Storage
class Store {
    static getPhotographers() {
        let photographers;
        if (localStorage.getItem('photographers') === null) {
            photographers = [];
        } else {
            photographers = JSON.parse(localStorage.getItem('photographers'));
        }
        console.log(photographers);
        return photographers;

    }
}
const store1 = new Store();
console.log(store1);

//if type  = video 
//class video