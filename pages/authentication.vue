<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <appFormBuilder formMethod="makeUserSignInForm"></appFormBuilder>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock-question"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off-outline'"
                :type="value ? 'password' : ''"
                @click:append="() => (value = !value)"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormBuilder from '~/components/form/FormBuilder.vue'

export default {
  components: {
    appFormBuilder: FormBuilder
  },
  props: {
    source: String
  },
  data() {
    return {
      value: String
    }
  }
}
</script>
