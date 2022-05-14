// selecting everything that has/shares a class of section 
const sections = document.querySelectorAll('.section');

// select section buttons - ie., the parent container 'controls' 
const sectBtns = document.querySelectorAll('.controls'); // this is parent

// then each individual button with a class of control
const sectBtn = document.querySelectorAll('.control'); // actual button

// select body as a class of main content 
const allSections = document.querySelectorAll('.main-content')


// function: min 27 onwards: review
function PageTransitions() {
    //button click active class: want to remove class that is not active
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i] = .addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                this.className += ' active-btn';
        } )
    }
}

PageTransitions();