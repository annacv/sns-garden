<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ msg }}
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-btn to='/garden' class="primary">GO!</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  }
}
</script>
