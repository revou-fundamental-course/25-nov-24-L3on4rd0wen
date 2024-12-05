// Pengambilan id || Picking ids
let gender = document.getElementById("gender");
let weight = document.getElementById("displayW");
let height = document.getElementById("displayH");
let result = document.getElementById("result");
let desc = document.getElementById("desc");
let BMI = document.getElementById("bmi");

// memilih kelamin  || picks gender
function rotate(type) {
    if (type === 1) {
        if (gender.textContent === "Pria") {
            gender.textContent = "Wanita";
        } else {
            gender.textContent = "Pria";
        }
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
        let bmi = w / (h * h);
        bmi = bmi.toFixed(2);

        // Results || Hasil
        let B = "";
        if (bmi < 18.50) {
            result.textContent = "Kekurangan Berat Badan";
        } else if (bmi <= 24.99) {
            result.textContent = "Normal";
        } else if (bmi <= 29.99) {
            result.textContent = "Kelebihan Berat Badan";
        } else {
            result.textContent = "Obesitas";
        }
        BMI.textContent = bmi;
        desc.textContent = `Dengan Bmi ${bmi}, anda terkategori ${result.textContent}. \n Cara baik menormalkan berat badan dengan mengatur pola makan.`
    }
}

// Reset
function reset() {
    weight.value = "";
    height.value = "";
    result.textContent = "";
    desc.textContent = "";
    BMI.textContent = "";
}