import React from 'react'
import { useFormik } from 'formik'
import { addProductSchema } from "../validationSchema/appProductSchema"
import { useCreateProductMutation } from '../redux/slices/productApiSlice'

const CreateProduct = () => {
    const [createProduct] = useCreateProductMutation()
    const initialValues = {
        productName: "",
        productPrice: ""
    }

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: addProductSchema,
        onSubmit: async (values, action) => {
            console.log(values)
            const a = await createProduct(values)
            console.log(a) 
            action.resetForm()
        }
    })
  
    return (
    <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" name="productName" value={values.productName} onChange={handleChange} onBlur={handleBlur} />
            {errors.productName && touched.productName && <div>{errors.productName}</div>}
            <input type="number" placeholder="Product Price" name="productPrice" value={values.productPrice} onChange={handleChange} onBlur={handleBlur} />
            {errors.productPrice && touched.productPrice && <div>{errors.productPrice}</div>}
            <button type="submit">Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct