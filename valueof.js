let book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    price: 15.99,
    
     getDescription(){
        return `${this.title} by ${this.author}, published in year ${this.year}`;
     }
    valueof(){
        return this.price;
    }
};

console.log(book.valueof());
