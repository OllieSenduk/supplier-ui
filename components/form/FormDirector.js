export default class FormDirector {
  makeUserSignInForm(builder) {
    builder.setHeader('Login')
    builder.setFields([
      {
        name: 'Email',
        type: 'email',
        prependProp: 'mdi-account'
      },
      {
        name: 'Password',
        type: 'password'
      }
    ])

    builder.setSubmit('Login')
  }
}
