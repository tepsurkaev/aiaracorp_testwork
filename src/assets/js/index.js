function getLocation(value) {
    document.querySelector('.select_location').value = value;
}

function getYear(value) {
    document.querySelector('.select_year').value = value;
}

function getMake(value) {
    document.querySelector('.select_make').value = value;
}

function getModel(value) {
    document.querySelector('.select_model').value = value;
}

function getSubModel(value) {
    document.querySelector('.select_sub_model').value = value;
}

function getSeries(value) {
    document.querySelector('.select_series').value = value;
}

const locationDropdown = document.querySelector('.select_location');
const yearDropdown = document.querySelector('.select_year');
const makeDropdown = document.querySelector('.select_make');
const modelDropdown = document.querySelector('.select_model');
const submodelDropdown = document.querySelector('.select_sub_model');
const seriesDropdown = document.querySelector('.select_series');

locationDropdown.onclick = function() {
    document.querySelector('.options_location').classList.toggle('active');
}

yearDropdown.onclick = function() {
    document.querySelector('.options_year').classList.toggle('active');
}

makeDropdown.onclick = function() {
    document.querySelector('.options_make').classList.toggle('active');
}

modelDropdown.onclick = function() {
    document.querySelector('.options_model').classList.toggle('active');
}

submodelDropdown.onclick = function() {
    document.querySelector('.options_sub_model').classList.toggle('active');
}

seriesDropdown.onclick = function() {
    document.querySelector('.options_series').classList.toggle('active');
}



