'use strict';

var drinkIngredients = {
    strong: ["Rich", "glug of rum", "slug of whiskey", "splash of gin", "flask of tequila"],
    salty: ["Briny", "olive on a stick", "eye of newt", "salt-dusted rim", "rasher of bacon"],
    bitter: ["Sour", "shake of bitters", "splash of tonic", "twist of lemon", "dash of tang"],
    sweet: ["Luscious", "sugar cube", "spoonful of honey", "splash of cola", "sprinkle of cinnamon"],
    fruity: ["Savory", "slice of orange", "dash of cassis", "cherry on top", "swirl of cream"]
};

var drinkOrder; //make a constructor function here

$(document).ready(function () {
    $('#drink_form').submit(function (event) {
        event.preventDefault();

        //get the form data
        var strong_choice = $('#strong option:selected').val();
        var salty_choice = $('#salty option:selected').val();
        var bitter_choice = $('#bitter option:selected').val();
        var sweet_choice = $('#sweet option:selected').val();
        var fruity_choice = $('#fruity option:selected').val();

        console.log(strong_choice, salty_choice, bitter_choice, sweet_choice, fruity_choice);

        //push all the yes/no data into an array, should end up with something like:
        //[yes,no,no,yes,yes]
        //
        //for each yes, generate a random number from 1 to the length of
        //the object name (drinkIngredients.strong for example)
        //then make an array with a random number for each yes, for example:
        //[3,no,no,2,5]
        //then, loop through the drinkIngredients obj, getting the value that matches
        //the number.
        //
        //then, build a drink using the first word in the name obj array
        //display ingredients and the name, example:
        //Rich Briny Grog


    });

});
