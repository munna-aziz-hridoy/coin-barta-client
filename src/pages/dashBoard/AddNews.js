import React from 'react'
import { useForm } from 'react-hook-form'
import DashBoardNav from './DashBoardNav'

import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js'
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
        <div className="flex md:h-screen justify-center items-center ">
            <div className="card w-full bg-base-100 shadow-xl max-w-3xl pb-5">
                <div className="card-body ">
                    <h2 className="text-center m-5 text-2xl font-bold ">
                        Add a News
                    </h2>
                    <div className="flex justify-center items-center w-full md:w-[40rem] md:mx-auto">
                        <form action="">
                            <div class="form-control w-full ">
                                <label class="label">
                                    <span class="label-text">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    class="input input-bordered w-full "
                                />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea
                                    class="textarea textarea-bordered"
                                    placeholder="Description"
                                ></textarea>
                                <Editor
                                    editorState={EditorState}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={
                                        this.onEditorStateChange
                                    }
                                />
                            </div>
                            <div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">
                                            Select Category
                                        </span>
                                    </label>
                                    <select class="select select-bordered">
                                        <option disabled selected>
                                            Select One
                                        </option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">
                                            Select Img
                                        </span>
                                    </label>
                                    <input type="file" name="" id="" />
                                </div>
                            </div>
                            <div>
                                <button class="btn btn-outline mt-5">
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNews
