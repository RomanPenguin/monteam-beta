<template>
    <header class="bg-gray-300 md:flex md:justify-between md:items-center md:px-4 md:py-3">
        <div class="flex items-center justify-between px-4 py-3 md:p-0">

            <div class="md:hidden outline-none">
                <button @click="isOpen = !isOpen" type="button">
                    <font-awesome-icon icon="bars"/>
                </button>
            </div>
            <div>
                <p>hello</p>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 md:flex md:p-0">
            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">List your
                property</a>
            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a>
        </nav>
    </header>
</template>

<script>
    // import '../assets/css/main.css'
    export default {
        data()
        {
            return {
                isOpen: false,
            }
        },
    }

</script>

<style scoped>

</style>