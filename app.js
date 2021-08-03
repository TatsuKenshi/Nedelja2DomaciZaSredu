// Zadatak 1

// varijable
let dan = 1;
let puzPredjeniPut = 0;
let brzinaPuza = 3;
let visinaDrveta = 100;
let brzinaRastaDrveta = 1;

//  while
while (puzPredjeniPut < visinaDrveta) {
  puzPredjeniPut += brzinaPuza;
  console.log(
    `Dan ${dan}: Puz je presao ${puzPredjeniPut}cm, visina drveta je ${visinaDrveta} cm.`
  );
  visinaDrveta++;
  dan++;
}

// konacno stanje
console.log(`Puz se popeo na drvo za ${dan - 1} dana.`);

// Zadatak 2

// varijable za penzionere
let penzioneriRegularniPopust = 0.7;
let penzioneriRegularnaGranica = 2000;
let penzioneriKonacnaCena;

// varijable za studente
let studentiRegularniPopust = 0.8;
let studentiRegularnaGranica = 3000;
let studentiKonacnaCena;

// varijable za zaposlene
let zaposleniRegularniPopust = 0.95;
let zaposleniRegularnaGranica = 5000;
let zaposleniKonacnaCena;

// varijable za firme
let firmeRegularniPopust = 0.9;
let firmeRegularnaGranica = 10000;
let firmeKonacnaCena;

// varijable za ostale
let ostaliKonacnaCena;

// specijalni popust vikendom
let vikendAkcija = 0.95;

// dan i pocetna cena
let danProdaje = "petak";
let cena = 5000;

