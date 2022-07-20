import React from 'react'

const NewsCard = () => {
    return (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    class="rounded-t-lg"
                    src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    alt=""
                />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        আমার সোনার বাংলা। আমার সোনার বাংলা।আমার সোনার বাংলা।
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    আমার সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।আমার
                    সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার
                    বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।আমার সোনার বাংলা।
                </p>
            </div>
        </div>
    )
}

export default NewsCard
