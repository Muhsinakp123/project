
// function countup(el, target) {
//   let data = { count: 0 };
//   anime({
//     targets: data,
//     count: [0, target],
//     duration: 60000,
//     round: 1,
//     delay: 200,
//     easing: 'easeOutCubic',
//     update() {
//       el.innerText = data.count.toLocaleString();
//     }
//   });
// }

// function makeCountup(el) {
//   const text = el.textContent;
//   const target = parseInt(text, 10);

//   const io = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio > 0) {
//         countup(el, target);
//         io.unobserve(entry.target);
//       }
//     });
//   });

//   io.observe(el);
// }

// const els = document.querySelectorall('[data-countup]');

// els.forEach(makeCountup);



document.addEventListener('aos:in', ({ detail }) => {
  // console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
  // console.log('animated out', detail);
});

// youtube 

let btn = document.querySelector('.button');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');
btn.onclick = function () {
  btn.classList.add('active');
  clip.classList.add('active');
  // video.play();
  video.currentTime = 0;
}
close.onclick = function () {
  btn.classList.remove('active');
  clip.classList.remove('active');
  video.pause();
}

const newEvents = [
  {
    image: "./assets/event-pic-1.png",
    date: 'December 25,2020',
    time: '08:00 AM - 09:00 AM',
    title: 'International Conference on Art',
    description: "Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.",
    location: 'California, TX 70240',
    joinLink: ''
  },
  {
    image: "./assets/event-pic-1.png",
    date: 'December 30,2025',
    time: '08:00 AM - 09:00 AM',
    title: 'International Conference on Art',
    description: "Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.",
    location: 'California, TX 70240',
    joinLink: ''
  },
  {
    image: "./assets/event-pic-1.png",
    date: 'December 25,2020',
    time: '08:00 AM - 09:00 AM',
    title: 'International Conference on Art',
    description: "Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.",
    location: 'California, TX 70240',
    joinLink: ''
  },
  {
    image: "./assets/event-pic-1.png",
    date: 'December 25,2020',
    time: '08:00 AM - 09:00 AM',
    title: 'International Conference on Art',
    description: "Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.",
    location: 'California, TX 70240',
    joinLink: ''
  }
]


const renderNewEvents = () => {
  let eventList = ''
  const newEventContainer = document.getElementById('new-event-container')

  newEvents.forEach((item) => {
    eventList += ` <div class="pic-main-div">
                    <div class="event-pic-1">
                        <img src="${item.image}">
                    </div>
                    <div class="pic-content">
                        <div class="date-time">
                            <div class="calender">
                                <p>${item.date}</p>
                            </div>
                            <div class="time">
                               
                                <p>${item.time}</p>
                            </div>
                        </div>
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <div class="content-foot">
                            <div class="location">
                                <p>${item.location}</p>
                            </div>
                            <div class="buttun-event">
                                <button>JOIN EVENT</button>
                            </div>
                        </div>
                    </div>
                </div>`
  })

  newEventContainer.innerHTML = eventList
}

renderNewEvents()

// departments
const departments = [
  {
    image: "./assets/department-pic.jpg",
    heading: "Artificial intelligence"
  },
  {
    image: "./assets/department-pic.jpg",
    heading: "Artificial intelligence"
  },
  {
    image: "./assets/department-pic.jpg",
    heading: "Artificial intelligence"
  },
  {
    image: "./assets/department-pic.jpg",
    heading: "Artificial intelligence"
  },
  {
    image: "./assets/department-pic.jpg",
    heading: "Artificial intelligence"
  },
  {
    image: "./assets/department-pic.jpg",
    heading: "Artificial intelligence"
  }
]
  // < div class="text-in-pic1" data - aos="zoom-in" >
  //   <h4>Artificial Intelligence</h4>
  //               </ >

// const departmentPic = document.querySelector('.department-pic  ');

// const renderDepartments = () => {
//   departments.map((postData) => {
//     const postElement = document.createElement('div');
//     postElement.classList.add('department-pic');
//     postElement.innerHTML = `
//     <div class="text-in-pic1" data - aos="zoom-in" >
//     <h4>Artificial Intelligence</h4></div >
//     `
//     departmentPic.appendChild(postElement)
//   })
// }
// renderDepartments()
const renderDepartments = () => {
  let departmentList = ''
  const departmentContainer = document.getElementById('department-Container')
  departments.forEach ((item)=>{
    departmentList += `
          <div class="text-in-pic1" data-aos="zoom-in">
            <img src="${item.image}">
            <h4>${item.heading}</h4>
          </div>`
  })
  departmentContainer.innerHTML = departmentList
}
renderDepartments()
