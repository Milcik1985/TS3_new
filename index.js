// 1. Savo nuožiūra sukurti IT projekto objekto tipą;
// 2. Objektas turi turėti property "projectType" kuris gali būt "IN_HOUSE" arba "OUTSOURCE"
// 3. Projektas turi turėt property "location" tai turi būt objektas kuris susideda iš "country", "city", "address";
// 4. Atskirai apsirašyti UserType (savo nuožiūra) bei sukurti kelis user kintamuosius;
// 5. Prie project tipo pridėt property "contributors" kuris masyvas susidedantis iš apsirašytu useriu;
// 6. Sukurti projekto kintamąjį bei panaudoti apsirašytą tipą;
// 7. Sukurti kintamąjį projects kuris masyvas susidedantis iš projektų;
// 8. Parašyt funkciją addItemToChart kuriai yra paduodamas prekės pavadinimas bei kainą. 
// 9. Sukuti produkto tipą. Produktui turi būt priskirtas produkto tipas pačioje funkcijoje; (Vygdyt destrukturizaciją);
// 10. Projektui sukurti tsc konfiguraciją. Pertvarkyt projektą, kad tiktu reikšmės:
// "target": "es2016",
// "module": "es2015",  
// "outDir": "./public",
// "rootDir": "./"
var userJohn = {
    name: "John",
    surname: "Doe",
};
var userJane = {
    name: "Jane",
    surname: "Doe",
};
// 6. Sukurti projekto kintamąjį bei panaudoti apsirašytą tipą;
var projectA = {
    projectName: "Project A",
    projectType: "IN_HOUSE",
    location: {
        country: "Lithuania",
        city: "Vilnius",
        address: "Gedimino g. 123",
    },
    contributors: [userJohn],
};
var projectB = {
    projectName: "Project B",
    projectType: "OUTSOURCE",
    location: {
        country: "United States",
        city: "New York",
        address: "Broadway 456",
    },
    contributors: [userJohn, userJane],
};
// 7. Sukurti kintamąjį projects kuris masyvas susidedantis iš projektų;
var projects = [projectA, projectB];
// 9. Sukuti produkto tipą. Produktui turi būt priskirtas produkto tipas pačioje funkcijoje; (Vygdyt destrukturizaciją);
var addItemToChart = function (_a) {
    var title = _a.title, price = _a.price;
    console.log(title);
    console.log(price);
};
addItemToChart({ price: 20, title: "IPhone" });
var carUpdate = {
    title: "VW",
    carModel: "Passat",
    dateOfManufacture: new Date("2022-10-10"),
};
// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
var Book1 = {
    title: "PAKELEIVIAI",
    author: "Lina Ever",
    price: 19.89,
    isAvailable: true,
    id: 20240222001,
};
var Book2 = {
    title: "Gamtos terapija",
    author: "Giedrė Žalytė",
    price: 16.79,
    isAvailable: true,
    id: 20240222002,
};
var Book3 = {
    title: "Išdidumo kalinė",
    author: "Sonata Dirsytė",
    price: 22.69,
    isAvailable: true,
    id: 20240222003,
};
var books = [Book1, Book2, Book3];
console.log(books);
// 7. Supushint kodą į gitbubą.
// 8. CAO TS 4, 5 tema;.
