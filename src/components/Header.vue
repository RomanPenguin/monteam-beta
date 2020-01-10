<template>
    <header class="bg-red-800 md:flex md:justify-between md:items-center md:px-4 md:py-3 w-auto">
        <div class="flex items-center justify-between px-4 py-3 md:p-0">

            <div class="md:hidden outline-none">
                <button @click="isOpen = !isOpen" type="button">
                    <font-awesome-icon icon="bars"/>
                </button>
            </div>
            <div>
                <div class="">December</div>
            </div>
            <div class="">
                <font-awesome-icon icon="sort-down"></font-awesome-icon>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 md:flex md:p-0">
            <a href="./index.html"
               class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-red-900 sm:mt-0 sm:ml-2">Schedule</a>
            <a href="./weekly_view.html"
               class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-red-900 sm:mt-0 sm:ml-2">Week</a>
            <a href="./monthly_view.html"
               class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-red-900 sm:mt-0 sm:ml-2">Monthly</a>
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