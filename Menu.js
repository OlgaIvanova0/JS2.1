class Menu {
    constructor(id, className, items){
        this.id = id;
        this.className = className;
        this.items = items;
    }
    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++){
            if(this.items[i] instanceof MenuItem) {
                result += this.items[i].render()
            }
        }
        result += `</ul>`;
        return result
    }
   
};

class Button {
    constructor(id, className, buttonText){
        this.id = id;
        this.className = className;
        this.buttonText = buttonText;
    }
    getButton(){
        return `<button class="${this.className}" id="${this.id}">${this.buttonText}</button>`;

    }
    clickButton(){
        let button = document.getElementById(`${this.id}`);
        button.addEventListener('click',() => {
            const menu = document.querySelectorAll('li');
            for (let i = 0; i < menu.length; i++){
                menu[i].remove();
            };
        });
    }
};

class SubMenu extends Menu{
    clickSubMenu(){
        const elems = document.querySelectorAll(`li`);
        for(let i = 0; i< elems.length; i++) {
            let copyMainMenu = elems[i].querySelector('a').cloneNode(true);
            elems[i].addEventListener ('click', () =>{
                elems[i].innerHTML = this.render();
                const subMenu = elems[i].querySelector('ul');
                elems[i].insertBefore(copyMainMenu, subMenu);  
            });
            
        };
    };
};


    