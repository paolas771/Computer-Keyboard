const keyCodeList = [
    {
        name: "A",
        kCode: 65,
        classNum: 29
    },
    {
        name: "B",
        kCode: 66,
        classNum: 46
    },
    {
        name: "C",
        kCode: 67,
        classNum: 44
    },
    {
        name: "D",
        kCode: 68,
        classNum: 31
    },
    {
        name: "E",
        kCode: 69,
        classNum: 17
    },
    {
        name: "F",
        kCode: 70,
        classNum: 32
    },
    {
        name: "G",
        kCode: 71,
        classNum: 33
    },
    {
        name: "H",
        kCode: 72,
        classNum: 34
    },
    {
        name: "I",
        kCode: 73,
        classNum: 22
    },
    {
        name: "J",
        kCode: 74,
        classNum: 35
    },
    {
        name: "K",
        kCode: 75,
        classNum: 36
    },
    {
        name: "L",
        kCode: 76,
        classNum: 37
    },
    {
        name: "M",
        kCode: 77,
        classNum: 48
    },
    {
        name: "N",
        kCode: 78,
        classNum: 47
    },
    {
        name: "O",
        kCode: 79,
        classNum: 23
    },
    {
        name: "P",
        kCode: 80,
        classNum: 24
    },
    {
        name: "Q",
        kCode: 81,
        classNum: 15
    },
    {
        name: "R",
        kCode: 82,
        classNum: 18
    },
    {
        name: "S",
        kCode: 83,
        classNum: 30
    },
    {
        name: "T",
        kCode: 84,
        classNum: 19
    },
    {
        name: "U",
        kCode: 85,
        classNum: 21
    },
    {
        name: "V",
        kCode: 86,
        classNum: 45
    },
    {
        name: "W",
        kCode: 87,
        classNum: 16
    },
    {
        name: "X",
        kCode: 88,
        classNum: 43
    },
    {
        name: "Y",
        kCode: 89,
        classNum: 20
    },
    {
        name: "Z",
        kCode: 90,
        classNum: 42
    },
    {
        name: "1",
        kCode: 49,
        classNum: 1
    },
    {
        name: "2",
        kCode: 50,
        classNum: 2
    },
    {
        name: "3",
        kCode: 51,
        classNum: 3
    },
    {
        name: "4",
        kCode: 52,
        classNum: 4
    },
    {
        name: "5",
        kCode: 53,
        classNum: 5
    },
    {
        name: "6",
        kCode: 54,
        classNum: 6
    },
    {
        name: "7",
        kCode: 55,
        classNum: 7
    },
    {
        name: "8",
        kCode: 56,
        classNum: 8
    },
    {
        name: "9",
        kCode: 57,
        classNum: 9
    },
    {
        name: "0",
        kCode: 48,
        classNum: 10
    },
    {
        name: "`",
        kCode: 192,
        classNum: 0
    },
    {
        name: "-",
        kCode: 189,
        classNum: 11
    },
    {
        name: "=",
        kCode: 187,
        classNum: 12
    },
    {
        name: "DEL",
        kCode: 8,
        classNum: 13
    },
    {
        name: "Tab",
        kCode: 9,
        classNum: 14
    },
    {
        name: "[",
        kCode: 219,
        classNum: 25
    },
    {
        name: "]",
        kCode: 221,
        classNum: 26
    },
    {
        name: "\\",
        kCode: 220,
        classNum: 27
    },
    {
        name: "CAPS",
        kCode: 20,
        classNum: 28
    },
    {
        name: ";",
        kCode: 186,
        classNum: 38
    },
    {
        name: "'",
        kCode: 222,
        classNum: 39
    },
    {
        name: "ENTER",
        kCode: 13,
        classNum: 40
    },
    {
        name: "SHIFT",
        kCode: 16,
        classNum: 41
    },
    {
        name: ",",
        kCode: 188,
        classNum: 49
    },
    {
        name: ".",
        kCode: 190,
        classNum: 50
    },
    {
        name: "/",
        kCode: 191,
        classNum: 51
    },
    {
        name: "SHIFT",
        kCode: 16,
        classNum: 52
    }

    

];
// https://stackoverflow.com/questions/7595557/selecting-a-random-html-element-using-javascript-only
// to randomly get a html element
var keys = document.getElementById("keyboard").getElementsByClassName("key");

//var rand = Math.floor(Math.random() * keys.length);

document.getElementsByClassName("key")[18].classList.remove("jiggle");


jiggle();

function jiggle(){
    try{
        var rand = Math.floor(Math.random() * keys.length);
        var newKey = keys[rand];
        newKey.classList.add("jiggle");
        for(var i = 0; i < keyCodeList.length; i++){
            if(newKey.innerHTML == keyCodeList[i].name){
                var code = keyCodeList[i].kCode;
                var index = keyCodeList[i].classNum;
                // https://www.techiedelight.com/detect-enter-key-press-javascript/
                // to check if a key was pressed
                document.addEventListener("keyup", (event) => {
                    if(event.keyCode === code){
                        document.getElementsByClassName("key")[index].classList.remove("jiggle");
                        jiggle();
                    }
                
                });
            }
        }
    }catch(e){
        console.error(e); 
    }
}