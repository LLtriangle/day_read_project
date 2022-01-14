// Reference to DOM Elements
window.addEventListener("load", function(){console.log("next")});
const prevBtn = document.querySelector("#flip_comment_prev_btn");
const nextBtn = document.querySelector("#flip_comment_next_btn");
const flipBook = document.querySelector("#flip_comment_book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPages = 2;
let maxLocation = numOfPages + 1;

function openBook(){
    flipBook.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}
function closeBook(isAtBeginning){
    if(isAtBeginning){
        flipBook.style.transform = "translateX(0%)";
    }else{
        flipBook.style.transform = "translateX(100%)";
    }
    flipBook.style.transform = "translateX(0%)";
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}
function goNextPage(){
    console.log("next");
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex =1;
                break;
            case 2:
                paper2.classList.add("flipped");
                
                paper2.style.zIndex =2;
                break;
            default:
                throw new Error("unknown state");
            case 3:
                paper3.classList.add("flipped");
                break;
            case 4:
                paper4.classList.add("flipped");
                closeBook();
                break;    
        }
        currentLocation++;
    }
}
function goPrevPage(){
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                closeBook();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                openBook();
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            default:
                throw new Error("unknown state");
            // case 4:
            //     paper4.classList.remove("flipped");
            //     paper2.style.zIndex = 1;
            //     break;
            // case 5:
            //     paper4.classList.add("flipped");
            //     break;      
        }
        currentLocation--;
    }
}