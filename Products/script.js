/*
let products = [
    
        {
            productName: "Camiseta manga corta boxy fit print",
            image: "643ea153236d28888cd6680ab599dfcc-2413130700_2_13_0.jpg",
            price: "99,900 COP",
            category: "Urban"

        },

        {
            productName: "Camiseta manga corta boxy fit print",
            image: "f0217d0c907c1a50d16bc3acc083168a-2429831251_2_4_0.jpg",
            price: "99,900 COP",
            category: "Urban"
        },

        {
            productName: "Camiseta manga corta roll up boxy fit print",
            image: "7a520c90f0905212a50a340375e47a30-2420492701_2_4_0.jpg",
            price: "99,900 COP",
            category: "Urban"
        },

        {
            productName: "Camiseta One Piece manga corta boxy fit print",
            image: "ed92095066e365ac1ed0c9fe0fe3d552-2316130800_2_4_0.jpg",
            price: "119,900 COP",
            category: "Japones"
        },

        {
            productName: "Camiseta One Piece manga corta regular fit print",
            image: "43a70a9a32798d9cd679fe7efc6adec8-2357777707_2_13_0.jpg",
            price: "119,900 COP",
            category: "Japones"
        },

        {
            productName: "Camiseta manga corta boxy fit print",
            image: "2412538403_2_4_3.jpg",
            price: "99,900 COP",
            category: "Urban"
        },

        {
            productName: "Camiseta Van Gogh manga corta boxy fit print",
            image: "f86223da97d673e32d8085ba31a44930-2430777250_2_4_0.jpg",
            price: "119,900 COP",
            category: "Urban"
        },

        {
            productName: "Camiseta manga corta boxy fit print",
            image: "1c8701fc7c801e06a0fd26d7295a016d-2377922717_2_4_0.jpg",
            price: "119,900 COP",
            category: "Japones"
        },

        {
            productName: "Camiseta Keith Haring manga corta boxy fit print",
            image: "ae279afeb07d55936b9f5344d2d7cdb9-2387777800_2_4_0.jpg",
            price: "129,900 COP",
            category: "Negras"
        },

        {
            productName: "Camiseta Death Note manga corta oversize print",
            image: "c6d32ba0d3f62b4f2c1c077280a9aae8-2358309802_2_4_0.jpg",
            price: "129,900 COP",
            category: "Japones"
        },

        {
            productName: "Camiseta Death Note manga corta oversize print",
            image: "d1895a7fec54feb10bbfd13b03907a52-2358309600_2_4_0.jpg",
            price: "129,900 COP",
            category: "Japones"
        },

        {
            productName: "Camiseta Death Note manga corta oversize print",
            image: "87939928c48d6a6b00533dab0d34458c-2358309250_2_4_0.jpg",
            price: "129,900 COP",
            category: "Japones"

        },

        {
            productName: "Camiseta Art Series manga corta print",
            image: "c03201a132fce63d911374c386ac8c69-2299213800_2_4_0.jpg",
            price: "129,900 COP",
            category: "Negras"

        },

        {
            productName: "Camiseta Art Series manga corta print",
            image: "9764f5bd75514e3f582e3b743b01af12-2299213250_2_4_0.jpg",
            price: "129,900 COP",
            category: "Blancas"

        },

        {
            productName: "Camiseta manga corta boxy fit print",
            image: "44552ee127e792554e016ce46b059257-2395443800_2_4_0.jpg",
            price: "99,900 COP",
            category: "Negras"

        },

        {
            productName: "Camiseta manga corta boxy fit print",
            image: "fcbd83bedd77ed2fab4aedd2acb382ea-2395443251_2_4_0.jpg",
            price: "99,900 COP",
            category: "Blancas"

        },

        {
            productName: "Camiseta manga corta print fotográfico",
            image: "9640393b0ca6ca0b65a7ca165426d3f2-2303900250_2_4_0.jpg",
            price: "79,900 COP",
            category: "Blancas"

        },

        {
            productName: "Camiseta manga corta print",
            image: "8de8bf1c68eba7047b8ffc703b07f60a-2402458612_2_4_0.jpg",
            price: "99,900 COP",
            category: "Urban"

        },

        {
            productName: "Camiseta manga corta boxy fit print",
            image: "96a04943a462856f103951bb0b95db06-2366831250_2_4_0.jpg",
            price: "99,900 COP",
            category: "Blancas"

        },

        {
            productName: "Camiseta manga corta relaxed fit print",
            image: "87c584a2248a74d13d4b3b74fea16e16-2397900250_2_4_0.jpg",
            price: "79,900 COP",
            category: "Blancas"

        },
    ]

    subirProductos(products)*/

import { traerProductos } from "./firebase";

let allProducts = [];

async function arrayProducts() {
   /* let response = await fetch("https://apimocha.com/nathajson/products")
    let data = await response.json()
    data.forEach(element => {
        allProducts.push(element)
    })*/

    allProducts = await traerProductos()
    console.log(allProducts);

    for (let i of allProducts) {
        let url = i.productName.replaceAll(" ", "-");
        let detailUrl = '../Product-Detail/index.html?id=' + i.id;

        let card = document.createElement("a");
        card.href = detailUrl;
        let priceProduct = i.price.replace(',', '');
        card.classList.add("card", i.category, "hide", priceProduct.replace(' COP', ''));
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        let image = document.createElement("img");
        image.setAttribute("src", i.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);


        let container = document.createElement("div");
        container.classList.add("container");
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = i.productName.toUpperCase();
        container.appendChild(name);
        let price = document.createElement("h6");
        price.innerText = i.price;
        container.appendChild(price);


        card.appendChild(container);
        document.getElementById("products").appendChild(card);
    }

    document.getElementById("search").addEventListener
        ("click", () => {

            let searchInput = document.getElementById
                ("search-input").value;
            let element = document.querySelectorAll(".card");

            element.forEach((item, index) => {

                if (item.innerText.includes(searchInput.toUpperCase())) {
                    element[index].classList.remove("hide");
                } else {
                    element[index].classList.add("hide");
                }
            })
        })




    filterProduct("Todo");

}

arrayProducts()


function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");

        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if (value == "Todo") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");

            }
        }
    });
}

function filterProductPrice(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");

        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        element.classList.remove("hide");
        if (value == "Todo") {
            element.classList.remove("hide");
        } else {
            if (value === 'baratas') {
console.log(parseInt(element.classList.item(element.classList.length - 1))<100000);
                if (parseInt(element.classList.item(element.classList.length - 1)) < 100000) {
                    console.log('barata');
                    element.classList.remove("hide");
                } else {
                    console.log('no esta');
                    element.classList.add("hide");
                }
            } else if (value === 'caras') {
console.log('cara');
                if (parseInt(element.classList.item(element.classList.length - 1)) > 100000) {
                    element.classList.remove("hide");
                } else {
                    console.log('no esta');
                    element.classList.add("hide");
                }
            }
        }
    });
}
