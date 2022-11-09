export default class stack {
    constructor() {
        this.items = [];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        return this.item[this.item.length-1];
    }
    getSize(){
        return this.items.length;
    }
    isEmpty(){
        return this.getSize()===0;
        
    }
}