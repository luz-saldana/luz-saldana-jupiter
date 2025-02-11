// this adds a footer through DOM manipulation//
const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);

//adding a copyright to the footer//
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
// adding a unicode for copyright //
copyright.innerHTML = `<span>&#169 ${thisYear} Luz Saldaña </span>`;
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

//message form //
const messageForm = document.querySelector("[name='leave_message']");
const messageSection = document.getElementById('message-section');

// create a callback function that handles the message form submit //

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    //display messages in list //
    let messagesSection = document.getElementById('messages');
    let messageList = messagesSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>:
    <span>${message}</span> `
   
//remove button//
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.setAttribute('type', 'button');
    //adding an id to the button//
    removeButton.setAttribute('id', 'removeButtonId')

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

// reset method //
    messageForm.reset();
});


const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

// fetch request //
fetch('https://api.github.com/users/luz-saldana/repos').then((response) => {
    return response.json();
}).then((repositories) => {
    console.log(repositories);
    for (let i = 0; i < repositories.length; i++) {
        const project = repositories[i].name;
        const li = document.createElement('li');
        li.innerText = project;

        projectList.appendChild(li);
    }
}).catch((error) => {
    console.error("An error ocurred", error);
});