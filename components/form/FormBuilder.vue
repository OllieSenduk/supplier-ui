<script>
/* eslint-disable */
import FormBuilders from './FormBuilders.js'
import FormDirector from './FormDirector.js'

export default {
  props: ['formMethod'],
  render(h) {
    const builder = new FormBuilders(h)
    const director = new FormDirector()

    director[this.formMethod](builder)
    // TEMPORARY
    return h(
      'div',
      {
        class: {
          'elevation-12': true,
          'v-card': true,
          'v-sheet': true,
          'theme--light': true
        }
      },
      [
        h(
          'header',
          {
            class: {
              'v-sheet': true,
              'v-sheet--tile': true,
              'theme--dark': true,
              'v-toolbar': true,
              'v-toolbar--flat': true,
              primary: true
            }
          },
          [
            h(
              'div',
              {
                class: {
                  'v-toolbar__content': true
                }
              },
              'Login'
            )
          ]
        )
      ]
    )
  }
}
</script>
