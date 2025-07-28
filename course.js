const pageSize = 6

const newContent = [
{
    id: 1,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 2,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 3,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 4,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 5,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 6,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 7,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 8,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 9,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 10,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
{
    id: 11,
    image:"./assets/education.jpg",
    title:'Muhsina',
    description:"The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards.",
    joinLink:''
},
]


/**
 * 
 * @param {Number} startIndex - value to start slicing the event array (default value is 0)
 * @param {Number} endIndex - end index exclusive value to slice the array (default value is 6)
 */
const renderNewEvents = (startIndex = 0, endIndex = pageSize) => {
    let contentList = ''
    const newEventContainer = document.getElementById('new-event-container')

// const res = newContent.slice(0, 6)

// console.log(res, 'cut array')
newContent.slice(startIndex, endIndex).forEach((item)=> {
    contentList += `<div class="card" data-aos="zoom-in">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="${item.image}" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="name">${item.title}</h2>
                                <p class="description">${item.description}</p>
                                <button class="button">ENROLL NOW</button>
                            </div>
                        </div>`
})
newEventContainer.innerHTML = contentList
}


renderNewEvents()


const renderPaginationComponent = (length = newContent.length, active = 1) => {



    let pageNumbers = ``

    const pageNumberContainer = document.getElementById('pageNumberContainer')

    const numOfPages = Math.ceil(length/pageSize)

    for (let i=1; i<=numOfPages; i++) {
        pageNumbers += `<button class='${ i === active ? 'active' : ''}' onclick='paginationHandler(${i})'>${i}</button>`
    }

    pageNumberContainer.innerHTML = pageNumbers

}

renderPaginationComponent()

const paginationHandler = (pageNumber) => {
    let startIndex = (pageNumber - 1) * pageSize
    let endIndex = startIndex + pageSize

    renderNewEvents(startIndex, endIndex)
    renderPaginationComponent(newContent.length, pageNumber)
}

