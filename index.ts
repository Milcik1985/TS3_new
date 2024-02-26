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

type AddressType = {
    country: string;
    city: string;
    street: string;
  }
  
  // 3. Projektas turi turėt property "location" tai turi būt objektas kuris susideda iš "country", "city", "address";
  type LocationType = {
    country: string;
    city: string;
    address: string;
  }
  
  // 4. Atskirai apsirašyti UserType (savo nuožiūra) bei sukurti kelis user kintamuosius;
  type UserType = {
    name: string;
    surname: string;
  }
  
  const userJohn: UserType = {
    name: "John",
    surname: "Doe",
  }
  
  const userJane: UserType = {
    name: "Jane",
    surname: "Doe",
  }
  
  // 1. Savo nuožiūra sukurti IT projekto objekto tipą;
  // 2. Objektas turi turėti property "projectType" kuris gali būt "IN_HOUSE" arba "OUTSOURCE"
  // 5. Prie project tipo pridėt property "contributors" kuris masyvas susidedantis iš apsirašytu useriu;
  type ProjectType = {
    projectName: string;
    projectType: "IN_HOUSE" | "OUTSOURCE";
    location: LocationType;
    contributors: UserType[];
  }
  
  // 6. Sukurti projekto kintamąjį bei panaudoti apsirašytą tipą;
  const projectA: ProjectType = {
    projectName: "Project A",
    projectType: "IN_HOUSE",
    location: {
      country: "Lithuania",
      city: "Vilnius",
      address: "Gedimino g. 123",
    },
    contributors: [userJohn],
  }
  
  const projectB: ProjectType = {
    projectName: "Project B",
    projectType: "OUTSOURCE",
    location: {
      country: "United States",
      city: "New York",
      address: "Broadway 456",
    },
    contributors: [userJohn, userJane],
  }
  
  // 7. Sukurti kintamąjį projects kuris masyvas susidedantis iš projektų;
  const projects: ProjectType[] = [projectA, projectB];
  
  // 8. Parašyt funkciją addItemToChart kuriai yra paduodamas prekės pavadinimas bei kainą. 
  type ProductType = {
      title: string;
      price: number;
  };
  
  // 9. Sukuti produkto tipą. Produktui turi būt priskirtas produkto tipas pačioje funkcijoje; (Vygdyt destrukturizaciją);
  const addItemToChart = ({title, price}: ProductType) => {
      console.log(title);
      console.log(price);
  };
  
  addItemToChart({price: 20, title: "IPhone"});
  
  // 0. Susitept rankas su Omit, Pick, Partical. Išsibandyt šiuos pagalbinius tipus
  // 1. Sukurti knygos tipą, knyga turi turėt bent 5 keys ir id.
  type BookType = {
    title: string;
    author: string;
    price: number;
    isAvailable: boolean;
    id: number;
  };
  
  // 2. Pakurti knygos įrašymo tipą BookCreationType. Jame neturi būt id. // Naudot omit.
  type BookCreationType = Omit<BookType, "price" | "id">;
  
  // 3. Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author. // Naudot pick
  type BookUpdate = Pick<BookType, "author" | "title">;
  
  // 4. Atskirai apsirašyt knygos id tipą.
  type BookIdType = {
    idDate: number;
    id: number;
  };
  
  // 5. Apsirašyt automobilio tipą. Vėliau apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui.
  type CarType = {
    title: string;
    fuelType: string;
    dateOfManufacture: Date;
    color: string;
    carModel: string;
  }
  
  type CarUpdateType = Partial<CarType>;
  
  const carUpdate: CarUpdateType = {
    title: "VW",
    carModel: "Passat",
    dateOfManufacture: new  Date ("2022-10-10"),
  }
  // 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
  const Book1: BookType = {
    title: "PAKELEIVIAI",
    author: "Lina Ever",
    price: 19.89,
    isAvailable: true,
    id: 20240222001,
  };
  
  const Book2: BookType = {
    title: "Gamtos terapija",
    author: "Giedrė Žalytė",
    price: 16.79,
    isAvailable: true,
    id: 20240222002,
  };
  
  const Book3: BookType = {
    title: "Išdidumo kalinė",
    author: "Sonata Dirsytė",
    price: 22.69,
    isAvailable: true,
    id: 20240222003,
  };
  
  type SingleBookType = Pick<BookType, "title" | "author" | "price" | "isAvailable">;
  
  const books: SingleBookType[] = [Book1, Book2, Book3];
  
  console.log(books)
  
  // 7. Supushint kodą į gitbubą.
  // 8. CAO TS 4, 5 tema;.
  
  