// switch
switch (danProdaje) {
  // RADNI DANI
  case "ponedeljak":
  case "utorak":
  case "sreda":
  case "cetvrtak":
  case "petak":
    if (cena > 0) {
      // tip kupca: ostali
      ostaliKonacnaCena = cena;
      console.log(
        `Osnovna cena: ${cena} dinara. OSTALI nemaju popust radnim danima. Konacna cena: ${ostaliKonacnaCena} dinara.`
      );
      // tip kupca: penzioneri, cena: ispod granice za popust
      if (cena <= penzioneriRegularnaGranica) {
        penzioneriKonacnaCena = cena;
        console.log(
          `Osnovna cena: ${cena} dinara. PENZIONERI nemaju popust radnim danima na artikle do i ukljucujuci ${penzioneriRegularnaGranica} dinara. Konacna cena: ${penzioneriKonacnaCena} dinara.`
        );
      } else {
        // cena: iznad granice za popust
        penzioneriKonacnaCena = cena * penzioneriRegularniPopust;
        console.log(
          `Osnovna cena: ${cena} dinara. PENZIONERI imaju ${
            100 - penzioneriRegularniPopust * 100
          }% popusta svim danima na artikle preko ${penzioneriRegularnaGranica} dinara. Konacna cena: ${penzioneriKonacnaCena} dinara. Ostvareni popust: ${
            cena - penzioneriKonacnaCena
          } dinara.`
        );
      }
      // tip kupca: studenti, cena: ispod granice za popust
      if (cena <= studentiRegularnaGranica) {
        studentiKonacnaCena = cena;
        console.log(
          `Osnovna cena: ${cena} dinara. STUDENTI nemaju popust radnim danima na artikle do i ukljucujuci ${studentiRegularnaGranica} dinara. Konacna cena: ${studentiKonacnaCena} dinara.`
        );
      } else {
        // cena: iznad granice za popust
        studentiKonacnaCena = cena * studentiRegularniPopust;
        console.log(
          `Osnovna cena: ${cena} dinara. STUDENTI imaju ${
            100 - studentiRegularniPopust * 100
          }% popusta svim danima na artikle preko ${studentiRegularnaGranica} dinara. Konacna cena: ${studentiKonacnaCena} dinara. Ostvareni popust: ${
            cena - studentiKonacnaCena
          } dinara.`
        );
      }
      // tip kupca: zaposleni, cena: ispod granice za popust
      if (cena <= zaposleniRegularnaGranica) {
        zaposleniKonacnaCena = cena;
        console.log(
          `Osnovna cena: ${cena} dinara. ZAPOSLENI nemaju popust radnim danima na artikle do i ukljucujuci ${zaposleniRegularnaGranica} dinara. Konacna cena: ${zaposleniKonacnaCena} dinara.`
        );
      } else {
        // cena: iznad granice za popust
        zaposleniKonacnaCena = cena * zaposleniRegularniPopust;
        console.log(
          `Osnovna cena: ${cena} dinara. ZAPOSLENI imaju ${
            100 - zaposleniRegularniPopust * 100
          }% popusta svim danima na artikle preko ${zaposleniRegularnaGranica} dinara. Konacna cena: ${zaposleniKonacnaCena} dinara. Ostvareni popust: ${
            cena - zaposleniKonacnaCena
          } dinara.`
        );
      }
      // tip kupca: firme, cena: ispod granice za popust
      if (cena <= firmeRegularnaGranica) {
        firmeKonacnaCena = cena;
        console.log(
          `Osnovna cena: ${cena} dinara. FIRME nemaju popust radnim danima na artikle do i ukljucujuci ${firmeRegularnaGranica} dinara. Konacna cena: ${firmeKonacnaCena} dinara.`
        );
      } else {
        // cena: iznad granice za popust
        firmeKonacnaCena = cena * firmeRegularniPopust;
        console.log(
          `Osnovna cena: ${cena} dinara. FIRME imaju ${
            100 - firmeRegularniPopust * 100
          }% popusta svim danima na artikle preko ${firmeRegularnaGranica} dinara. Konacna cena: ${firmeKonacnaCena} dinara. Ostvareni popust: ${
            cena - firmeKonacnaCena
          } dinara.`
        );
      }
    } else {
      // ako je cena nula ili negativan broj.
      console.log(`Cena mora biti veca od nule.`);
    }
    break;
  // VIKEND AKCIJA
  case "subota":
  case "nedelja":
    if (cena > 0) {
      // tip kupca: ostali
      ostaliKonacnaCena = cena * vikendAkcija;
      console.log(
        `Osnovna cena: ${cena} dinara. OSTALI imaju Vikend Akcija popust od ${
          100 - vikendAkcija * 100
        }% na sve artikle vikendom. Konacna cena: ${ostaliKonacnaCena} dinara. Ostvareni popust: ${
          cena - ostaliKonacnaCena
        } dinara.`
      );
      // tip kupca: penzioneri, cena: ispod granice za regularni popust
      if (cena <= penzioneriRegularnaGranica) {
        penzioneriKonacnaCena = cena * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. PENZIONERI nemaju popust vikendom na artikle do i ukljucujuci ${penzioneriRegularnaGranica} dinara. Ali, PENZIONERI imaju Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${penzioneriKonacnaCena} dinara. Ostvareni popust: ${
            cena - penzioneriKonacnaCena
          } dinara.`
        );
      } else {
        // cena: iznad granice za regularni popust
        penzioneriKonacnaCena = cena * penzioneriRegularniPopust * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. PENZIONERI imaju ${
            100 - penzioneriRegularniPopust * 100
          }% popusta svim danima na artikle preko ${penzioneriRegularnaGranica} dinara, kao i Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${penzioneriKonacnaCena} dinara. Ostvareni popust: ${
            cena - penzioneriKonacnaCena
          } dinara.`
        );
      }
      // tip kupca: studenti, cena: ispod granice za regularni popust
      if (cena <= studentiRegularnaGranica) {
        studentiKonacnaCena = cena * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. STUDENTI nemaju popust vikendom na artikle do i ukljucujuci ${studentiRegularnaGranica} dinara. Ali, STUDENTI imaju Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${studentiKonacnaCena} dinara. Ostvareni popust: ${
            cena - studentiKonacnaCena
          } dinara.`
        );
      } else {
        // cena: iznad granice za regularni popust
        studentiKonacnaCena = cena * studentiRegularniPopust * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. STUDENTI imaju ${
            100 - studentiRegularniPopust * 100
          }% popusta svim danima na artikle preko ${studentiRegularnaGranica} dinara, kao i Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${studentiKonacnaCena} dinara. Ostvareni popust: ${
            cena - studentiKonacnaCena
          } dinara.`
        );
      }
      // tip kupca: zaposleni, cena: ispod granice za regularni popust
      if (cena <= zaposleniRegularnaGranica) {
        zaposleniKonacnaCena = cena * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. ZAPOSLENI nemaju popust vikendom na artikle do i ukljucujuci ${zaposleniRegularnaGranica} dinara. Ali, ZAPOSLENI imaju Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${zaposleniKonacnaCena} dinara. Ostvareni popust: ${
            cena - zaposleniKonacnaCena
          } dinara.`
        );
      } else {
        // cena: iznad granice za regularni popust
        zaposleniKonacnaCena = cena * zaposleniRegularniPopust * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. ZAPOSLENI imaju ${
            100 - zaposleniRegularniPopust * 100
          }% popusta svim danima na artikle preko ${zaposleniRegularnaGranica} dinara, kao i Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${zaposleniKonacnaCena} dinara. Ostvareni popust: ${
            cena - zaposleniKonacnaCena
          } dinara.`
        );
      }
      // tip kupca: firme, cena: ispod granice za regularni popust
      if (cena <= firmeRegularnaGranica) {
        firmeKonacnaCena = cena * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. FIRME nemaju popust vikendom na artikle do i ukljucujuci ${firmeRegularnaGranica} dinara. Ali, FIRME imaju Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${firmeKonacnaCena} dinara. Ostvareni popust: ${
            cena - firmeKonacnaCena
          } dinara.`
        );
      } else {
        // cena: iznad granice za regularni popust
        firmeKonacnaCena = cena * firmeRegularniPopust * vikendAkcija;
        console.log(
          `Osnovna cena: ${cena} dinara. FIRME imaju ${
            100 - firmeRegularniPopust * 100
          }% popusta svim danima na artikle preko ${firmeRegularnaGranica} dinara, kao i Vikend Akcija popust od ${
            100 - vikendAkcija * 100
          }% na sve artikle vikendom. Konacna cena: ${firmeKonacnaCena} dinara. Ostvareni popust: ${
            cena - firmeKonacnaCena
          } dinara.`
        );
      }
    } else {
      // ako je cena nula ili negativan broj.
      console.log(`Cena mora biti veca od nule.`);
    }
    break;

  default:
    console.log(
      `Neispravan dan. Unesite neku od sledecih vrednosti: "ponedeljak", "utorak", "sreda", "cetvrtak", "petak", "subota", "nedelja". Malo pocetno slovo.`
    );
    break;
}
