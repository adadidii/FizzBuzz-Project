// Script Start, script di bawah dijalankan ketika dokumen HTML sudah terload/parsed semua //
document.addEventListener("DOMContentLoaded", function () {
  // Definisikan Variabel, ambil sesuai dengan elemen yang diperlukan //
  const form = document.getElementById("formFizzbuzz");
  const numberInput = document.getElementById("numberInput");
  const submitButton = document.getElementById("submitButton");
  const result = document.getElementById("result");

  // Jalankan perintah pengecekan, dengan menambah "Event Listener" untuk tombol submit //
  submitButton.addEventListener("click", function () {
    // Definisikan variabel, perintah mengambil nilai dari Input "numberInput" //
    const inputValue = parseInt(numberInput.value);

    //Setelah mengambil input, selanjutnya value akan diperiksa, apakah value nya sesuai dengan kondisi yang diinginkan (baris ke 3 - seterusnya) //

    // 2 baris Perintah di bawah ini akan mengecek, ketika input yang dimasukkan adalah huruf (bukan angka) atau angka 0, maka akan menampilkan "Invalid". Setelah lolos pengecekan, maka dilanjut ke baris ke-3 //
    if (isNaN(inputValue) || inputValue === 0) {
      result.innerHTML = "Invalid Input";
      result.style.color = "red";
    } else if (inputValue % 3 === 0 && inputValue % 5 === 0) {
      result.innerHTML = "FizzBuzz";
      result.style.color = "blue";
    } else if (inputValue % 3 === 0) {
      result.innerHTML = "Fizz";
      result.style.color = "green";
    } else if (inputValue % 5 === 0) {
      result.innerHTML = "Buzz";
      result.style.color = "purple";
    } else {
      result.innerHTML = inputValue;
      result.style.color = "black"; // Menampilkan angka selain kelipatan 3 dan 5 //
    }
  });

  // Script Modal, bagian bantuan //

  //Definisikan Variabel
  const modal = document.getElementById("helpModal");
  const openButton = document.getElementById("openModalButton");
  const closeIcon = document.getElementById("closeModalIcon");

  //Jalankan Perintah, ketika ingin membuka Modal
  openButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  //Jalankan perintah, ketika ingin menutup modal
  closeIcon.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
