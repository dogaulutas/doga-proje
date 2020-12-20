const hesaplaBtn = document.querySelector(".bki-button");
let kiloInput = document.querySelector(".weight");
let boyInput = document.querySelector(".length");

let output = document.getElementById("bki-sonuc");

let bkiDeger;

hesaplaBtn.addEventListener("click", () => {
    let boy = parseInt(boyInput.value) / 100;
    let kilo = parseInt(kiloInput.value);
    console.log(output, boy, kilo);
    if (boy < 99 && boy > 0 && kilo < 9999 && kilo > 0) {
        console.log("valid");
        bkiDeger = kilo / (boy * boy);
        bkiDeger = bkiDeger.toFixed(2);

        output.innerHTML = "Sonuç: " + bkiDeger;

        if (bkiDeger > 30) {
            output.innerHTML = "Sonuç: " + bkiDeger + "<br>Obez";
        } else if (bkiDeger > 25) {
            output.innerHTML = "Sonuç: " + bkiDeger + "<br>Aşırı Kilolu";
        } else if (bkiDeger > 18.50) {
            output.innerHTML = "Sonuç: " + bkiDeger + "<br>Sağlıklı Kilolu";
        } else {
            output.innerHTML = "Sonuç: " + bkiDeger + "<br>Zayıf";
        }
    } else {
        console.log("invalid");
        output.innerHTML = "Lütfen geçerli birer değer girin.";
    }
});