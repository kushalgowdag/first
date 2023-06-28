import * as Yup from "yup"

export const addProductSchema = Yup.object({
    productName: Yup.string().min(3).max(300).required("Please provide product name!"),
    productPrice: Yup.number().min(0).required("Please provide product price!")
})