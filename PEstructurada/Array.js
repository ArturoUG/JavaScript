class MyArray {
    constructor() {
      this.length = 0; //Conocer cuantos elementos se estaran agregando
      this.data = {}; //Donde se guardaran los elementos
    }
  
    get(index) { //index del numero que necesito que me regrese
      return this.data[index];
    }
  
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]; //Es una funcion que hara que elimines un elemento dentro del arreglo
        this.length --;
        return lastItem;
    }
    
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index);
        
        return item;
    }

    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
  
const myArray = new MyArray();
myArray.push('Diego');
myArray.push('Karen');
myArray.push('Oscar');
console.log(myArray);
console.log(myArray.get(1));
console.log(myArray.length);
myArray.pop();
console.log(myArray);
myArray.delete()
console.log(myArray)