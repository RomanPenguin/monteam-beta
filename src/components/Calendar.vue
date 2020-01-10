<template>
    <div>
        <v-calendar :attributes='attributes'></v-calendar>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                attributes: [
                    {
                        // key: 'today',
                        highlight: true,
                        // Months of the year are indexed at 0 where dates are not
                        dates: [new Date(2020, 0, 1), new Date(2020,0,4), new Date()]
                    }
                ],
            }
        },
    }
</script>