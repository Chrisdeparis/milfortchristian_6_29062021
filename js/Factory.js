const Factory = () => {
    this.createPhotographer = function (type) {
        const user;

        if (type === "fulltime") {
            user = new FullTime();
        } else if (type === "parttime") {
            user = new PartTime();
        } else if (type === "temporary") {
            user = new Temporary();
        } else if (type === "contractor") {
            user = new Contractor();
        }

        user.type = type;

        user.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }

        return user;
    }
}
console.log(Factory);


const FullTime = () => {
    this.hourly = "$12";
};

const PartTime = () => {
    this.hourly = "$11";
};

const Temporary = () => {
    this.hourly = "$10";
};

const Contractor = () => {
    this.hourly = "$15";
};

const run = () => {

    const users = [];
    const factory = new Factory();

    users.push(factory.createPhotographer("fulltime"));
    users.push(factory.createPhotographer("parttime"));
    users.push(factory.createPhotographer("temporary"));
    users.push(factory.createPhotographer("contractor"));

    for (const i = 0, len = users.length; i < len; i++) {
        users[i].say();
    }
}
