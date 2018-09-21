"use strict";
const customName = document.getElementById("customname");
const btnRandomize = document.querySelector(".btnRandomize");
const story = document.querySelector(".story");
const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen','Disneyland','the White House'];
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
btnRandomize.addEventListener('click', result);

function result() {
let newStory = storyText;
let xInsert = randomValueFromArray(insertX);
let yInsert = randomValueFromArray(insertY);
let zInsert = randomValueFromArray(insertZ);
let regexX = /:insertx:/gi;
let regexY = /:inserty:/gi;
let regexZ = /:insertz:/gi;
newStory = newStory.replace(regexX,xInsert);
newStory = newStory.replace(regexY,yInsert);
newStory = newStory.replace(regexZ,zInsert);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.071429) + ' Stone';
    let temperature =  Math.round((94 -32)/1.8) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}