export default class Photographer {
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

console.log(Photographer);
