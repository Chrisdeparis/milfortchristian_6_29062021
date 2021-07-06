class  User {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    identite(){
        console.log("le titulaire s'appelle "+this.firstName+' '+this.lastName);
    }   
}

//User();

let user1 = new User('Milfort', 'Christian');
console.log(user1);
let test = user1.identite();
console.log(test);