const info = document.querySelector('.info');
const infoBlock = document.querySelector('#info');
const btnAroowInfo = document.querySelector('#btn-arowe-info');
infoBlock.addEventListener('click', () => {
    info.style.display = 'block';
    btnAroowInfo.style.display = 'block';
    tamplatePlace.style.display = 'none';
})
btnAroowInfo.addEventListener('click', () => {
    info.style.display = 'none';
    btnAroowInfo.style.display = 'none';
})



const tamplatePlace = document.querySelector('.tamplate-place');
const Template = document.querySelector('#Template');
const btnAroweTamplate = document.querySelector('#btn-arrowe-tamplate-place');

Template.addEventListener('click', () => {
    tamplatePlace.style.display = 'block';
})
 btnAroweTamplate.addEventListener('click', () => {
    tamplatePlace.style.display = 'none';
})