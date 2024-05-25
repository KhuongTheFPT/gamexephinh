
let p;

function batDauKeo() {
        p = event.target;

}

function choThaVao() {
        event.preventDefault();
}


function thaXong() {

        // console.log(event.target);

        // event.target.appendChild(p);
        console.log(event.target.firstElementChild);
        console.log(event.target.childNodes);
        console.log(event.target.childNodes[0]);
        let x = false;
       
                if (event.target.firstElementChild === null && x === false) {
                        // event.target.removeChild(event.target.firstElementChild);

                        event.target.appendChild(p);
                        console.log(event.target.firstElementChild);
                        x = true;

                }
                else {
                        console.log("not ok");

                }
        console.log(event.target.firstElementChild);
        console.log(p);
        


}
console.log(p);

let deg = 0;
function hieuUng() {
        deg += 90;
        document.getElementById(event.target.id).style.transform = `rotate(${deg}deg)`;
}

// function upLoadFile(files) {
//         let arrImg = files;
//         console.log(files);
//         console.log(arrImg);
//         console.log(arrImg[0]);

// }
let urlImg = [];
let arrImg = [];
function upLoadFile() {
        
        arrImg = event.target.files;
        console.log(arrImg);
        for (let i = 0; i < arrImg.length; i++) {
                urlImg[i] = URL.createObjectURL(arrImg[i]);
                
                console.log(urlImg[i]);
                localStorage.setItem(`img${i}`, urlImg[i]);
                console.log(localStorage);
                document.getElementsByTagName("img")[i].src = localStorage.getItem(`img${i}`);
        }
        alert(`Upload thành công ${arrImg.length} ảnh mẫu`);
        console.log(arrImg.length);
}


function play() {
        event.preventDefault();
        // let urlRandom;
        // let randomIndex;
        
        let mixArray = urlImg.sort(() => 0.5 - Math.random());
        console.log("Mảng sau khi xáo trộn:",mixArray);
        for (let i = 0; i < urlImg.length; i++) {
                
                // let randomIndex = Math.floor(Math.random() * 9);
                // console.log(randomIndex);
                // let urlRandom = urlImg.splice(randomIndex, 1)[0];
                // document.getElementsByTagName("img")[i].src = urlRandom;
               
               
                document.getElementsByTagName("img")[i].src = mixArray[i];
                // document.getElementsByTagName("img")[i].style.transform = "rotate((90 * (Math.floor(Math.random() * 4))deg)";
                document.getElementsByTagName("img")[i].style.transform = "rotate(90deg)";
        }
        document.getElementById("player").style.display = "none";
        document.getElementById("replayer").style.display = "block";

}
console.log(localStorage);

function playAgain() {
        event.preventDefault();
        console.log(localStorage);
        location.reload();
       
        
}

window.onload = function () {
        event.preventDefault();
        // localStorage.clear();
        if (localStorage.length != 0) {
                for (let i = 0; i < 25; i++) {
                        urlImg[i] = localStorage.getItem(`img${i}`);
                        document.getElementsByTagName("img")[i].src = localStorage.getItem(`img${i}`);
                        
                };
                // play();
        }
        else {
                for (let i = 0; i < 25; i++) {
                        urlImg[i] = "./image1/img-26.png";
                        document.getElementsByTagName("img")[i].src = "./image1/img-26.png";
                        
                }  
        }
        document.getElementById("player").style.display = "block";
        document.getElementById("replayer").style.display = "none";
}
console.log(localStorage);










// function batDauKeo() {
//         event.dataTransfer.setData("text", event.target.id);

// }

// function choThaVao() {
//         event.preventDefault();
// }


// function thaXong() {

//         event.preventDefault();
        
        

//         if (event.target.firstElementChild === null) {
//                 // event.target.removeChild(event.target.firstElementChild);
//                 let data = event.dataTransfer.getData("text");
//                 event.target.appendChild(document.getElementById(data));
              

//         }
//         else {
//                 console.log("not ok");

//         }
//         console.log(event.target.firstElementChild);



// }