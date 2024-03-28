
$("button").click(function() {
    let favFood = $(".inputFood").val();
    let favDessert = $(".inputDessert").val();
    
    console.log("Favorite food: " + favFood + " " + "Favorite dessert: " + favDessert);
    
    $(".vote-result").text(favFood);
    $(".vote-result").show();
    
    $("img").show();
    
    $(".vote-result2").text(favDessert);
    $(".vote-result2").show();
    
    alert("Thank you for voting!");
    
});