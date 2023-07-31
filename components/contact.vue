<script lang="ts" setup>
let loading: any;
</script>
<template>
    <div class="font-mono">
        <h3 class="text-4xl sm:text-6xl text-center dark:text-teal-300 font-medium my-8 sm:my-24">Contacts
        </h3>
        <div class="sm:mt-12  overflow-hidden w-full font-mono">
            <div class="card">
                <p class="sm:text-[18px] text-[14px] text-center text-[#aaa6c3] uppercase tracking-wider">Get in touch</p>
                <form action="" class="mt-12 flex flex-col gap-8">
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your Name</span>
                        <input type='text' name='name' placeholder="What's your good name?"
                            class="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium" />
                    </label>
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your email</span>
                        <input type='email' name='email' placeholder="What's your web address?"
                            class="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium" />
                    </label>
                    <label class="flex flex-col">
                        <span class="text-white font-medium mb-4">Your Message</span>
                        <textarea rows={7} name='message' placeholder='What you want to say?'
                            class="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium" />
                    </label>

                    <button type='submit'
                        class="btn">
                        {{ loading ? "Sending..." : "Send" }}
                    </button>
                </form>
            </div>
        </div>
        <div class="sm:mt-12  overflow-hidden w-full font-mono">
            <div class="card">
                <p class="sm:text-[18px] text-[14px] text-center text-[#aaa6c3] uppercase tracking-wider">Socials</p>
                <table class="w-full sm:ml-14">
                    <tbody>
                        <tr>
                            <th class="text-xl sm:text-2xl font-medium dark:text-white-500">Email</th>
                            <td>
                                <a class="text-lg sm:text-xl font-normal dark:text-sky-300" href="mailto:arnavbabu2002@gmail.com"
                                    target="_blank" rel="noopener noreferrer">mail@overrevvv.dev</a>
                            </td>
                        </tr>
                        <tr>
                            <th class=" text-xl sm:text-2xl font-medium dark:text-purple-200 ">Twitter</th>
                            <td>
                                <a class="text-lg sm:text-xl font-normal dark:text-blue-200"
                                    href="https://twitter.com/overrevvv" target="_blank"
                                    rel="noopener noreferrer">OverRevvv</a>
                            </td>
                        </tr>
                        <tr>
                            <th class=" text-xl sm:text-2xl font-medium dark:text-purple-200 ">Github</th>
                            <td>
                                <a class="text-lg sm:text-xl font-normal dark:text-blue-200"
                                    href="https://github.com/OverRevvv" target="_blank"
                                    rel="noopener noreferrer">OverRevvv</a>
                            </td>
                        </tr>
                        <tr>
                            <th class=" text-xl sm:text-2xl font-medium dark:text-purple-200 ">Linkedin</th>
                            <td>
                                <a class="text-lg sm:text-xl font-normal dark:text-blue-200"
                                    href="www.linkedin.com/in/overrevvv" target="_blank"
                                    rel="noopener noreferrer">OverRevvv</a>
                            </td>
                        </tr>
                        <tr>
                            <th class=" text-xl sm:text-2xl font-medium dark:text-purple-200 ">Discord</th>
                            <td>
                                <a class="text-lg sm:text-xl font-normal dark:text-blue-200"
                                    href="https://discordid.netlify.app/?id=927081646602219540" target="_blank"
                                    rel="noopener noreferrer">OverRevvv</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    @apply backdrop-blur-sm my-4 sm:my-0  sm:p-8 sm:w-3/5 mx-auto bg-[#15103088] text-center border rounded-2xl shadow;
}
.btn{
    @apply bg-[#151030] mb-2 py-3 px-8 mx-auto rounded-xl outline-none w-2/5 text-white font-bold shadow-md shadow-[#050816];
}
form ::placeholder {
    text-align: center;
}
input {
    text-align: center;
}
th{
    @apply text-center;
}
td{
    @apply text-center;
}
</style>
