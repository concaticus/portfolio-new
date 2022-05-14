// selecting everything that has/shares a class of section 
const sections = document.querySelectorAll('.section');

// select section buttons - ie., the parent container 'controls' 
const sectBtns = document.querySelectorAll('.controls'); // this is parent

// then each individual button with a class of control
const sectBtn = document.querySelectorAll('.control'); // actual button

// select body as a class of main content 
const allSections = document.querySelectorAll('.main-content')