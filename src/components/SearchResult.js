import React from 'react'
import Nav from '../pages/navbar/Nav'

const SearchResult = () => {
    return (
        <>
            <Nav />
            <h1>Search Results</h1>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex justify-center items-center">
                        <div className="lg:w-1/3">
                            <img
                                alt="ecommerce"
                                className="  object-cover object-center  rounded"
                                src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/regular_800x320_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                WHAT IS CONTEXT API?
                            </h1>
                            <p className="leading-relaxed">
                                Context API is a feature of React that allows
                                one to share state across the entire app lightly
                                and with ease. Context API has a super power, We
                                can share sate any component without props
                                drilling. That is really amazing. Behind the
                                scene, it's works as a global variable that can
                                be passed around.This is the alternative to
                                "prop drilling" or moving props from grandparent
                                to child to parent, and so on. However, Context
                                API solved this boring passing props grandparent
                                to child to parent. It was very irritative.
                            </p>
                            <p className="font-bold"> See More...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-4 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex justify-center items-center">
                        <div className="lg:w-1/3">
                            <img
                                alt="e-commerce"
                                className="  object-cover object-center  rounded"
                                src="https://s3.amazonaws.com/viking_education/web_development/web_app_eng/html5_sectioning_high_level.jpg"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                WHAT IS SEMANTIC TAG ?
                            </h1>
                            <p className="leading-relaxed">
                                Semantic means meaningful anything that has a
                                meaning. So,Semantic tag means The tag that has
                                a meaning. For example, If we use a div tag in
                                the header, that is correct but not meaningful.
                                But if we use header tag in the header that
                                bears a meaning, We understand easily that it is
                                the head of the website.Semantic tags made the
                                code easily understandable.
                            </p>
                            <p className="font-bold"> See More...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex justify-center items-center">
                        <div className="lg:w-1/3">
                            <img
                                alt="ecommerce"
                                className="  object-cover object-center  rounded"
                                src="https://cdn.educba.com/academy/wp-content/uploads/2020/02/Inline-vs-Block.jpg"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                WHAT IS THE DIFFERENCE BETWEEN INLINE,BLOCK AND
                                INLINE-BLOCK ELEMENT ?
                            </h1>
                            <p className="leading-relaxed">
                                Inline elements occupy only sufficient width
                                that is required and doesn't have top and bottom
                                margins. Inline elements don't start in a new
                                line. But Block Elements occupy the full width
                                irrespective of their sufficiency and having top
                                and bottom margin. Block elements always start
                                in a line. And the third is Inline-Block. It is
                                a block-level element but it works as an inline
                                element. As it doesn't occupy the full width,
                                doesn't have top and bottom margin and doesn't
                                start in a new line.
                            </p>
                            <p className="font-bold"> See More...</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchResult
