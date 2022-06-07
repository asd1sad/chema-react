import productos from "./data"

export const getItem = () => {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve(productos)
        } , 3000)
    })
}