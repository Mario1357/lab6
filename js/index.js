
var list = $(".Lista")
var texto = document.getElementById("newText")


$(".agregar").on("click", function(e){
    e.preventDefault()

    var newDiv = $("<div>")
    var newP = $("<p>")
    var newButton1 = $("<button>")
    var newButton2 = $("<button>")
    var label = $("<label>")
    newDiv.attr("class", "itemShop")
    label.attr("id", "label")
    label.text(texto.value)
    newButton1.text("check")
    newButton1.attr("class", "checar")
    newButton2.text("delete")
    newButton2.attr("class", "del")
    newP.append(newButton1)
    newP.append(newButton2)


    newDiv.append(label)
    newDiv.append(newP)
    list.prepend(newDiv)
})

$(".Lista").on("click", ".del", function(e){
    e.preventDefault()
    var padre = $(this).parent().parent()
    padre.remove()
})

$(".Lista").on("click", ".checar", function(){
    var label = $(this).parent().parent()
    var clase = label.class
    if (label.attr("class") === "itemShop"){
        label.toggleClass("itemShop2", true)

    }else{

        label.toggleClass("itemShop2", false)
    }

})