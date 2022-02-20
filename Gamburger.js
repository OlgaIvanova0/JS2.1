"use strict";

class Gamburger {
    constructor(size, stuffing, topping, price, calories){
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.price = price;
        this.calories = calories;
    }
    //заносим в свойства все значения меню

    //размер 
    bigGambName = 'большой'
    bigGambPrice = 100
    bigGambCalories = 40

    smallGambName = 'маленький'
    smallGambPrice = 50
    smallGambCalories = 20

    //добавки 
    cheeseStuffName = 'сыр'
    cheeseStuffPrice = 10
    cheeseStuffCalories = 20

    saladStuffName = 'салат'
    saladStuffPrice = 20
    saladStuffCalories = 5

    potatoStuffName = 'картофель'
    potatoStuffPrice = 15
    potatoStuffCalories = 10

    //топпинги
    seasoningToppingName = 'специи'
    seasoningToppingPrice = 15
    seasoningToppingCalories = 0

    sauceToppingName = 'майонез'
    sauceToppingPrice = 20
    sauceToppingCalories = 5

    noToppingName = 'без добавок'

    //массивы для значений добавок, т.к. их можно выбрать несколько
    stuffingArr = []
    resultStufArr = []
    
    //собираем новый бургер
    newGamb(){
        let newGambButton = document.getElementById('newGamb');
        this.stuffingArr = [];
        newGambButton.addEventListener('click',() =>{
            this.resultSize(); //расчет цены и калорий для каждого размера бургера
            this.resultStuf();//расчет цены и калорий для каждой добавки для бургера
            
            let nextTopping = confirm('Хочешь еще добавить начинку?'); //возможность выбрать еще одну начинку
            if(nextTopping === true){
                this.resultStuf();
                nextTopping = confirm('Хочешь еще добавить начинку?');//возможность выбрать еще одну начинку
                    if(nextTopping === true){
                       this.resultStuf();
                    };
            };

            this.resultTopping(); //расчет цены и калорий для каждого топпинга для бургера           
            alert(`Ты выбрал ${this.size} гамбургер, начинку "${this.stuffingArr}" с добавкой "${this.topping}"`);
            alert(`Твой гамбургер стоит ${this.price} руб. и содержит ${this.calories} кал.`);
            this.price = 0;
            this.calories = 0;
            this.stuffingArr = [];
            this.resultStufArr = [];
        }); 
        
    }
    
    //расчет цены и калорий для каждого размера бургера
    resultSize(){
        let resultSize = +prompt('Выбирай размер гамбургера. Нажми 1 если хочешь большой бургер и 2 если хочешь маленький');
        if(Number.isNaN(resultSize)||resultSize < 1||resultSize > 2||!Number.isInteger(resultSize)){
            alert('Ты ввел неправильное число! Попробуй заново.');
            resultSize = +prompt('Выбирай размер гамбургера. Нажми 1 если хочешь большой бургер и 2 если хочешь маленький');
        };
        if(resultSize === 1) {
            this.size = this.bigGambName;
            this.price = this.price + this.bigGambPrice;
            this.calories = this.calories + this.bigGambCalories;
        } else if (resultSize === 2){
            this.size = this.smallGambName;
            this.price = this.price + this.smallGambPrice;
            this.calories = this.calories + this.smallGambCalories;
        };
    }
    
     //расчет цены и калорий для каждой добавки для бургера
    resultStuf(){
        let resultStuf = +prompt('Какую хочешь начинку гамбургера? Нажми 1 если хочешь сыр, 2 если хочешь салат и 3 если мечтаешь о картошке');
        
        let examination = () => { 
            if(Number.isNaN(resultStuf)||resultStuf < 1||resultStuf > 3||!Number.isInteger(resultStuf)){
                alert('Ты ввел неправильное число! Попробуй заново.');
                resultStuf = +prompt('Какую хочешь начинку гамбургера? Нажми 1 если хочешь сыр, 2 если хочешь салат и 3 если мечтаешь о картошке');
            };  
        };
        
        let examinationNext = () =>{
        for(let i = 0; i < 5; i++) {
            if (this.resultStufArr[i] === resultStuf) {
                alert ('Эта начинка уже выбрана! Положи другую.');
                resultStuf = +prompt('Какую хочешь начинку гамбургера? Нажми 1 если хочешь сыр, 2 если хочешь салат и 3 если мечтаешь о картошке');
            
            }; 
        }; 
        };
        examination(resultStuf);
        examinationNext(resultStuf);
        examination(resultStuf);
        examinationNext(resultStuf);

    
        if(resultStuf === 1) {
            this.stuffing = this.cheeseStuffName;
            this.price = this.price + this.cheeseStuffPrice;
            this.calories = this.calories + this.cheeseStuffCalories;
        } else if(resultStuf === 2) {
            this.stuffing = this.saladStuffName;
            this.price = this.price + this.saladStuffPrice;
            this.calories = this.calories + this.saladStuffCalories;
        } else if(resultStuf === 3){
            this.stuffing = this.potatoStuffName;
            this.price = this.price + this.potatoStuffPrice;
            this.calories = this.calories + this.potatoStuffCalories;
        };

        this.resultStufArr.push(resultStuf);
        this.stuffingArr.push(this.stuffing)        
    }

    //расчет цены и калорий для каждого топпинга для бургера
    resultTopping(){
        let resultTopping = +prompt('Какую хочешь добавку для гамбургера? Нажми 1 если хочешь побольше специй, 2 если хочешь майонеза и 3 если не хочешь ничего добавлять');
            if(Number.isNaN(resultTopping)||resultTopping < 1||resultTopping > 3||!Number.isInteger(resultTopping)){
                alert('Ты ввел неправильное число! Попробуй заново.');
                resultTopping = +prompt('Какую хочешь добавку для гамбургера? Нажми 1 если хочешь побольше специй и 2 если хочешь майонеза и 3 если не хочешь ничего добавлять');
            };
            if(resultTopping === 1) {
                this.topping = this.seasoningToppingName;
                this.price = this.price + this.seasoningToppingPrice;
                this.calories = this.calories + this.seasoningToppingCalories;
            } else if (resultTopping === 2){
                this.topping = this.sauceToppingName;
                this.price = this.price + this.sauceToppingPrice;
                this.calories = this.calories + this.sauceToppingCalories;
            } else if (resultTopping === 3){
                this.topping = this.noToppingName;
            };
        }
};

