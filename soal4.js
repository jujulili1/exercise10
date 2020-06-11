let ulangi = confirm("Apakah anda mau mengulang?");
let counter = 0;

do {
    ulangi;
    counter++;
} while (ulangi)

console.log(`Perulangan sudah dilakukan sebanyak ${counter-1} kali `);