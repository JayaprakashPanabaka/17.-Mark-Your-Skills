let ulContainer = document.getElementById("skillsContainer");

let skillsList = [
    {
        skill: 'HTML',
        id: 1,
    },
    {
        skill: 'CSS',
        id: 2,
    },
    {
        skill: 'JavaScript',
        id: 3,
    },
    {
        skill: 'ReactJS',
        id: 4,
    },
    {
        skill: 'Python',
        id: 5,
    },
];

function onSkillStatusChange(checkboxId, labelId) {
    let labelEl = document.getElementById(labelId)
    let checkboxEl = document.getElementById(checkboxId)

    // if(checkboxEl.checked === true) {
    //     labelEl.classList.add('li-item');
    // }else {
    //     labelEl.classList.remove('li-item')
    // }

    labelEl.classList.toggle('li-item')
}

function onDeleteSkill(id) {
    let liContainer = document.getElementById(id);

    ulContainer.removeChild(liContainer);
}

function createAndAppendSkill(skill) {
    let checkboxId = 'checkbox' + skill.id;
    let labelId = 'label' + skill.id;

let liContainer = document.createElement('li');
liContainer.style.marginBottom = '1rem';
liContainer.id = skill.id;

ulContainer.appendChild(liContainer);

let checkboxEl = document.createElement('input');
checkboxEl.type = 'checkbox';
checkboxEl.id = checkboxId;
checkboxEl.classList.add('checkbox');

checkboxEl.onclick = function() {
    onSkillStatusChange(checkboxId, labelId);
}

liContainer.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.textContent = skill.skill;
labelEl.setAttribute('for', checkboxId);
labelEl.id = labelId;

liContainer.appendChild(labelEl);

let deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Del';
deleteBtn.style.marginLeft = '1rem';

deleteBtn.onclick = function() {
    onDeleteSkill(skill.id);
}

liContainer.appendChild(deleteBtn);

}

for(let skill of skillsList) {
    createAndAppendSkill(skill);
}










