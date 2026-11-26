const TRESC = document.getElementById("tresc");
const BLAD_TRESCI = document.querySelector(".blad-tresci");
const POPRAWNA_TRESC = document.querySelector(".poprawna-tresc");

let sprawdzTresc = () => {
  if (TRESC.value.trim() === "") {
    BLAD_TRESCI.style.display = "flex";
    POPRAWNA_TRESC.style.display = "none";
    TRESC.style.borderColor = "red";
  } else {
    BLAD_TRESCI.style.display = "none";
    POPRAWNA_TRESC.style.display = "flex";
    TRESC.style.borderColor = "lime";
  }
};

TRESC.addEventListener("blur", sprawdzTresc);

const IMIE = document.getElementById("imie");
const BLAD_IMIENIA = IMIE.nextElementSibling.querySelector(".blad-tresci");
const POPRAWNE_IMIE = IMIE.nextElementSibling.querySelector(".poprawna-tresc");
let sprawdzImie = () => {
  if (IMIE.value.trim() === "") {
    BLAD_IMIENIA.textContent = "Pole musi byc uzupelnione...";
    BLAD_IMIENIA.style.display = "flex";
    POPRAWNE_IMIE.style.display = "none";
    IMIE.style.borderColor = "red";
  } else if (IMIE.value.trim().length <= 2) {
    BLAD_IMIENIA.textContent = "Zbyt krótkie imię..";
    BLAD_IMIENIA.style.display = "flex";
    POPRAWNE_IMIE.style.display = "none";
    IMIE.style.borderColor = "red";
  } else if (!/^[\p{L} -]+$/u.test(IMIE.value.trim())) {
    BLAD_IMIENIA.textContent = "Imię może zawierać tylko litery..";
    BLAD_IMIENIA.style.display = "flex";
    POPRAWNE_IMIE.style.display = "none";
    IMIE.style.borderColor = "red";
  } else {
    BLAD_IMIENIA.style.display = "none";
    POPRAWNE_IMIE.style.display = "flex";
    IMIE.style.borderColor = "lime";
  }
};

IMIE.addEventListener("blur", sprawdzImie);
const EMAIL = document.getElementById("email");
const BLAD_EMAILA = EMAIL.nextElementSibling.querySelector(".blad-tresci");
const POPRAWNY_EMAIL =
  EMAIL.nextElementSibling.querySelector(".poprawna-tresc");

let sprawdzEmail = () => {
  const wartosc = EMAIL.value.trim();

  if (wartosc === "") {
    BLAD_EMAILA.textContent = "Pole musi byc uzupelnione...";
    BLAD_EMAILA.style.display = "flex";
    POPRAWNY_EMAIL.style.display = "none";
    EMAIL.style.borderColor = "red";
  } else if (!wartosc.includes("@")) {
    BLAD_EMAILA.textContent = "Adres musi zawierac znak @..";
    BLAD_EMAILA.style.display = "flex";
    POPRAWNY_EMAIL.style.display = "none";
    EMAIL.style.borderColor = "red";
  } else if (wartosc.length < 6) {
    BLAD_EMAILA.textContent = "Adres e-mail jest za krotki..";
    BLAD_EMAILA.style.display = "flex";
    POPRAWNY_EMAIL.style.display = "none";
    EMAIL.style.borderColor = "red";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(wartosc)) {
    BLAD_EMAILA.textContent = "Niepoprawny format, np. jan@gmail.com";
    BLAD_EMAILA.style.display = "flex";
    POPRAWNY_EMAIL.style.display = "none";
    EMAIL.style.borderColor = "red";
  } else {
    BLAD_EMAILA.style.display = "none";
    POPRAWNY_EMAIL.style.display = "flex";
    EMAIL.style.borderColor = "lime";
  }
};

EMAIL.addEventListener("blur", sprawdzEmail);
const TEL = document.getElementById("tel");
const BLAD_TELEFONU = TEL.nextElementSibling.querySelector(".blad-tresci");
const POPRAWNY_TELEFON =
  TEL.nextElementSibling.querySelector(".poprawna-tresc");

