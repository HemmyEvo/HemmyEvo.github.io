
////Comparing///

const Active =document.querySelector('.active');
const WebAni =document.querySelector('.web-ani');
const ReactDes =document.querySelector('.React-des');


////button color/////

const btn1 =document.getElementById('active');
const btn2 =document.getElementById('web-ani');
const btn3 =document.getElementById('React-des');


////Style////
const ActiveImg =document.getElementById('webdesign');
const WebAniImg =document.getElementById('animation');
const ReactDesImg =document.getElementById('react');

console.log(Active);
console.log(WebAni);
console.log(ReactDes);

function but() {
    if(Active.innerHTML === 'Web Designing'){
        ActiveImg.style.display = 'block';
        WebAniImg.style.display = 'none';
        ReactDesImg.style.display = 'none';
        
        ////color////

        btn1.style.backgroundColor = '#ed5565';
        btn1.style.color = 'white'

        btn2.style.backgroundColor = '#0c0c0c';
        btn2.style.color = '#ed5565'

        btn3.style.backgroundColor = '#0c0c0c';
        btn3.style.color = '#ed5565'
    }
}
function but2() {
    if(WebAni.innerHTML === 'Web Animation'){
        ActiveImg.style.display = 'none';
        WebAniImg.style.display = 'block';
        ReactDesImg.style.display = 'none';

        ////color////

        btn1.style.backgroundColor = '#0c0c0c';
        btn1.style.color = '#ed5565'

        btn2.style.backgroundColor = '#ed5565';
        btn2.style.color = 'white'

        btn3.style.backgroundColor = '#0c0c0c';
        btn3.style.color = '#ed5565'
        
    }
}
function but3() {
    if(ReactDes.innerHTML === 'React Designing'){
        ActiveImg.style.display = 'none';
        WebAniImg.style.display = 'none';
        ReactDesImg.style.display = 'block';
        ////color////

        btn1.style.backgroundColor = '#0c0c0c';
        btn1.style.color = '#ed5565'

        btn2.style.backgroundColor = '#0c0c0c';
        btn2.style.color = '#ed5565'

        btn3.style.backgroundColor = '#ed5565';
        btn3.style.color = 'white'
    }
}













const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElement3 = document.querySelectorAll('.skill-h1');
const hiddenElement2 = document.querySelectorAll('.left');
const hiddenElement = document.querySelectorAll('.hidden');
const JsBar = document.querySelectorAll('.bar-javascript');
const CssBar = document.querySelectorAll('.bar-css');
const HtmlBar = document.querySelectorAll('.bar-html');
const ReactBar = document.querySelectorAll('.bar-react');

hiddenElement.forEach((el) => observer.observe(el));
hiddenElement2.forEach((el) => observer.observe(el));
hiddenElement3.forEach((el) => observer.observe(el));
JsBar.forEach((el) => observer.observe(el));
HtmlBar.forEach((el) => observer.observe(el));
CssBar.forEach((el) => observer.observe(el));
ReactBar.forEach((el) => observer.observe(el));
