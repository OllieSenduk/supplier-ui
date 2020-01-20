/* eslint-disable */

export default class FormBuilders {
  constructor(h) {
    this.h = h
    this.fields = []
  }

  addIcon() {}

  setField(fieldData) {
    const render = this.h
    return render(
      'div',
      {
        class: [
          'v-input',
          'v-input--is-label-active',
          'v-input--is-dirty',
          'theme--light',
          'v-text-field',
          'v-text-field--is-booted',
          'mb-6'
        ]
      },
      [
        render(
          'div',
          {
            class: ['v-input__control']
          },
          [
            render(
              'div',
              {
                class: ['v-input__slot']
              },

              [
                render(
                  'div',
                  {
                    class: ['v-text-field__slot']
                  },
                  [
                    render(
                      'label',
                      {
                        class: ['v-label', 'v-label--active', 'theme--light'],
                        style: {
                          left: '0px',
                          right: 'auto',
                          position: 'absolute'
                        }
                      },
                      fieldData.name
                    ),
                    render('input', {
                      domProps: {
                        name: fieldData.name,
                        type: fieldData.type
                      }
                    })
                  ]
                )
              ]
            )
          ]
        )
      ]
    )
  }

  setFields(fieldsData = []) {
    const render = this.h
    this.fields.push(
      render(
        'div',
        {
          class: {
            'v-card__text': true
          }
        },
        [
          render(
            'form',
            {
              class: {
                'v-form': true
              }
            },
            [fieldsData.map((fieldData) => this.setField(fieldData))]
          )
        ]
      )
    )
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
          },
          style: {
            height: '64px'
          }
        },
        [
          render(
            'div',
            {
              class: {
                'v-toolbar__content': true
              },
              style: {
                height: '100%'
              }
            },
            text
          )
        ]
      )
    )
  }

  setSubmit(text) {
    const render = this.h

    this.fields.push(
      render(
        'div',
        {
          class: ['v-card__actions']
        },
        [
          render('div', {
            class: ['spacer']
          }),
          render(
            'button',
            {
              class: [
                'v-btn',
                'v-btn--contained',
                'theme--light',
                'v-size--default',
                'primary'
              ]
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
