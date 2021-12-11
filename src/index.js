import _ from 'lodash';
import './client/style/style.scss';
import './client/style/queries.scss';
import hanDy from './client/style/img/handyone.jpg';
import hanDy2 from './client/style/img/handy-2.jpg';
import hanDy3 from './client/style/img/handy-3.jpg';
import plump from './client/style/img/plumping.jpg';
import joiny from './client/style/img/joinery.jpg';
import lanscap from './client/style/img/landscaping.jpg';
import elect from './client/style/img/electric.jpg';

// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';




const NAVI = document.getElementById('top-nav');
const BTNMINIBAR = document.getElementById('icon-nav');
const ABOUTBTN = document.getElementById('about-btn');
const aboutDiv = document.getElementById('about');
const bbggImg = document.getElementById('bgg-imag');
const newsInner = document.getElementById('news-ssect');
const newsCont = document.getElementById('news');
const NEWSBTN = document.getElementById('news-link-btn');
const NEWSICON = document.getElementById('news-icon');
const jobsInner = document.getElementById('jobss-ssect');
const JOBSBTN = document.getElementById('jobs-link-btn');
const JOBSICON = document.getElementById('jobs-icon');
const FilTers = document.querySelectorAll('.filters');
const jobsFilt = document.querySelector('.jobs-filter');
const FILTERICON = document.getElementById('filter-icon');
const ABOUTICON = document.getElementById('about-icon');
const hotelsInnr = document.getElementById('hotels');
//const HOTBTN = document.getElementById('hotls-cont');
const HOTICON = document.getElementById('hotels-icon');
const HOTBTN = document.getElementById('hotels-link-btn');










const allEr1t = () =>{alert('this website is under updating');}
//const eassyoutNews = () => { newsCont.style.width='40%';};
const tooGleAbt = () => { aboutDiv.classList.toggle('visible')};
const tooGleNews = () => { newsInner.classList.toggle('visible');document.documentElement.style.overflow='hidden';};
const tooGleJobs = () => { jobsInner.classList.toggle('visible');/*document.documentElement.style.overflow='hidden';*/};
const tooGleFiltr = () => { jobsFilt.classList.toggle('visible')};
const tooGleHotls = () => { hotelsInnr.classList.toggle('visible')};






const shrInkNav = () => {NAVI.classList.toggle('responsive')};


window.addEventListener('load',allEr1t);
BTNMINIBAR.addEventListener('click',shrInkNav);
ABOUTBTN.addEventListener('click',tooGleAbt);
NEWSBTN.addEventListener('click',tooGleNews);
NEWSICON.addEventListener('click',tooGleNews);
JOBSBTN.addEventListener('click',tooGleJobs);
JOBSICON.addEventListener('click',tooGleJobs);
FILTERICON.addEventListener('click',tooGleFiltr);
ABOUTICON.addEventListener('click',tooGleAbt);
HOTBTN.addEventListener('click',tooGleHotls);
HOTICON.addEventListener('click',tooGleHotls);





var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    NAVI.style.top = "0";
  } else {
    NAVI.style.top = "-73px";
  }
  prevScrollpos = currentScrollPos;
} 
 




/*function readLessMore() {
  if (hFilTers.style.display == "none") {
    hFilTers.style.display = "inline";
    hbtnText.innerHTML = "Read more";
    hmoreText.style.display = "none";
  } else {
    hFilTers.style.display = "none";
    hbtnText.innerHTML = "Read less";
    hmoreText.style.display = "inline";
  }
}*/



