// Pengambilan id || Picking ids
let gender = document.getElementById("gender");
let weight = document.getElementById("displayW");
let height = document.getElementById("displayH");
let result = document.getElementById("result");

// memilih kelamin  || picks gender
function rotate() {
    if (gender.textContent === "Pria") {
       gender.textContent = "Wanita";
    } else {
       gender.textContent = "Pria";
    }
}


// Menghitung bmi || Calculates bmi
function calculate() {
    // Nilai Tinggi dan Berat || Height and weight values
    const w = parseFloat(weight.value);
    const h = parseFloat(height.value) / 100;

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert("Tolong masukkan nilai berat dan tinggi badan yang valid dan positif. \n(Please enter valid positive values for weight and height.)");
    } else {
        const bmi = w / (h * h);

        if (bmi < 18.5) {
            result.textContent = "Kekurangan Berat Badan (Underweight)";
        } else if (bmi < 24.9) {
            result.textContent = "Normal";
        } else if (bmi < 29.9) {
            result.textContent = "Kelebihan Berat Badan (Overweight)";
        } else {
            result.textContent = "Obesitas (Obesity)";
        }
    }
}

// Reset
function reset() {
    weight.value = "";
    height.value = "";
    result.textContent = "";
}