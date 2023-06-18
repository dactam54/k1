// const accessories_1_1 = require('../images/accessories/giay-1.png').default
// const accessories_1_2 = require('../images/accessories/giay-2.png').default
// const accessories_1_3 = require('../images/accessories/giay-3.png').default


// const accessories_2_1 = require('../images/accessories/khan-1.png').default
// const accessories_2_2 = require('../images/accessories/khan-2.png').default
// const accessories_2_3 = require('../images/accessories/khan-3.png').default


// const accessories_3_1 = require('../images/accessories/tat-1.png').default
// const accessories_3_2 = require('../images/accessories/tat-2.png').default
// const accessories_3_3 = require('../images/accessories/tat-3.png').default


// const accessories_4_1 = require('../images/accessories/tui-1.png').default
// const accessories_4_2 = require('../images/accessories/tui-2.png').default

// const accessories =[
//   {
//     title: "Giày 01",
//     price: '189000',
//     image01: accessories_1_1,
//     categorySlug: "giay",
//     colors: ["white", "red", "orange"],
//     slug: "giay-01",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   },
//   {
//     title: "Giày  01",
//     price: '189000',
//     image01: accessories_1_2,
//     categorySlug: "giay",
//     colors: ["white", "red", "orange"],
//     slug: "giay-02",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   },{
//     title: "Giày  01",
//     price: '189000',
//     image01: accessories_1_3,
//     categorySlug: "giay",
//     colors: ["white", "red", "orange"],
//     slug: "giay-03",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   },
  
  
//   {
//     title: "Khăn 01",
//     price: '189000',
//     image01: accessories_2_1,
//     categorySlug: "khan",
//     colors: ["white", "red", "orange"],
//     slug: "khan-01",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   }
//   ,{
//     title: "Khăn 02",
//     price: '189000',
//     image01: accessories_2_2,
//     categorySlug: "khan",
//     colors: ["white", "red", "orange"],
//     slug: "khan-02",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   },
//   {
//     title: "Khăn 03",
//     price: '189000',
//     image01: accessories_2_3,
//     categorySlug: "khan",
//     colors: ["white", "red", "orange"],
//     slug: "khan-03",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   },



//   {
//     title: "Tất 01",
//     price: '189000',
//     image01: accessories_3_1,
//     categorySlug: "tat",
//     colors: ["white", "red", "orange"],
//     slug: "tat-01",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   },{
//     title: "Tất 01",
//     price: '189000',
//     image01: accessories_3_2,
//     categorySlug: "tat",
//     colors: ["white", "red", "orange"],
//     slug: "tat-01",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   }
//   ,{
//     title: "Tất 01",
//     price: '189000',
//     image01: accessories_3_3,
//     categorySlug: "tat",
//     colors: ["white", "red", "orange"],
//     slug: "tat-01",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   }



//   ,{
//     title: "Túi 01",
//     price: '189000',
//     image01: accessories_4_1,
//     categorySlug: "tui",
//     colors: ["white", "red", "orange"],
//     slug: "tui-01",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   }
//   ,{
//     title: "Túi 01",
//     price: '189000',
//     image01: accessories_4_2,
//     categorySlug: "tui",
//     colors: ["white", "red", "orange"],
//     slug: "tui-02",
//     size: ["s", "m", "l", "xl"],
//     description:""
//   }
// ]


// const getAllAccessories = () => accessories

// const getAccessories = (count) => {
//     const max = accessories.length - count
//     const min = 0
//     const start = Math.floor(Math.random() * (max - min) + min)
//     return accessories.slice(start, start + count)
// }

// const getAccessoriesBySlug1 = (slug) => accessories.find(e => e.slug === slug)

// const getCartItemsInfo1 = (cartItems) => {
//     let res = []
//     if (cartItems.length > 0) {
//         cartItems.forEach(e => {
//             let accessories =  getAccessoriesBySlug1(e.slug)
//             res.push({
//                 ...e,
//                 accessories: accessories
//             })
//         })
//     }
//     return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
// }

// const accessoriesData = {
//     getAllAccessories,
//     getAccessories,
//     getAccessoriesBySlug1,
//     getCartItemsInfo1
// }

// export default accessoriesData