<script lang="ts" setup></script>
<template>
<h1 class="text-3xl text-center py-3">TailwindCSS Timeline</h1>

<div class="min-h-screen flex items-center justify-center">
<div class="flex flex-col md:grid grid-cols-9 mx-auto p-2">
    <!-- <div class="flex flex-row-reverse md:contents">
        <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
            <h3 class="font-semibold text-xl mb-1 text-gray-900">Title 1</h3>
            <p class="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis,
                dolore repellat dignissimos non sint architecto vel provident temporibus dolor cupiditate voluptatum
                ut doloribus nemo ipsa corporis ad. Earum, labore.</p>
        </div>

        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
            </div>

            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow">
            </div>
        </div>
    </div> -->

    <div class="flex md:contents">
        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
            </div>

            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow">
            </div>
        </div>

        <div class="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
            <h3 class="font-semibold text-xl mb-1 text-gray-900">Title 2</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt
                maiores ipsa molestiae magnam libero dolorem explicabo. Nobis veniam incidunt at, alias ipsam est
                suscipit maxime sunt quia. Consectetur, aut.</p>
        </div>
    </div>

    <div class="flex flex-row-reverse md:contents">
        <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
            <h3 class="font-semibold text-xl mb-1 text-gray-900">Title 3</h3>
            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ratione
                perspiciatis consectetur? Impedit inventore perferendis eligendi voluptatum facilis, consequatur
                provident facere ab quasi laudantium magni culpa porro tempora accusantium autem?</p>
        </div>

        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
            </div>

            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow">
            </div>
        </div>
    </div>

    <div class="flex md:contents">
        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
            </div>

            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow">
            </div>
        </div>

        <div class="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
            <h3 class="font-semibold text-xl mb-1 text-gray-900">Title 4</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolores minima
                mollitia quidem omnis doloremque magni vitae, sint impedit alias corrupti commodi nesciunt
                consequatur eveniet nisi amet architecto expedita rerum.</p>
        </div>
    </div>
    </div>
</div>
</template>
<style scoped></style>
