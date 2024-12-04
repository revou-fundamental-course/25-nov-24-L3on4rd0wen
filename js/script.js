// Pengambilan id || Picking ids
let gender = document.getElementById("gender");
let weight = document.getElementById("displayW");
let height = document.getElementById("displayH");
let result = document.getElementById("result");
let count = document.getElementById("count");
let reset = document.getElementById("reset");

// Nilai Tinggi dan Berat || Height and weight values
let w = weight.value;
let h = height.value;

// Menghitung bmi || Calculates bmi
function calculate() {

    let bmi = w / ((h / 100) ** 2);

    //Memilih kategori dan mencari error || Picks a category and finds errors
    if (bmi < 18.5) {
        result.textContent = "Kekurangan Berat Badan (Underweight)";
    } else if (bmi < 24.9) {
        result.textContent = "Normal";
    } else if (bmi < 29.9) {
        result.textContent = "Kelebihan Berat Badan (Overweight)";
    } else if (bmi > 29.9) {
        result.textContent = "Obesitas (Obesity)";
    } else if (w === "" || h === "") {
        alert("Tolong masukan tinggi dan berat badan anda \n(Please enter your weight and height)");
    } 
}

// Reset
function reset() {
    w = "";
    h = "";
    result.textContent = "";
}

// memilih kelamin  || picks gender
function rotate() {
 if (gender.textContent === "Pria") {
    gender.textContent = "Wanita";
 } else {
    gender.textContent = "Pria";
 }
}