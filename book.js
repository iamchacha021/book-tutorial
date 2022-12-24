const books = document.querySelectorAll("#book-list li .name")
// console.log(books)
Array.from(books).forEach(function(book){
    book.textContent += '(Title)'
})

let bookList = document.querySelector('#book-list');
// bookList.innerHTML= '<h2>More and more and more books</h2>'
bookList.innerHTML += '<br><p>This is how we add HTML</p>'

// Traversing from child to parent, parent to child, sibling to sibling
// console.log('the parent node is:', bookList.parentElement)
// console.log('the child node is:', bookList.children)
// console.log('the next sibling is', bookList.previousElementSibling)

// bookList.children.querySelectorAll('h2').innerHTML += '<br><br>Too genius for y\'all'


// Event listeners
    let btn = document.getElementById('btn')
    let lnk = document.getElementById('lnk')
    let txt = document.getElementById('txt')


    btn.addEventListener('click', buttonClicked)
    function buttonClicked(ev){
        console.log(ev.type)
        console.log(ev.target)
    }


    lnk.addEventListener('click', function(ev){
        ev.preventDefault();
        console.log( ev.type);
        console.log(ev.target);
    })


    txt.addEventListener('input', (ev)=>{
        console.log(ev.type)
        console.log(ev.target)
        console.log(ev.target.value)
    })


// Deleteing the books
    // const btns = document.querySelectorAll('#book-list .delete')
    // btns.forEach(function(btn){
    //     btn.addEventListener('click', function(ev){
    //         let li = ev.target.parentElement
    //         li.parentElement.removeChild(li)
    //     })
    // })

// Deleteing using event bubbling

    let list = document.querySelector('#book-list ul')
    list.addEventListener('click', function(ev){
        if(ev.target.className==='delete'){
            let li = ev.target.parentElement
            li.parentElement.removeChild(li)
        }
    })

// Working with forms
    const addForm = document.forms['add-book']
    addForm.addEventListener('submit', function(ev){
        ev.preventDefault();
        let value = addForm.querySelector('input[type="text"]').value
        
        // creating elements
        const li = document.createElement('li')
        const bookName = document.createElement('span')
        const deleteBtn =document.createElement('span')

        // appending elements
        li.appendChild(bookName)
        li.appendChild(deleteBtn)
        list.appendChild(li)

        // our HTML is now empty, we need to give it value
        deleteBtn.textContent = 'delete'
        bookName.textContent = value

        // Applying CSS styling and class name
        bookName.classList.add('name')
        deleteBtn.classList.add('delete')
    })


// Check boxes and change events
    let hideBooks = document.querySelector('#hide')
    hideBooks.addEventListener('change', function(ev){
        if (hideBooks.checked){
            list.style.display = 'none'
        }
        else{
            list.style.display = 'initial'
        }
    })

// custom search filter
    const searchBar = document.forms['search-book'].querySelector('input');
    
    searchBar.addEventListener('keyup', function(ev){
        const term = ev.target.value.toLowerCase();
        // the variable 'books' was declared in line 1. Now we need to iterate through them
        books.forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) !== -1){
                book.style.display = 'block';
            } else{
                book.style.display = 'none';
            }

        })

    })



// Async JavaScript

    // const getToDos = (resource, callback)=>{

    //     let request = new XMLHttpRequest();

    //     request.addEventListener('readystatechange', ()=>{
    //         // console.log(request, request.readyState)
    //         if (request.readyState===4 && request.status === 200){
    //             let data = JSON.parse(request.responseText)
    //             callback(undefined, data)
    //         }
    //         else if (request.readyState === 4){
    //             callback('Could not fetch the data', undefined)
    //         }
    //     })


    //     request.open('GET', resource);
    //     request.send();
    // }

   
    // getToDos((err, data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(data)
    //     }
    // })

    // getToDos('https://jsonplaceholder.typicode.com/todos/',(err,data)=>{
    //     console.log(data)
    //     getToDos('https://jsonplaceholder.typicode.com/todos/',(err, data)=>{
    //         console.log(data)
    //         getToDos('https://jsonplaceholder.typicode.com/todos/', (err, data)=>{
    //             console.log(data)
    //         })
    //     })
    // }) 
    // chaining network requests could get messy, that's why we use promises


    // Promises
    // const getSomething = ()=>{
    //     return new Promise((resolve, reject)=>{
    //         // This is where we make the network request
    //          resolve('data')
    //         reject('error')
    //     })
    // }

    // getSomething().then((data)=>{
    //     console.log(data)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //Let's duplicate our getToDos Function 

    // 


    // Fetch API

    // fetch('https://jsonplaceholder.typicode.com/todos/').then((response)=>{
    //     console.log(response)
    //     return response.json()
    // }).then((data)=>{
    //     console.log('resolved:',data)
    // }).catch((err)=>{
    //     console.log('could not fetch data:',err)
    // })

    // Async and Await

    const getToDos = async ()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        let data = await response.json();
        return data
    }

    getToDos().then((data)=>{
        console.log('resolved:', data)
    }).catch((err)=>{
        console.log('could not fetch', err.message)
    })



    