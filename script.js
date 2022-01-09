document.getElementsByClassName('button').item(0)
        .addEventListener('click', () => {

           let element = document.getElementById("links");  
   
           element.style.setProperty("display", 
                        element.style.display == "block" ? "none" : "block");

});