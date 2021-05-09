const products = [];
let p1 = {
  id: 1,
  name: "Nulla",
  price: "20 €",
  category: { id: "1", name: "Food" },
  stock: 20,
  content: "Culpa sed tenetur incidunt quia veniam sed molliti",
  imageUrl: "https://dummyimage.com/400x350",
};
let p2 = {
  id: 2,
  name: "Corporis",
  price: "27 €",
  category: { id: "1", name: "Food" },
  stock: 30,
  content: "Nam incidunt blanditiis odio inventore. Nobis volu",
  imageUrl: "https://dummyimage.com/931x785",
};
let p3 = {
  id: 3,
  name: "Minus",
  price: "29 €",
  category: { id: "1", name: "Food" },
  stock: 10,
  content: "Quod reiciendis aspernatur ipsum cum debitis. Quis",
  imageUrl: "https://dummyimage.com/556x985",
};
let p4 = {
  id: 4,
  name: "Qui",
  price: "28 €",
  category: { id: "1", name: "Food" },
  stock: 31,
  content: "Occaecati dolore assumenda facilis error quaerat. ",
  imageUrl: "https://dummyimage.com/855x573",
};
let p5 = {
  id: 5,
  name: "Similique",
  price: "26 €",
  category: { id: 2, name: "Food" },
  stock: 29,
  content: "Autem blanditiis similique saepe excepturi at erro",
  imageUrl: "http://www.lorempixel.com/577/852",
};
let p6 = {
  id: 6,
  name: "Soluta",
  price: "10 €",
  category: { id: "1", name: "Food" },
  stock: 28,
  content: "Quos accusamus distinctio voluptates ducimus neque",
  imageUrl: "https://dummyimage.com/400x350",
};
let p7 = {
  id: 7,
  name: "Quos",
  price: "24 €",
  category: { id: "1", name: "Food" },
  stock: 47,
  content: "Error voluptate recusandae reiciendis adipisci nec",
  imageUrl: "https://dummyimage.com/400x350",
};
let p8 = {
  id: 8,
  name: "Sunt",
  price: "29 €",
  category: { id: "1", name: "Food" },
  stock: 43,
  content: "Tempora sed explicabo quae recusandae vitae debiti",
  imageUrl: "https://dummyimage.com/400x350",
};
let p9 = {
  id: 9,
  name: "Nemo",
  price: "14 €",
  category: { id: "1", name: "Food" },
  stock: 106,
  content: "Id pariatur at modi esse distinctio error. Dolores",
  imageUrl: "http://www.lorempixel.com/539/402",
};
let p10 = {
  id: 10,
  name: "Quo",
  price: "15 €",
  category: { id: "1", name: "Food" },
  stock: 37,
  content: "Explicabo distinctio labore eius. Culpa provident ",
  imageUrl: "https://dummyimage.com/786x94",
};
let p11 = {
  id: 11,
  name: "Nobis",
  price: "19 €",
  category: { id: "1", name: "Food" },
  stock: 16,
  content: "Reprehenderit iste quos amet. Natus consequatur in",
  imageUrl: "https://dummyimage.com/974x504",
};
let p12 = {
  id: 12,
  name: "Explicabo",
  price: "25 €",
  category: { id: "1", name: "Food" },
  stock: 70,
  content: "Nihil magni libero sapiente voluptate. Perspiciati",
  imageUrl: "https://dummyimage.com/400x350",
};
let p13 = {
  id: 13,
  name: "Hic",
  price: "17 €",
  category: { id: "1", name: "Food" },
  stock: 48,
  content: "Ut assumenda soluta esse officia. Quos quaerat sus",
  imageUrl: "http://www.lorempixel.com/152/368",
};
let p14 = {
  id: 14,
  name: "Occaecati",
  price: "19 €",
  category: { id: "1", name: "Food" },
  stock: 31,
  content: "Aut quam nisi libero distinctio. Temporibus rerum ",
  imageUrl: "https://dummyimage.com/686x327",
};
let p15 = {
  id: 15,
  name: "Consequatur",
  price: "15 €",
  category: { id: "2", name: "Beverage" },
  stock: 17,
  content: "Iste repudiandae nostrum ea iste voluptate ducimus",
  imageUrl: "http://www.lorempixel.com/264/459",
};
let p16 = {
  id: 16,
  name: "Assumenda",
  price: "23 €",
  category: { id: "2", name: "Beverage" },
  stock: 28,
  content: "Sint aperiam voluptatum laudantium laborum at debi",
  imageUrl: "https://dummyimage.com/400x350",
};
let p17 = {
  id: 17,
  name: "Placeat",
  price: "11 €",
  category: { id: "2", name: "Beverage" },
  stock: 47,
  content: "Temporibus reiciendis inventore ratione asperiores",
  imageUrl: "https://dummyimage.com/698x680",
};
let p18 = {
  id: 18,
  name: "Facilis",
  price: "13 €",
  category: { id: "2", name: "Beverage" },
  stock: 64,
  content: "In sequi cumque quisquam corrupti doloribus suscip",
  imageUrl: "http://www.lorempixel.com/10/116",
};
let p19 = {
  id: 19,
  name: "Ratione",
  price: "11 €",
  category: { id: "2", name: "Beverage" },
  stock: 36,
  content: "Corrupti sint occaecati doloribus maiores. Exceptu",
  imageUrl: "https://dummyimage.com/357x988",
};
let p20 = {
  id: 20,
  name: "Non",
  price: "23 €",
  category: { id: "2", name: "Beverage" },
  stock: 22,
  content: "Exercitationem debitis enim eum nemo necessitatibu",
  imageUrl: "https://dummyimage.com/400x350",
};
let p21 = {
  id: 21,
  name: "Quaerat",
  price: "27 €",
  category: { id: "2", name: "Beverage" },
  stock: 19,
  content: "A similique facilis facilis. Excepturi repudiandae",
  imageUrl: "http://www.lorempixel.com/904/25",
};
let p22 = {
  id: 22,
  name: "Fugiat",
  price: "16 €",
  category: { id: "2", name: "Beverage" },
  stock: 36,
  content: "Maiores eveniet dolores laudantium quae doloribus ",
  imageUrl: "https://dummyimage.com/400x350",
};
let p23 = {
  id: 23,
  name: "Voluptas",
  price: "27 €",
  category: { id: "2", name: "Beverage" },
  stock: 18,
  content: "Quas a at officia quod in quod. Impedit deserunt t",
  imageUrl: "https://dummyimage.com/572x213",
};
let p24 = {
  id: 24,
  name: "Repellendus",
  price: "28 €",
  category: { id: "3", name: "Snack" },
  stock: 44,
  content: "Alias maiores soluta ab earum asperiores praesenti",
  imageUrl: "https://dummyimage.com/396x712",
};
let p25 = {
  id: 25,
  name: "Quibusdam",
  price: "20 €",
  category: { id: "4", name: "Cigarettes" },
  stock: 21,
  content: "Assumenda debitis voluptatem magnam temporibus mol",
  imageUrl: "http://www.lorempixel.com/1016/738",
};
products.push(
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25
);

module.exports = products;