let sprawdzTel = () => {
  const wartosc = TEL.value.trim();
  TEL.value = wartosc;

  if (wartosc === "") {
    BLAD_TELEFONU.textContent = "Pole musi byc uzupelnione...";
    BLAD_TELEFONU.style.display = "flex";
    POPRAWNY_TELEFON.style.display = "none";
    TEL.style.borderColor = "red";
  } else if (
    !/^(\+48)?[ -]?[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{3}$/.test(wartosc)
  ) {
    BLAD_TELEFONU.textContent = "Numer 9-cyfrowy, np. 123 456 789";
    BLAD_TELEFONU.style.display = "flex";
    POPRAWNY_TELEFON.style.display = "none";
    TEL.style.borderColor = "red";
  } else {
    BLAD_TELEFONU.style.display = "none";
    POPRAWNY_TELEFON.style.display = "flex";
    TEL.style.borderColor = "lime";
  }
};

TEL.addEventListener("blur", sprawdzTel);
const DATA_OD = document.getElementById("dataOd");
const BLAD_DATY_OD = DATA_OD.nextElementSibling.querySelector(".blad-tresci");
const POPRAWNA_DATA_OD =
  DATA_OD.nextElementSibling.querySelector(".poprawna-tresc");

const DATA_DO = document.getElementById("dataDo");
const BLAD_DATY_DO = DATA_DO.nextElementSibling.querySelector(".blad-tresci");
const POPRAWNA_DATA_DO =
  DATA_DO.nextElementSibling.querySelector(".poprawna-tresc");

let sprawdzDataOd = () => {
  if (DATA_OD.value === "") {
    BLAD_DATY_OD.textContent = "Wybierz datę początkową..";
    BLAD_DATY_OD.style.display = "flex";
    POPRAWNA_DATA_OD.style.display = "none";
    DATA_OD.style.borderColor = "red";
  } else {
    BLAD_DATY_OD.style.display = "none";
    POPRAWNA_DATA_OD.style.display = "flex";
    DATA_OD.style.borderColor = "lime";
  }
};

let sprawdzDataDo = () => {
  if (DATA_DO.value === "") {
    BLAD_DATY_DO.textContent = "Wybierz datę końcową..";
    BLAD_DATY_DO.style.display = "flex";
    POPRAWNA_DATA_DO.style.display = "none";
    DATA_DO.style.borderColor = "red";
  } else if (DATA_OD.value !== "" && DATA_DO.value < DATA_OD.value) {
    BLAD_DATY_DO.textContent =
      "Termin „do” nie może być wcześniejszy niż „od”..";
    BLAD_DATY_DO.style.display = "flex";
    POPRAWNA_DATA_DO.style.display = "none";
    DATA_DO.style.borderColor = "red";
  } else {
    BLAD_DATY_DO.style.display = "none";
    POPRAWNA_DATA_DO.style.display = "flex";
    DATA_DO.style.borderColor = "lime";
  }
};

DATA_OD.addEventListener("blur", sprawdzDataOd);
DATA_OD.addEventListener("change", () => {
  sprawdzDataOd();
  if (DATA_DO.value !== "") sprawdzDataDo();
});
DATA_DO.addEventListener("blur", sprawdzDataDo);
DATA_DO.addEventListener("change", sprawdzDataDo);
const KUCHNIA = document.getElementById("kuchnia");
const BLAD_KUCHNI = KUCHNIA.nextElementSibling.querySelector(".blad-tresci");
const POPRAWNA_KUCHNIA =
  KUCHNIA.nextElementSibling.querySelector(".poprawna-tresc");

let sprawdzKuchnie = () => {
  if (KUCHNIA.value === "") {
    BLAD_KUCHNI.style.display = "flex";
    POPRAWNA_KUCHNIA.style.display = "none";
    KUCHNIA.style.borderColor = "red";
  } else {
    BLAD_KUCHNI.style.display = "none";
    POPRAWNA_KUCHNIA.style.display = "flex";
    KUCHNIA.style.borderColor = "lime";
  }
};

KUCHNIA.addEventListener("blur", sprawdzKuchnie);
KUCHNIA.addEventListener("change", sprawdzKuchnie);
