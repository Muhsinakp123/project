
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
  console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
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