const terminal = document.getElementById("terminal");
const alarm = document.getElementById("alarm");

let lines = "";

// ================== إنشاء 50 سطر ==================
for(let i = 0; i < 50; i++){

lines +=
"[INFO] Loading system files...\n" +
"[OK] Accessing memory sector " + i + "\n" +
"[OK] Scanning network ports...\n" +
"[OK] Reading encrypted data...\n" +
"[OK] Checking database...\n" +
"[OK] Searching records...\n\n";

}

// ================== رسائل النهاية ==================
lines += `
===================================

USER FOUND
DEVICE FOUND
NETWORK FOUND
DATABASE FOUND

ACCESS GRANTED

SYSTEM BREACHED

تم التهكير

===================================
`;

let currentLine = 0;

// ================== كتابة سطر بسطر ==================
function typeLines(){

    if(currentLine < lines.split("\n").length){

        const arr = lines.split("\n");

        terminal.innerHTML += arr[currentLine] + "\n";

        terminal.scrollTop = terminal.scrollHeight;

        currentLine++;

        setTimeout(typeLines, 200);

    } else {
        showAlarm();
    }
}

// ================== شاشة التهكير ==================
function showAlarm(){

    alarm.style.display = "block";

    let text = "";

    for(let i=0;i<50;i++){
        text += "🔴 تم التهكير 🔴 تم التهكير 🔴 تم التهكير\n";
    }

    alarm.innerText = text;
}

// ================== البداية ==================
setTimeout(typeLines, 1000);