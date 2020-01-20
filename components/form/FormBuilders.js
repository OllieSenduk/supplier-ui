export default class FormBuilders {
  constructor(h) {
    this.h = h
    this.fields = []
  }

  setHeader(text) {
    const render = this.h
    this.fields.push(
      render(
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
          render(
            'div',
            {
              class: {
                'v-toolbar__content': true
              }
            },
            text
          )
        ]
      )
    )
  }

  getForm() {
    return this.h(
      'div',
      {
        class: {
          'elevation-12': true,
          'v-card': true,
          'v-sheet': true,
          'theme--light': true
        }
      },
      this.fields
    )
  }
}
