var btn = document.querySelector(".btn")
var squareLeft = document.querySelector(".square-left")
var squareRight = document.querySelector(".square-right")
var candy = document.querySelector(".candy")
var borderRight = document.querySelector(".border-right")
var borderLeft = document.querySelector(".border-left")
var content = document.querySelector(".content")
var imgOne = document.querySelector(".img-1")
var imgTwo = document.querySelector(".img-2")
var noel = document.querySelector(".gra")
var processing = document.querySelector(".word-processing")
var strange = document.querySelector(".strange")
var pinwheel = document.querySelector(".pinwheel-main")
var titleBox = document.querySelector(".title-box")
var body = document.querySelector(".body")
btn.addEventListener('click', function(){
    candy.style.gap = "20px"
    squareRight.style.transform = `rotate(${20}deg)`
    var cssSquareLeft = {
        marginLeft : "100px",
        transform : `rotate(${-20}deg)`,
        marginRight : "100px",
        borderRadius: "20px 6px 6px 20px",
        trasitionDuration : `1s`,
        transitionTimingFunction : "ease-in-out",
        transitionProperty : 'translate',
    }
    Object.assign(squareLeft.style, cssSquareLeft)
    var cssSquareRight = {
        transform : `rotate(${20}deg)`,
        borderRadius: "6px 20px 20px 6px",
        trasitionDuration : `1s`,
        transitionTimingFunction : "ease-in-out",
        transitionProperty : 'translate',
    }
    Object.assign(squareRight.style, cssSquareRight)
    var cssBorderRight = {
        transform : `rotate(${20}deg)`,
        position : "absolute",
        left : "285px",
        top : "-244px",
    }
    Object.assign( borderRight.style, cssBorderRight)
    var cssBorderLeft = {
        transform : `rotate(${-20}deg)`,
        position : "absolute",
        left : "-47px",
        top : "205px",
    }
    Object.assign( borderLeft.style, cssBorderLeft)
    content.style.display = "block"
    imgOne.style.transform = `translateY(${0}px)`
    imgTwo.style.transform = `translateY(${0}px)`
    noel.style.transform = `translateX(${880}px)`
    processing.style.transform = `translateX(${540}px)`
    strange.style.transform = `translateX(${540}px)`
    pinwheel.style.display = "block"
    titleBox.style.display = "none"
    body.style.backgroundColor = "aliceblue";
})