let point = new Set();
let score = 0;
let count = -1;
let mystery = [
    'Mystery 1', 'Mystery 2', 'Mystery 3', 'You Are Not Supposed to See This'
];
let question = [
    'Seeker, to open the box behind that has a 🗝️ you must Enter the code to open it!<br>(*whispers* Use the clues)',
    'This is a <b id="critical">critical mystery</b><br> Step out into the world outside, Where clues are scattered far and wide.<br> Look closely and extract the key, To unlock the path meant to be. <br>(wear earphones 👂)',
    'Seeker You Must decypher the following code. The clues will guide you to the right scroll!! <br> 🟣 🟥 🤍 ❤️ 🤍 🟨 1 1 a n b',
    'You Are Not Supposed to See This'
];
let answer = [
    '11235', 'elitmus','pusqrehewhcireciwhciyehezz261325'
];
let clue = [
    'clue1.html', 'https://youtu.be/bNdYHceyMNE', 'https://drive.google.com/file/d/1e2SlKmkUPjn0E2DZKr91JZ5CaD_PTk0i/view?usp=share_link'
];

let image = ["url('puzzle1treasureBox.png')","url('earphoneImage.png')","url('chest2.png')","url('finaltreasure.png')"];
let minuteNumber = 15; 
let timeValue = minuteNumber*60;  
let time;
let sec;  
let totalTime = []; 
let imageCounter = -1; 

function start()
{
    flag = 0; 
    document.getElementById('first').style.display = 'none';
    document.getElementById('solveboxid').style.display = 'flex';  
    behavefirst();
}

function behavefirst()
{
    imageCounter++; 
    document.body.style.backgroundImage = image[imageCounter] ;
    count++; 
    document.getElementById('displayScore').innerHTML = "Score: " + score;
    console.log("count:: "+count);
    displayMystery(); 
    linkChange();
    // setTimer(); 
    sec = timeValue; 
    time = setInterval(myTimer, 1000);
    function myTimer()
    {
        document.getElementById('timer').innerHTML = sec + " sec";
        sec--;
        if(count===question.length - 1)
        {
            clearInterval(time); 
        }
        if(sec<0)
        {   
            console.log("pushing1")
            totalTime.push(timeValue); 
            totalTime.pop(); 
            console.log("DeadEndReached");
            location.reload();
            clearInterval(time);
            end(); 
        }
        console.log("sec: " + sec);
    }
}


function end()
{
    // flag = 1; 
    // setTimer(); 
    // totalTime.push(sec); 
    // for(let i=0; i<totalTime.length; i++)
    // {
    //     console.log("Total time: " + totalTime[i]);
    // }
    clearInterval(time);
    if(count === 1)
    {
        const inputBox = document.getElementById('answer');
        let inputString =  inputBox.value.replace(/\s/g, ""); 
        inputString = inputString.toLowerCase(); 
        if(!(inputString === "elitmus"))
        location.reload(); 
    }
    compareStrings();
    behavefirst(); 
}

let checker = 0; 
function check() {
    console.log(count);
    if (count > 2) {
        checker++; 
        console.log("limit");
        if(checker===1)
        totalTime.push(score);
        // total time -> final result. 
        console.log("score: " + score); 
        document.getElementById('solveboxid').style.display = 'none'; 
        document.getElementById('end').style.display = 'block'; 
    }
}

function displayMystery() {
    check();
    document.getElementById('mystery').innerHTML = mystery[count];
    document.getElementById('question').innerHTML = question[count];
    // document.getElementById('clue').
}
function linkChange() {
    check();
    const myLink = document.getElementById('clue');
    myLink.addEventListener('click', function (event) {
        // event.preventDefault(); // prevent the default behavior of following the link
        // change the href attribute to a new URL
        myLink.setAttribute('href', clue[count]);
    });
}
function compareStrings() {
    console.log("Comparing strings"); 
    const inputBox = document.getElementById('answer');
    let inputString =  inputBox.value.replace(/\s/g, ""); 
    inputString = inputString.toLowerCase(); 
    console.log("entered: " + inputString);
    // console.log("answer: " + answer[count]);
    if (inputString === answer[count]) {
        score+=100; 

        totalTime.push(sec); 
        for(let i=0; i<totalTime.length; i++)
        {
            console.log("Total time: " + totalTime[i]);
        }

        console.log('Strings are equal!');
        console.log("score" + score); 
    } else {
        totalTime.push(0);
        console.log('Strings are not equal.');
    }
    document.getElementById('showScore').innerHTML = score; 
}

function setTimer(){
    console.log("function called");
    var sec = timeValue; 
    var time = setInterval(myTimer, 1000);
    function myTimer()
    {
        document.getElementById('timer').innerHTML = sec + " sec";
        sec--;
        if(sec<0)
        {
            clearInterval(time);
            end(); 
        }
        console.log("sec: " + sec);
    }
    // if(flag===1)
    // {
    //     clearInterval(time);
    //     return; 
    // }
    // function myTimer() {
    //     document.getElementById('timer').innerHTML = sec + " sec";
    //     sec--;
    //     if(sec<0)
    //     {
    //         end(); 
    //         clearInterval(time);
    //     }
    //     // if (sec == -1) {
    //     //     clearInterval(time);
    //     // }
    //     console.log("sec: " + sec);
    // }
}

function restart()
{
    location.reload(); 
}




// window.addEventListener('beforeunload', () => {
//     alert("Your Progress will NOT be saved");
//     event.preventDefault();
//     event.returnValue = "";
// });


// SET FINAL SCORE TO SCRORE + TOTAL TIME