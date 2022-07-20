import React from 'react'
import { useForm } from 'react-hook-form'
import DashBoardNav from './DashBoardNav'
const AddNews = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm()

    const handleAddProduct = async (inputData) => {
        const { productImg, ...rest } = inputData
        const uploadedImg = productImg[0]
        const formData = new FormData()
        formData.append('image', uploadedImg)
        const imgbbAPIkey = '52ad69453d156ba9876338195fd1a8a5'
        const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`

        reset()
    }

    return (
        <div className="w-[600px] mx-auto border-2 my-20 px-10">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20 capitalize">
                Add News
            </h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <label className="label">
                    <span className="label-text capitalize text-neutral">
                        product name
                    </span>
                </label>
                <input
                    {...register('product_name', {
                        required: 'Please Enter Product Name',
                    })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-accent rounded-md  w-full"
                />
                {errors.product_name ? (
                    <p className="text-xs text-red-300 my-2">
                        {errors?.product_name?.message}
                    </p>
                ) : (
                    ''
                )}

                <label className="label">
                    <span className="label-text capitalize text-neutral">
                        price
                    </span>
                </label>
                <input
                    {...register('price', {
                        required: 'Please Enter Product Price',
                    })}
                    type="number"
                    placeholder="price"
                    className="input input-bordered input-accent rounded-md  w-full"
                />
                {errors.price ? (
                    <p className="text-xs text-red-300 my-2">
                        {errors?.price?.message}
                    </p>
                ) : (
                    ''
                )}

                <label className="label">
                    <span className="label-text capitalize text-neutral">
                        available quantity
                    </span>
                </label>
                <input
                    {...register('available', {
                        required: 'How much product you have?',
                    })}
                    type="number"
                    placeholder="Available Quantity"
                    className="input input-bordered input-accent rounded-md w-full"
                />
                {errors.available ? (
                    <p className="text-xs text-red-300 my-2">
                        {errors?.available?.message}
                    </p>
                ) : (
                    ''
                )}

                <label className="label">
                    <span className="label-text capitalize text-neutral">
                        min order
                    </span>
                </label>
                <input
                    {...register('minOrder', {})}
                    type="number"
                    placeholder="Minimum Order Quantity"
                    className="input input-bordered input-accent rounded-md  w-full"
                />
                {errors.minOrder ? (
                    <p className="text-xs text-red-300 my-2">
                        {errors?.minOrder?.message}
                    </p>
                ) : (
                    ''
                )}

                <label className="label">
                    <span className="label-text capitalize text-neutral">
                        Upload Image
                    </span>
                </label>
                <input
                    {...register('productImg', {
                        required: 'Please upload any image',
                    })}
                    type="file"
                    className="w-fit p-2 border-2 border-neutral text-neutral font-bold rounded-lg"
                />
                {errors.productImg ? (
                    <p className="text-xs text-red-300 my-2">
                        {errors?.productImg?.message}
                    </p>
                ) : (
                    ''
                )}

                <label className="label">
                    <span className="label-text capitalize text-neutral">
                        Description
                    </span>
                </label>
                <textarea
                    {...register('body', {
                        required: 'Description is needed',
                    })}
                    className="textarea textarea-accent w-full"
                    placeholder="Description"
                ></textarea>
                {errors.body ? (
                    <p className="text-xs text-red-300 my-2">
                        {errors?.body?.message}
                    </p>
                ) : (
                    ''
                )}
                <input
                    type="submit"
                    value="Add Product"
                    className="capitalize text-white bg-[#333] hover:bg-white hover:text-[#333] border-2 border-primary hover:border-white cursor-pointer duration-200 rounded-lg font-semibold px-10 py-3 mt-5"
                />
            </form>
        </div>
    )
}

export default AddNews
