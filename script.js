// ===================================================
//  SIDEBAR NAVIGATION
// ===================================================

function showSection(id) {
    let allSections = document.querySelectorAll(".section");
    allSections.forEach(function(sec) {
        sec.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

function toggleEx(menuId, arrowId) {
    let menu = document.getElementById(menuId);
    let arrow = document.getElementById(arrowId);
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        arrow.textContent = "▾";
    } else {
        menu.classList.add("hidden");
        arrow.textContent = "▸";
    }
}

function printLine(outputId, text) {
    let box = document.getElementById(outputId);
    box.textContent += text + "\n";
}

function clearOutput(outputId) {
    document.getElementById(outputId).textContent = "";
}

// Console-only hint message
const CONSOLE_MSG = "🖥️ Oops! You can only view this in the console.\nPress F12 → open the Console tab to see the output.";


// ===================================================
//  EXERCISE 2 — JavaScript Basics
// ===================================================

// Activity 1 — Hello JS (console only)
function runE2A1() {
    clearOutput("out_e2a1");
    printLine("out_e2a1", CONSOLE_MSG);

    console.log("=== Activity 1: Your First JavaScript Output ===");
    console.log("Welcome to JavaScript!");
    console.log("This is my first JS program.");
}

// Activity 2 — Variables (console only)
function runE2A2() {
    clearOutput("out_e2a2");
    printLine("out_e2a2", CONSOLE_MSG);

    let name = "Ayan";
    let age = 20;
    let isStudent = true;

    console.log("=== Activity 2: Variables and Data Types ===");
    console.log(name);
    console.log(age);
    console.log(isStudent);
    console.log("My name is " + name + ", I am " + age + " years old.");
}

// Activity 3 — Basic Calculator (console only)
function runE2A3() {
    clearOutput("out_e2a3");
    printLine("out_e2a3", CONSOLE_MSG);

    let a = 10;
    let b = 5;

    console.log("=== Activity 3: Simple Calculator ===");
    console.log("Sum: " + (a + b));
    console.log("Difference: " + (a - b));
    console.log("Product: " + (a * b));
    console.log("Quotient: " + (a / b));
}

// Activity 4 — Prompt Input (console only)
function runE2A4() {
    clearOutput("out_e2a4");
    let name = document.getElementById("nameInput").value.trim();
    let favNum = document.getElementById("favNumInput").value.trim();

    if (name === "" || favNum === "") {
        printLine("out_e2a4", "⚠ Please fill in both fields first!");
        return;
    }

    printLine("out_e2a4", CONSOLE_MSG);

    console.log("=== Activity 4: User Input using prompt() ===");
    console.log("Hello " + name + "! Your favorite number is " + favNum + ".");
}

// Activity 5 — If-Else (shows output in box)
function runE2A5() {
    clearOutput("out_e2a5");
    let age = Number(document.getElementById("ageInput").value);

    if (!age || age <= 0) {
        printLine("out_e2a5", "⚠ Please enter a valid age.");
        return;
    }

    printLine("out_e2a5", "Age entered: " + age);
    if (age >= 18) {
        printLine("out_e2a5", "✅ You are eligible.");
    } else {
        printLine("out_e2a5", "❌ You are not eligible.");
    }

    console.log("=== Activity 5: Conditional Statements ===");
    console.log("Age: " + age);
    if (age >= 18) {
        console.log("You are eligible.");
    } else {
        console.log("You are not eligible.");
    }
}

// Activity 6 — Loops (console only)
function runE2A6() {
    clearOutput("out_e2a6");
    printLine("out_e2a6", CONSOLE_MSG);

    console.log("=== Activity 6: Loops (Basic) ===");
    console.log("-- For Loop (1 to 10) --");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    console.log("-- While Loop (10 to 1) --");
    let j = 10;
    while (j >= 1) {
        console.log(j);
        j--;
    }
}

// Activity 7 — Button Click (shows output in box)
let clickCount = 0;
function runE2A7() {
    clearOutput("out_e2a7");
    clickCount++;
    printLine("out_e2a7", "Button Clicked!");
    printLine("out_e2a7", "Total clicks: " + clickCount);

    console.log("=== Activity 7: JavaScript and HTML Interaction ===");
    console.log("Button Clicked!");
    console.log("Total clicks: " + clickCount);
}


// ===================================================
//  EXERCISE 3 — DOM Manipulation
// ===================================================

// Activity 1 — Change Background
let bgChanged = false;
document.getElementById("btn1").addEventListener("click", function () {
    let target = document.getElementById("bgTarget");
    let out = document.getElementById("out_e3a1");
    if (!bgChanged) {
        target.style.backgroundColor = "lightblue";
        target.style.border = "3px solid #1e3c72";
        target.style.borderRadius = "12px";
        out.innerHTML = "Background is: <strong>Light Blue ✅</strong>";
        bgChanged = true;
    } else {
        target.style.backgroundColor = "";
        target.style.border = "";
        out.innerHTML = "Background is: <strong>Default</strong>";
        bgChanged = false;
    }
});

// Activity 2 — Dark Mode
let isDark = false;
document.getElementById("btn2").addEventListener("click", function () {
    let target = document.getElementById("darkTarget");
    let out = document.getElementById("out_e3a2");
    if (!isDark) {
        target.classList.add("dom-dark");
        out.innerHTML = "Dark mode is: <strong>ON 🌙</strong>";
        isDark = true;
    } else {
        target.classList.remove("dom-dark");
        out.innerHTML = "Dark mode is: <strong>OFF ☀️</strong>";
        isDark = false;
    }
});

// Activity 3 — Add List Item
let itemCount = 2;
document.getElementById("btn3").addEventListener("click", function () {
    let li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    document.getElementById("list").appendChild(li);
    itemCount++;
});

// Activity 4 — Remove Element
document.getElementById("btn4").addEventListener("click", function () {
    let para = document.getElementById("removeText");
    if (para) {
        para.remove();
    }
});

// Activity 5 — Character Counter
document.getElementById("inputText").addEventListener("input", function () {
    document.getElementById("charCount").textContent = this.value.length;
});

// Activity 6 — Mini Calculator
document.getElementById("btn6").addEventListener("click", function () {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let sum = (isNaN(n1) ? 0 : n1) + (isNaN(n2) ? 0 : n2);
    document.getElementById("result").textContent = sum;
});

// Activity 7 — Image Swap
document.getElementById("btn7").addEventListener("click", function () {
    let img = document.getElementById("image");
    if (img.src.includes("pic1.jpg")) {
        img.src = "pic2.jpg";
    } else {
        img.src = "pic1.jpg";
    }
});

// Activity 8 — To-Do List
document.getElementById("btn8").addEventListener("click", function () {
    let input = document.getElementById("todoInput");
    let text = input.value.trim();
    if (text === "") return;
    let li = document.createElement("li");
    li.textContent = text;
    document.getElementById("todoList").appendChild(li);
    input.value = "";
    input.focus();
});


// ===================================================
//  EXERCISE 4 — Grade Calculator
// ===================================================

document.getElementById("calculateBtn").addEventListener("click", function () {
    let quiz = parseFloat(document.getElementById("quiz").value);
    let exam = parseFloat(document.getElementById("exam").value);
    let mco  = parseFloat(document.getElementById("mco").value);

    if (
        isNaN(quiz) || isNaN(exam) || isNaN(mco) ||
        quiz < 0 || quiz > 100 ||
        exam < 0 || exam > 100 ||
        mco < 0  || mco > 100
    ) {
        document.getElementById("finalGrade").textContent = "⚠ Enter valid scores (0–100).";
        document.getElementById("gradeEquivalent").textContent = "";
        return;
    }

    let grade = (quiz * 0.20) + (exam * 0.30) + (mco * 0.50);

    let equivalent = "";
    if (grade >= 90) { equivalent = "A"; }
    else if (grade >= 80) { equivalent = "B"; }
    else if (grade >= 70) { equivalent = "C"; }
    else if (grade >= 60) { equivalent = "D"; }
    else                  { equivalent = "F"; }

    document.getElementById("finalGrade").textContent     = "Final Grade: " + grade.toFixed(2);
    document.getElementById("gradeEquivalent").textContent = "Grade Equivalent: " + equivalent;
});

document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("quiz").value = "";
    document.getElementById("exam").value = "";
    document.getElementById("mco").value  = "";
    document.getElementById("finalGrade").textContent      = "";
    document.getElementById("gradeEquivalent").textContent = "";
});