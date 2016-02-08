var foodCache = JSON.parse(localStorage.getItem('foodCache')) || [];

var displayFood = function(food) {
    var image = document.getElementById('barcode-image');
    var ingredientsTitle = document.getElementById('barcode-ingredients-title');
    var ingredients = document.getElementById('barcode-ingredients');
    var nutrients = document.getElementById('barcode-nutrients');
    if (food.status == 0) {
        image.src = '';
        ingredientsTitle.innerText = 'Barcode not found';
        ingredients.innerText = '';
        nutrients.innerHTML = '';
    } else {
        image.src = food.product.image_front_url;
        ingredientsTitle.innerText = 'Ingredients:- '
        ingredients.innerText = food.product.ingredients_text;
        new BarChart();
    }
}

var isBarcodeCached = function(barcode){
    for (food of foodCache) {
        if (food.code == barcode){
            console.log('Found a cached result for this barcode');
            return food;
        }
    }
    return null;
};

var getFoodData = function(barcode){
    var foodURL = 'http://world.openfoodfacts.org/api/v0/product/' + barcode + '.json';
    var request = new XMLHttpRequest();
    request.open('GET', foodURL);
    request.onload = function(){
        if (request.status === 200) {
            food = JSON.parse(request.responseText);
            foodCache.push(food);
            localStorage.setItem('foodCache', JSON.stringify(foodCache));
            displayFood(food);
        } else {
            console.log('Failed to get a valid response from the server');
        }
    };
    request.send(null);
};

window.onload = function(){
    console.log('App started');
    var barcodeInput = document.getElementById('Barcode');
    barcodeInput.onchange = function(){
        var food = isBarcodeCached(barcodeInput.value);
        if (food) {
            displayFood(food);
            return
        }
        getFoodData(barcodeInput.value);
    }
};
