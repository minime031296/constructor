function Authors(name, birthYear, nationality) {
    this.name = name,
    this.birthYear = birthYear,
    this.nationality = nationality
}

function Books(title, author, genre,  price) {
    this.title = title,
    this.genre = genre,
    this.price = price,
    this.author = author
}

Books.prototype.getBookInfo = function(){
    console.log(
        `Title: ${this.title}\nAuthor: ${this.author.name}\nGenre: ${this.genre}\nPrice: ${this.price}`
    );
}

let auth1 = new Authors("Rabindranath Tagore" , 1861 , "INDIA");
let auth2 = new Authors("Jane Austen", 1775, "British");
let auth3 = new Authors("J.K. Rowling", 1965, "British");
let auth4 = new Authors("Haruki Murakami", 1949, "Japanese");


let Book1 = new Books("The Home And The World" ,auth1 , "Revolutionary" ,"RS."+100);
let Book2 = new Books("Pride and Prejudice", auth2, "Classic","RS."+19.99);
let Book3 = new Books("Harry Potter and the Sorcerer's Stone", auth3, "Fantasy", "RS."+24.99);
let Book4 = new Books("Norwegian Wood", auth4, "Contemporary Fiction", "RS."+15.99);

//Book1.getBookInfo(); // way to get single book 
//Book3.getBookInfo()


// getting all the books stored in the var bookstore 
var bookstore = [Book1, Book2, Book3, Book4]

for(let i = 0 ; i < bookstore.length ; i++) {
    console.log(`Book ${i+1} details - `)
    bookstore[i].getBookInfo();
    console.log("\n")
}


