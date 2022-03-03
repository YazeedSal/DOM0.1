const title = document.getElementById('title')
const subHeaders = document.getElementsByTagName('h2')
const uniqueHeaders = document.getElementsByClassName('unique') // because this a slector that selects multible things it returns an array
const header = document.querySelectorAll('#uniqueHeaders') // same here
const body = document.getElementsByTagName('body')[0] // and here, but because here we wanted to work on the body we put [0] to pick the first one which is basicly the only one
const dynamicElem = document.createElement('div') // this one creats an element
const input = document.getElementById('myInput')
const btn  = document.getElementById('myBtn')



dynamicElem.id = 'dynamic' // this one adds an id
dynamicElem.classList = 'dynamicClass' // and this one adds a class
body.append(dynamicElem) // append adds to the thing in the end
//body.prepend(dynamicElem) // perpend adds to the thing in the front

//-------------------------------------------------------------------------------------
const createPost = function () {
    const text = input.value
    const post = document.createElement('h1')
    post.innerText = text
    body.append(post)
    input.value = ''
}


btn.addEventListener('click',createPost)

input.addEventListener('keydown',function (event) {
    if (event.key == "Enter") {
        createPost()
    }
})
