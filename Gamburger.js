"use strict";

const questions = {
    chooseStaffingBurger: 'Какую хочешь начинку гамбургера? Нажми 1 если хочешь сыр, 2 если хочешь салат и 3 если мечтаешь о картошке',
    wantNewStuffing: 'Хочешь еще добавить начинку?',
    chooseSizeBurger: 'Выбирай размер гамбургера. Нажми 1 если хочешь большой бургер и 2 если хочешь маленький',
    chooseToppingBurger: 'Какую хочешь добавку для гамбургера? Нажми 1 если хочешь побольше специй, 2 если хочешь майонеза и 3 если не хочешь ничего добавлять',
    errorDoubleStuffing: 'Эта начинка уже выбрана! Положи другую.',
    errorText: 'Ты ввел неправильное число! Попробуй заново.',
};



class Gamburger {
    constructor(size, stuffing, topping, price, calories, hambProperties){
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.price = price;
        this.calories = calories;
        this.hambProperties = hambProperties;       
    }  

    //массивы для значений добавок, т.к. их можно выбрать несколько
    stuffingArr = []
    resultStufArr = []
    
    //собираем новый бургер
    newGamb(){
        let newGambButton = document.getElementById('newGamb');
        newGambButton.addEventListener('click',() =>{
            this.calcSize(); //расчет цены и калорий для каждого размера бургера
            this.calcStuf();//расчет цены и калорий для каждой добавки для бургера
            
            let nextTopping = confirm(`${questions.wantNewStuffing}`); //возможность выбрать еще одну начинку
            if(nextTopping){//do while
                this.calcStuf();
                nextTopping = confirm(`${questions.wantNewStuffing}`);//возможность выбрать еще одну начинку
                    if(nextTopping){
                       this.calcStuf();
                    };
            };

            this.calcTopping(); //расчет цены и калорий для каждого топпинга для бургера           
            alert(`Ты выбрал ${this.size} гамбургер, начинку "${this.stuffingArr}" с добавкой "${this.topping}"`);
            alert(`Твой гамбургер стоит ${this.price} руб. и содержит ${this.calories} кал.`);
            this.price = 0;
            this.calories = 0;
            this.stuffingArr = [];
            this.resultStufArr = [];
        }); 
        
    }
    
    //расчет цены и калорий для каждого размера бургера
    calcSize(){
        let resultSize = +prompt(`${questions.chooseSizeBurger}`);
        if(Number.isNaN(resultSize)||resultSize < 1||resultSize > 2||!Number.isInteger(resultSize)){
            alert(`${questions.errorText}`);
            resultSize = +prompt(`${questions.chooseSizeBurger}`);
        };
        if(resultSize === 1) {
            this.size = this.hambProperties.bigHamb.name;
            this.price = this.price + this.hambProperties.bigHamb.price;
            this.calories = this.calories + this.hambProperties.bigHamb.calories;
        } else if (resultSize === 2){
            this.size = this.hambProperties.smallHamb.name;
            this.price = this.price + this.hambProperties.smallHamb.price;
            this.calories = this.calories + this.hambProperties.smallHamb.calories;
        };
    }
    
     //расчет цены и калорий для каждой добавки для бургера
    calcStuf(){
        let resultStuf = +prompt(`${questions.chooseStaffingBurger}`);
        
        let examination = () => { 
            if(Number.isNaN(resultStuf)||resultStuf < 1||resultStuf > 3||!Number.isInteger(resultStuf)){
                alert(`${questions.errorText}`);
                resultStuf = +prompt(`${questions.chooseStaffingBurger}`);
            };  
        };
        
        let examinationNext = () =>{
        for(let i = 0; i < 5; i++) {
            if (this.resultStufArr[i] === resultStuf) {
                alert (`${questions.errorDoubleStuffing}`);
                resultStuf = +prompt(`${questions.chooseStaffingBurger}`);
            
            }; 
        }; 
        };
        examination(resultStuf);
        examinationNext(resultStuf);
        examination(resultStuf);
        examinationNext(resultStuf);

    
        if(resultStuf === 1) {
            this.stuffing = this.hambProperties.cheeseStuff.name;
            this.price = this.price + this.hambProperties.cheeseStuff.price;
            this.calories = this.calories + this.hambProperties.cheeseStuff.calories;
        } else if(resultStuf === 2) {
            this.stuffing = this.hambProperties.saladStuff.name;
            this.price = this.price + this.hambProperties.saladStuff.price;
            this.calories = this.calories + this.hambProperties.saladStuff.calories;
        } else if(resultStuf === 3){
            this.stuffing = this.hambProperties.potatoStuff.name;
            this.price = this.price + this.hambProperties.potatoStuff.price;
            this.calories = this.calories + this.hambProperties.potatoStuff.calories;
        };

        this.resultStufArr.push(resultStuf);
        this.stuffingArr.push(this.stuffing)        
    }

    //расчет цены и калорий для каждого топпинга для бургера
    calcTopping(){
        let resultTopping = +prompt(`${questions.chooseToppingBurger}`);
            if(Number.isNaN(resultTopping)||resultTopping < 1||resultTopping > 3||!Number.isInteger(resultTopping)){
                alert(`${questions.errorText}`);
                this.calcTopping();
            };
            if(resultTopping === 1) {
                this.topping = this.hambProperties.seasoningTopping.name;
                this.price = this.price + this.hambProperties.seasoningTopping.price;
                this.calories = this.calories + this.hambProperties.seasoningTopping.calories;
            } else if (resultTopping === 2){
                this.topping = this.hambProperties.sauceTopping.name;
                this.price = this.price + this.hambProperties.sauceTopping.price;
                this.calories = this.calories + this.hambProperties.sauceTopping.calories;
            } else if (resultTopping === 3){
                this.topping = this.hambProperties.noTopping.name;
            };
        }
};

