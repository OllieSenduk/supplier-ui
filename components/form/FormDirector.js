export default class FormDirector {
  makeUserSignInForm(builder) {
    console.log(builder)
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
  }
}
