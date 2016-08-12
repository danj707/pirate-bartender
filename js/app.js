'use strict';

var drinkContainer = {
    container: ["Flask", "Flagon", "Cask", "Mug"]
}

//bilds the drinkIngredients constructor function
function drinkIngredients() {
    this.strong = ["glug of rum", "slug of whiskey", "splash of gin", "shot of tequila"];
    this.salty = ["olive on stick", "eye of newt", "rim of salt", "rasher of bacon"];
    this.bitter = ["shake of bitters", "splash of tonic", "twist of lemon", "dash of tang"];
    this.sweet = ["cube of sugar", "spoonful of honey", "splash of cola", "sprinkle of cinnamon"];
    this.fruity = ["slice of orange", "dash of cassis", "sack of cherries", "swirl of cream"];
    this.spicy = ["shake of paprika", "slice of jalepeno", "squirt of siracha", "grind of ginger"];
}

//drinkIngredients prototype methods
//
//makeDrink() = composes the drink out of ingredients and selections of 'yes' or 'no'
//from the input form.  Take a random number, uses it to choose an ingredient from above
//then builds the drink out of those ingredients
//
//displayOrder() = checks if the user made selections from the form, and alerts if they didn't
//builds order variable then changes css to display result box and appends order for display
//

drinkIngredients.prototype = {
    makeDrink: function () {
        var order = '';
        for (var prop in drinkIngredients) {
            var random = Math.floor((Math.random() * 4));
            if (!this.propertyIsEnumerable(prop)) {} else {
                if (drinkOrder[prop] == 'no') {
                    //do nothing, user chose not to include this in their drink
                } else {
                    order += "<li>Ingredients: " + drinkIngredients[prop][random] + '</li>';
                    var container = drinkContainer.container[random];
                }
            }
        }
        this.displayOrder(container, order);
    },

    displayOrder: function (container, order) {
        $('div.results').css('display', 'inline-block');
        if (order == '') {
            order = "<h2>Choose some ingredients you landlubber!</h2>";
            $('div.results').append(order);
        } else {
            $('div.results').append('<hr><h2>Here\'s your drink matey in your ' + container + '</h2><ul>' + order + '</ul>');
        }
    }
};

//builds constructor function for the drinkOrder, will contain the form results
function drinkOrder() {
    this.strong = '';
    this.salty = '';
    this.bitter = '';
    this.sweet = '';
    this.fruity = '';
    this.spicy = '';
}

//drinkOrder prototype methods
//
//checkDrink() = fills the drinkOrder object with 'yes' or 'no' depending on the user's choices on form
//
drinkOrder.prototype = {
    checkDrink: function (event) {
        this.strong = $('#strong option:selected').val();
        this.salty = $('#salty option:selected').val();
        this.bitter = $('#bitter option:selected').val();
        this.sweet = $('#sweet option:selected').val();
        this.fruity = $('#fruity option:selected').val();
        this.spicy = $('#spicy option:selected').val();
    }
};

//new drinking objects
var drinkIngredients = new drinkIngredients();
var drinkOrder = new drinkOrder();

$(document).ready(function () {
    $('#drink_form').submit(function (event) {
        //prevent form submission, use JS instead
        event.preventDefault();

        //empty the results container for each form submission
        $('div.results').empty();

        //get the form data, call checkDrink to set with form results
        drinkOrder.checkDrink(event);

        //match order with drink ingredients, build the drink, display the results
        drinkIngredients.makeDrink();
    });
});
