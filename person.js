export class Person {

    #birthday;

    constructor(firstName, lastName, birth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birth;
        this.birthday;
    }

    get birthday() {
        let birth = this.#birthday;
        let partsBirth = birth.split('.');//Разделяем дату на месяц, число и год
        if (partsBirth[0] >=1 && partsBirth[0] <=12) {
            return this.#birthday;
        }
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        if (this.birthday) {
            let birth = this.#birthday;
            let partsBirth = birth.split('.');//Разделяем дату на месяц, число и год
            let todayYear = new Date().getFullYear();
            let age = todayYear - partsBirth[2];
            let ageLetter = age % 10;//Остаток от деления
            if (ageLetter >= 5 || ageLetter === 0) {
                return `Возраст: ${age} лет`;
            } if (ageLetter === 1) {
                return `Возраст: ${age} год`;
            } if (ageLetter >= 2 && ageLetter <= 4) {
                return `Возраст: ${age} года`;
            }
        }
    }
}
