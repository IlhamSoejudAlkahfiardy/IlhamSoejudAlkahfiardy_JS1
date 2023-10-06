function ifElse() {
  let layout = document.getElementById("program-if-else");
  layout.style.display = "block";

  let jenisKelamin = document.getElementById("if-else-jk").value;
  let hasil = document.getElementById("if-else-hasil");

  if (jenisKelamin == "L" || jenisKelamin == "l") {
    hasil.innerHTML = "Jenis kelamin anda laki-laki";
  } else if (jenisKelamin == "P" || jenisKelamin == "p") {
    hasil.innerHTML = "Jenis kelamin anda perempuan";
  } else {
    hasil.innerHTML = "Masukin jenis kelaminmu yg beneerrr!";
  }
}

function nestedIfElse() {
  let layout = document.getElementById("program-nested-if-else");
  layout.style.display = "block";

  let jenisMakanan = document.getElementById("nested-if-else-jm").value;
  let hasil = document.getElementById("nested-if-else-hasil");

  if (jenisMakanan == "vegan") {
    hasil.innerHTML =
      "Anda tidak boleh memakan daging. Silakan memilih menu vegetarian";
  } else if (jenisMakanan == "daging") {
    console.log("daging");
    let layoutBabiLabel = document.getElementById("layout-babi-label");
    let layoutBabiInput = document.getElementById("nested-if-else-daging");
    layoutBabiLabel.style.display = "block";
    layoutBabiInput.style.display = "block";

    let daging = document.getElementById("nested-if-else-daging").value;

    if (daging == "boleh") {
      hasil.innerHTML = "Silakan memesan menu masakan babi spesial kami.";
    } else if (daging == "tidak") {
      hasil.innerHTML =
        "Anda tidak boleh memakan daging. Silakan memilih menu spesial lainnya";
    } else {
      hasil.innerHTML = "Masukkan jawaban yang sesuai";
    }
  } else {
    hasil.innerHTML = "Masukkan jawaban yang sesuai";
  }
}

function switchCase() {
  let layout = document.getElementById("switch-case");
  layout.style.display = "block";
  var pilihan = document.getElementById("pilihanMobil").value;
  var hasil = document.getElementById("hasil-switch-case");

  switch (pilihan) {
    case "GTR":
      hasil.innerHTML = "Anda memilih GTR.";
      hasil.innerHTML = "Anda memilih GTR.";
      break;
    case "Innova":
      hasil.innerHTML = "Anda memilih Innova.";
      break;
    case "Pajero":
      hasil.innerHTML = "Anda memilih Pajero.";
      break;
    case "Ferrari":
      hasil.innerHTML = "Anda memilih Ferrari.";
      break;
    default:
      hasil.innerHTML = "Silakan pilih mobil.";
      break;
  }
}

function forStatement() {
  let layout = document.getElementById("for-statement");
  layout.style.display = "block";

  let ul = document.getElementById("render");

  let jumlah = document.getElementById("for-input").value;
  let intJumlah = parseInt(jumlah);

  var kalimat = "I Love Infinite Learning 💖";

  if (intJumlah > 0) {
    for (let index = 0; index <= intJumlah; index++) {
      let listItem = document.createElement("li");
      listItem.textContent = kalimat;
      ul.appendChild(listItem);
    }
  }
}

function whileStatement() {
  let i = 0;
  let layout = document.getElementById("while-statement");
  layout.style.display = "block";

  let ul = document.getElementById("render-while");

  let jumlah = document.getElementById("while-input").value;
  let intJumlah = parseInt(jumlah);

  var kalimat = "Render While Statement 🖥️";

  while (i < intJumlah) {
    let listItem = document.createElement("li");
    listItem.textContent = kalimat;
    ul.appendChild(listItem);

    i++;
  }
}

function doWhileStatement() {
  let i = 0;
  let layout = document.getElementById("do-while-statement");
  layout.style.display = "block";

  let ul = document.getElementById("render-do-while");

  let jumlah = document.getElementById("do-while-input").value;
  let intJumlah = parseInt(jumlah);

  var kalimat = "Render Do While Statement 🖥️";

  do {
    let listItem = document.createElement("li");
    listItem.textContent = kalimat;
    ul.appendChild(listItem);

    i++;
  } while (i < intJumlah);
}
