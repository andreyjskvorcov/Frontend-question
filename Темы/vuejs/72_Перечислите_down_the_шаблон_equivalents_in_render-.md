# 72.  ### Перечислите down the шаблон equivalents in render-функции?

VueJS provides proprietary alternatives and plain javascript usage for the template features. Let's list down them in a table for comparision,

        | Templates | Render function |
        |---- | --------- |
        | Conditional and looping directives: v-if and v-for  | Use JavaScript’s if/else and map concepts|
        | Two-way binding: v-model  | Apply own JS logic with value binding and event binding |
        | Capture Event modifiers: .passive, .capture, .once and .capture.once or .once.capture| &, !, ~ and ~! |
        | Event and key modifiers: .stop, .prevent, .self, keys(.enter, .13) and Modifiers Keys(.ctrl, .alt, .shift, .meta) | Use javascript solutions: event.stopPropagation(), event.preventDefault(), if (event.target !== event.currentTarget) return, if (event.keyCode !== 13) return and if (!event.ctrlKey) return |
        | Slots: slot attributes | Render functions provide this.$slots and this.$scopedSlots instance properties|