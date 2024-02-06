let photos = [
    {
        imageurl : "images/car1.jpg",
        type:"car",
    },
    {
        imageurl : "images/city1.jpeg",
        type:"city"
    },
    {
        imageurl : "images/office1.jpg",
        type:"office"
    },
    {
        imageurl : "images/car2.jpg",
        type:"car"
    },
    {
        imageurl : "images/city2.jpeg",
        type:"city"
    },
    {
        imageurl : "images/office2.jpg",
        type:"office"
    },
    {
        imageurl : "images/car3.jpg",
        type:"car"
    },
    {
        imageurl : "images/city3.jpeg",
        type:"city"
    },
    {
        imageurl : "images/office3.jpg",
        type:"office"
    },
    {
        imageurl : "images/car4.jpg",
        type:"car"
    },
    {
        imageurl : "images/car5.jpg",
        type:"car"
    },
    {
        imageurl : "images/office4.jpg",
        type:"office"
    }
];


photos.forEach(photo => {

let container = document.getElementById("container");

let newImage = document.createElement("img");
newImage.className = "newimage";
newImage.src = photo.imageurl;
container.appendChild(newImage);


})

$("img.newimage").click(function() {
    let popupdiv = $("#popupdiv");
    popupdiv.css("display", "block");
    
    let popupimg = $("#popupimg");
    let imgsrc = $(this).attr("src"); // Use 'this' to refer to the clicked image
    popupimg.addClass("popupimg").attr("src", imgsrc);
});

$("img.close").click(function() {
    let popupdiv = $("#popupdiv");
    popupdiv.css("display", "none");
});


function allphotos() {

    let container = document.getElementById("container");

    container.innerHTML = "";

    photos.forEach(photo => {

        let newImage = document.createElement("img");
        newImage.className = "newimage";
        newImage.src = photo.imageurl;
        container.appendChild(newImage);
        
        
        
        
        })

        $("img.newimage").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "block");
            
            let popupimg = $("#popupimg");
            let imgsrc = $(this).attr("src"); // Use 'this' to refer to the clicked image
            popupimg.addClass("popupimg").attr("src", imgsrc);
        });
        
        $("img.close").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "none");
        });
}

function carfilter() {

    let container = document.getElementById("container");

    container.innerHTML = "";

    let filteredcarphotos = photos.filter(photo => photo.type === "car" )

    filteredcarphotos.forEach(photo => {

        
        
        let newImage = document.createElement("img");
        newImage.className = "newimage";
        newImage.src = photo.imageurl;
        container.appendChild(newImage);
        
        
        
        })

        $("img.newimage").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "block");
            
            let popupimg = $("#popupimg");
            let imgsrc = $(this).attr("src"); // Use 'this' to refer to the clicked image
            popupimg.addClass("popupimg").attr("src", imgsrc);
        });
        
        $("img.close").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "none");
        });

}

function cityfilter() {

    let container = document.getElementById("container");

    container.innerHTML = "";

    let filteredcarphotos = photos.filter(photo => photo.type === "city" )

    filteredcarphotos.forEach(photo => {

        
        
        let newImage = document.createElement("img");
        newImage.className = "newimage";
        newImage.src = photo.imageurl;
        container.appendChild(newImage);
        
        
        
        })

        $("img.newimage").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "block");
            
            let popupimg = $("#popupimg");
            let imgsrc = $(this).attr("src"); // Use 'this' to refer to the clicked image
            popupimg.addClass("popupimg").attr("src", imgsrc);
        });
        
        $("img.close").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "none");
        });

}

function officefilter() {

    let container = document.getElementById("container");

    container.innerHTML = "";

    let filteredcarphotos = photos.filter(photo => photo.type === "office" )

    filteredcarphotos.forEach(photo => {

        
        
        let newImage = document.createElement("img");
        newImage.className = "newimage";
        newImage.src = photo.imageurl;
        container.appendChild(newImage);
        
        
        
        })

        $("img.newimage").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "block");
            
            let popupimg = $("#popupimg");
            let imgsrc = $(this).attr("src"); // Use 'this' to refer to the clicked image
            popupimg.addClass("popupimg").attr("src", imgsrc);
        });
        
        $("img.close").click(function() {
            let popupdiv = $("#popupdiv");
            popupdiv.css("display", "none");
        });

}