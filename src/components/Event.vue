
<template>
    <div>
        <button @click="isOpen = !isOpen" type="button">
            Open the modal
        </button>
        <slot name="boi"></slot>


        <div class="r md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

            <nav :class="isOpen ? 'block' : 'hidden'">
                <div class="py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold"> Event Name</p>
                        <div class="cursor-pointer z-50">
                            <svg  @click="isOpen = !isOpen" type="button" class=" text-black" xmlns="http://www.w3.org/2000/svg" width="18"
                                 height="18"
                                 viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class=" font-bold"> Hosted by The Ice Tea club</div>
                    <div class=" text-sm">6:00-7:00 PM | Saturday, 5 October</div>
                    <div class=" text-sm">Monash University</div>
                    <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
                    <p>...</p>


                </div>
            </nav>
        </div>
    </div>

</template>

<script>
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