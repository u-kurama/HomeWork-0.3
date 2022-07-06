class Animal {
    constructor(type, age, name) {
        this.type = type,
        this.age = age, 
        this.name = name
    }  
    sayType() {
        console.log(`Его порода ${this.type}`);
    }

    sayAge() {
        console.log(`Ему ${this.age} лет.`);
    }

    sayName() {
        console.log(`Его зовут ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(type, age, name, gav){
        super(type, age, name)
        this.gav = gav
    }

    sayGav() {
        console.log(`Голос!... ${this.gav}`);
    }
}

class Cat extends Animal {
    constructor(type, age, name, jump){
        super(type, age, name)
        this.jump = jump
    }

    sayJump() {
        console.log(`Кот ${this.jump}`);
    }
}

class Wolf extends Dog {
    constructor(type, age, name, gav, weigth){
        super(type, age, name, gav)
        this.weigth = weigth
    }

    sayWeigth() {
        console.log(`Масса волка ${this.weigth}`);
    }
}

class Tiger extends Cat {
    constructor(type, age, name, jump, weigth){
        super(type, age, name, jump)
        this.weigth = weigth
    }

    sayWeigth() {
        console.log(`Масса тигра ${this.weigth}`);
    }
}

const dog = new Dog('Хаски', '7', 'Шарик', 'Гаф-гаф')
dog.sayGav()

const cat = new Cat('Сиамская', '12', 'Мурка', 'прыгает')
cat.sayJump()

const wolf = new Wolf('Лесной', '17', 'Акела', 'рык', '78кг')
wolf.sayWeigth()

const tiger = new Tiger('Сибирский', '3', 'Шерхан', 'лазит', '290кг')
tiger.sayWeigth()