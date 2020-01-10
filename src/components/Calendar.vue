<template>
    <div>
        <v-date-picker :attributes='attributes'
                       is-inline
                       :select-attribute='selectAttribute'>

        </v-date-picker>
    </div>
</template>

<script>
    const todos = [
            //TODO: Find a way to change the colours of the events
      {
        description: 'Take Noah to basketball practice.',
        dates: [new Date(2020, 0, 1), new Date(2020,0,4), new Date()], // Every Friday
        color: "#ffffff",       // Red
      },
      {
        description: 'Take',
        dates: [new Date(2020,0,4), new Date()], // Every Friday
        color: 'vc-bg-blue-600',       // Red
      },
    ];
    export default {
      data() {
        return {
          incId: todos.length,
          todos
        };
      },
      computed: {
        attributes() {
          return [
            // Today attribute
            {
              contentStyle: {
                fontWeight: '700',
                fontSize: '.9rem',
              },
              dates: new Date(),
            },
            // Attributes for todos
            ...this.todos.map(todo => ({
              dates: todo.dates,
              dot: {
                backgroundColor: todo.color,
              },
              popover: {
                label: todo.description,
                visibility: 'focus'
              },
            })),
          ];
        },
      },
    };
    // export default {
    //     data()
    //     {
    //         return {
    //             attributes: [
    //                 {
    //                     // key: 'today',
    //                     highlight: true,
    //                     // Months of the year are indexed at 0 where dates are not
    //                     dates: [new Date(2020, 0, 1), new Date(2020, 0, 4), new Date()]
    //                 }
    //             ],
    //         }
    //     },
    //     computed: {
    //         selectAttribute()
    //         {
    //             return {
    //                 alert("hello");
    //             };
    //         },
    //     }
    // }
</script>