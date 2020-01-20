export default class FormDirector {
  makeUserSignInForm(builder) {
    console.log(builder)
    builder.setHeader('Login')
    // builder.setFields([
    //   {
    //     name: 'Email',
    //     type: 'email'
    //   },
    //   {
    //     name: 'Password',
    //     type: 'password'
    //   }
    // ])
  }
}
