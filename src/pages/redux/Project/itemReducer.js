const initialData = {
    items:
        [
            {
                id: 1,
                product_name: "Samsung Galaxy F22",
                product_price: "Rs. 24,499",
                product_description: "Samsung Galaxy F22 (6GB/128GB) II Quad Camera 48MP II 9.4mm Thickness II Battery 6000 mAh",
                product_image: "https://static-01.daraz.com.np/p/3385b8a4227268d5d753098a263118c2.png"
            },
            {
                id: 2,
                product_name: "Samsung Galaxy M32",
                product_price: "Rs. 28,999",
                product_description: "Samsung Galaxy M32 (6GB/128GB) II 64 MP Quad Camera II 6000 mAh",
                product_image: "https://static-01.daraz.com.np/p/0c2889e3fb00931d0070aba74db3ced1.png"
            },
            {
                id:3,
                product_name:"Redmi 10 Prime",
                product_price:"Rs. 20,499",
                product_image:'https://static-01.daraz.com.np/p/45b20e3df54ee9d7838d66e08a5f1e9e.jpg',
                product_description:'Redmi 10 Prime 2022 50 MP Quad Camera 6000 mAh Battery 6.5 "FHD+'
            },
            {
                "id": "4",
                "product_name": "Apple Iphone13",
                "product_price": "Rs. 139,990",
                "product_description": "",
                "product_image": "https://static-01.daraz.com.np/p/3f94deba2269c4ef61a8ba173ba625f2.png"
            },
            {
                "id": "5",
                "product_name": "X-AGE",
                "product_price": "Rs. 9,499",
                "product_description": "-AGE G2 (3 GB RAM/32 GB ROM) Smart Phone Dual Sim 4G Enabled",
                "product_image": "https://static-01.daraz.com.np/p/eeeb8f116086f95fc9d1a26043366dd4.jpg"
            },
            {
                "id": "6",
                "product_name": "Apple Iphone 11",
                "product_price": "Rs. 86,990",
                "product_description": "",
                "product_image": "https://static-01.daraz.com.np/p/db10a3162c34c22cf06920e9b39be4a5.png"
            },
            {
                "id": "7",
                "product_name": "Samsung Galaxy A52s 5G",
                "product_price": "Rs. 51,999",
                "product_description": "Samsung Galaxy A52s 5G (8GB/128GB) Super AMOLED 6.5",
                "product_image": "https://static-01.daraz.com.np/p/67f522f905adfc6cc5a9b2529d4c156d.jpg"
            },
            {
                "id": "8",
                "product_name": "Samsung Galaxy M12",
                "product_price": "Rs. 22,499",
                "product_description": "Samsung Galaxy M12 (6GB/128GB) II 6000 mAh Battery II 48MP Quad",
                "product_image": "https://static-01.daraz.com.np/p/59f13273eb12473768873f8e1652358c.jpg"
            },
            {
                "id": "9",
                "product_name": "Micromax IN Note 1",
                "product_price": "Rs. 18,290",
                "product_description": "Micromax IN Note 1 (4GB RAM/ 64GB ROM) 48MP Quad Camera",
                "product_image": "https://static-01.daraz.com.np/p/d8bfee8fabd9e842d4cf398fde1fb14d.jpg"
            },
            {
                "id": "10",
                "product_name": "Samsung Galaxy M32",
                "product_price": "Rs. 27,999",
                "product_description": "Samsung Galaxy M32 (6GB/128GB) II 64 MP Quad Camera II 6000 mAh",
                "product_image": "https://static-01.daraz.com.np/p/399dcc38bfc2f70c79ac0b38b06f00a3.png"
            },
            {
                "id": "11",
                "product_name": "Vitu Cro 1",
                "product_price": "Rs. 9,350",
                "product_description": "",
                "product_image": "https://static-01.daraz.com.np/p/2086bac16ea70fe16e273241824c906a.jpg"
            },
            {
                "id": "12",
                "product_name": "Lava Benco",
                "product_price": "Rs. 13,600",
                "product_description": "Lava Benco V80 (AE9010) II Ram 4GB Storage 64GB II Face Unlock II Rear-",
                "product_image": "https:            //static-01.daraz.com.np/p/bc1ea5772deb43368708d5e8b78cf8b6.png"
            },
            {
                "id": "13",
                "product_name": "Nokia c1 2nd Edition",
                "product_price": "Rs. 7799",
                "product_description": "Nokia C1 2nd Edition (TA-1165) Dual Sim II Ram 1GB, Storage 16GB II 5.4",
                "product_image": "https://static-01.daraz.com.np/p/82e316972c41e285552ebe878bf50e12.jpg"
            },
            {
                id:"14",
                product_name: "Samsung Galaxy F22",
                product_price: "Rs. 23,880",
                product_description: "(6GB/128GB) II Quad Camera 48MP II 9.4mm Thickness II Battery 6000 mAh",
                product_image: "https://static-01.daraz.com.np/p/c1aee0ca70880f6cc529fed3c58cdcd2.jpg"
            },
            {
                id:"15",
                product_name: "Samsung Galaxy F22",
                product_price: "Rs. 23,880",
                product_description: "(6GB/128GB) II Quad Camera 48MP II 9.4mm Thickness II Battery 6000 mAh",
                product_image: "https://static-01.daraz.com.np/p/c1aee0ca70880f6cc529fed3c58cdcd2.jpg"
            },
            
            {
                "id": "16",
                "product_name": "Infinix Smart 5",
                "product_price": "Rs. 12,999",
                "product_description": "Infinix Smart 5 Mobile 3GB Ram/64GB Rom 6.4' - Blue",
                "product_image": "https://static-01.daraz.com.np/p/6575b9d667366704e1edb717aa0c9f5a.jpg"
            },
            {
                "id": "17",
                "product_name": "Redmi 9A",
                "product_price": "Rs. 12,999",
                "product_description": "Redmi 9A -6.53' Large Display 5000mAh Battery",
                "product_image": "https://static-01.daraz.com.np/p/1e4506370b48ee144ec217c6d650b2d7.jpg"
            }   

        ]
}
export const itemReducer = (state = initialData, action) => {
    return state
}