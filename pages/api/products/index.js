import data from "./data.json"
import category from "./category.json"

export function getProducts() {
    return data
}

export function getCategory() {
    return category
}

export function getProductsByRekom(){
    const products = data.filter((product)=>product.type === "rekom");
    return products;
}

export default function getData(res, req) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} is not allowed` });
    } else {
        const products = getProducts();
        res.status(200).json(products)

        const categorys = getCategory();
        res.status(200).json(categorys)

        const rekoms = getProductsByRekom();
        res.status(200).json(categorys)
    }
}
