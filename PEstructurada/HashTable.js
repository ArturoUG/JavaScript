class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }

    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    set(key, value) {
      const address = this.hashMethod(key);
      if (!this.data[address]) {
        this.data[address] = []; //Si no existe se crea y se agrega
      }
      this.data[address].push([key, value]); //Si existe se agrega y no se sobrescribe
      return this.data;
    }
}
  
  const myHashTable = new HashTable(50);

myHashTable.set("Diego",1990);
console.log(HashTable)
myHashTable.set("Fernanda",1990);
console.log(HashTable)