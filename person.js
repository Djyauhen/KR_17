class Person {

    #birthday;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get birthday() {
        this.#birthday = prompt('введите дату рождения в формате "мм-дд-гггг"');
        return this.#birthday;
    }

    set birthday(day) {

    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let friend = new Person('Ivan', 'Polovinkin');
console.log(friend.getFullName());
console.log(friend);

//
// let date = new Date().getMonth();
//
// console.log(date);

