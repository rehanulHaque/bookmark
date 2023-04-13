let form = document.getElementById("add-link")
let addBtn = document.getElementById("btn")
let li = document.getElementById("li-list")
let link = document.getElementById("a-link")
let modal = document.getElementById("modal")
let ul = document.getElementById("ul-list")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = e.target.elements.name.value
    let link = e.target.elements.link.value

    
    let book = localStorage.getItem("book")
    if(book == null){
        bookObj = []
    } else{
        bookObj = JSON.parse(book)
    }
    bookObj.push({name, link})
    localStorage.setItem("book", JSON.stringify(bookObj))
    
    
    modal.classList.remove("show")
    e.target.elements.name.value = ""
    e.target.elements.link.value = ""
    displayBook(bookObj)
});

addBtn.addEventListener("click", () => {
    modal.classList.add("show")
});

function displayBook(){
    ul.innerHTML = ""
    let book = localStorage.getItem("book")
    if(book == null){
        bookObj = []
    } else{
        bookObj = JSON.parse(book)
    }
    let str = ''
    bookObj.forEach((e, i) => {
        str += `<li id="li-list" data-index="${i}"><a href="${e.link}" class="a-link" target="_blank">${e.name}</a> <button class="closeBtn" onclick="deleteItem(this.parentElement.dataset.index)">x</button></li>`
    });
    if(bookObj.length != 0){
        ul.innerHTML += str
    }
}
displayBook();



let closeBtn = document.querySelector(".closeBtn")


function deleteItem(id){
    let book = localStorage.getItem("book")
    if(book == null){
        bookObj = []
    } else{
        bookObj = JSON.parse(book)
    }
    bookObj.splice(id, 1)
    localStorage.setItem("book", JSON.stringify(bookObj))
    displayBook()
}
