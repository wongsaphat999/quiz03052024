var score=0;
var correct1= false;
var correct2= false;
function checkAnswer(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        
        if(!correct1){
        score++;
        correct1= true;
        sumresult.textContent = "คำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result.textContent = "ตอบผิด ลองอีกครั้ง";
        result.style.color = 'red';

        if(correct1){
            score--;
            correct1= false;
            sumresult.textContent = "คำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง บริษัท ซีพี ออลล์ จํากัด (มหาชน) ก่อตั้งขึ้นเมื่อปี 2531";
        result.style.color = 'green';
        
        if(!correct2){
        score++;
        correct2= true;
        sumresult.textContent = "คำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }

    } else {
        result.textContent = "ตอบผิด ลองอีกครั้ง";
        result.style.color = 'red';

        if(correct2){
            score--;
            correct2= false;
            sumresult.textContent = "คำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }
}