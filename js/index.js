// this adds a footer through DOM manipulation//
const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);

//adding a copyright to the footer//
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
// adding a unicode for copyright //
copyright.innerHTML = `<span>&#169 ${thisYear} Luz </span>`;
footer.appendChild(copyright);

//creating an array for my list of skills //

const skills = ['WordPress', 'PowerPoint', 'JavaScript'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

//iterating over the array using for of//

for (let s of skills) {
    let skill = document.createElement('li');
        skill.innerHTML = s;
        skillsList.appendChild(skill);
}