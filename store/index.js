export const state = () => ({
  realEstates: {
    sale: [{
        name: "Jade 191",
        location: "Auderghem",
        price: "657.000",
        units: 4,
        availability: "à l'acte",
        imageUrl: "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4005986/2596f76db3b842548ef31eb710ba7b66.jpg?itok=NNaG9cej",
        imageAspectRatio: "3:2"
      },
      {
        name: "Tervuren Corner T13",
        location: "Tervuren",
        price: "750.000",
        units: 7,
        availability: "à l'acte",
        imageUrl: "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4019073/e2510d6ca38244d5adc9d9c473ba3f5b.jpg?itok=AKsyfpvs",
        imageAspectRatio: "4:3"
      },
      {
        name: "Villa",
        location: "Uccle",
        price: "1.500.000",
        units: 4,
        availability: "à l'acte",
        imageUrl: "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4078639/692c5bcfb09e42668641d70f905676fe.jpg?itok=cuQ4OvIm",
        imageAspectRatio: "4:3"
      },
      {
        name: "Grandchamp",
        location: "Woluwe-Saint-Pierre",
        price: "2.450.000",
        units: 9,
        availability: "à l'acte",
        imageUrl: "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4142710/c51fc1173a094bc7a42fbbf8e34cd3f6.jpg?itok=a7tEmRyc",
        imageAspectRatio: "8:5"
      },
      {
        name: "Ravenstein Golf Club",
        location: "Tervuren",
        price: "4.750.000",
        units: 6,
        availability: "à l'acte",
        imageUrl: "https://www.victoire.be/sites/default/files/styles/hero/public/whise/3917409/cc5fa5ecc2d847089aa0a8706b66bbee.jpg?itok=bwCGBfqL",
        imageAspectRatio: "3:2"
      },
      {
        name: "Fort Jaco",
        location: "Uccle",
        price: "495.000",
        units: 3,
        availability: "à l'acte",
        imageUrl: "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4146155/7aac536c273a4e0eb9a233e3d49d3b42.jpg?itok=aMotcnLx",
        imageAspectRatio: "4:3"
      },
    ],
  },
})

export const mutations = {

}

export const getters = {
  realEstateSales: state => {
    return state.realEstates.sale;
  }
}
