# MDNSIllyStoryGenerator
This program was made to complete the assessment that is asked of on the MDN web docs. It is the final assessment in **Javascript first steps** section. You are asked to create a new file for all your javascript and apply it to your html. You are then asked to copy over the JS from the file that MDN links to into your JS file. You are also asked to create `Variables` for the original story text and for the three `strings` that will in 3 `arrays`

## Screenshot
![screenshot_20180920_150410](https://user-images.githubusercontent.com/33196546/45824011-e2e5a180-bce6-11e8-8989-baae6508adc2.png)

## Function
You are finally tasked with completing the `result()` function. in this function you will store const `storyText` in a new variable called `newStory`. This is so when the button is pressed by the user it will always copy that text and nothing will be changed with it. You then create three new `lets` and make sure they are equals to the function `randomValueFromArray()`.By setting each of the three const (`insertX`,`insertY`,`insertZ`) into the brackets of the `randomValueFromArray()` function this allows us to call that function and the funciton will randomize to one of three strings in each of the variables.

Next we user a method called `.replace()` which allows use to use `regex` to look for a certain string value in a string and replace it with something else. In this case we will replace it with the strings that were randomized. We also then have an if statement that checks if anything is written in the `input field` and if so to replace bob using `.replace()` with the name the user has put in the field.

Lastly we make sure that when the radio button is clicked on for UK that we change fahrenheit into centigrade and also change pounds into stone. finally for the story to show up we pass `newStory` into the `textContent` of the const `story`.
