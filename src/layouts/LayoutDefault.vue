<template>
  <v-app class="layout-default">
    <v-app-bar
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/Logo_Sonosuite.png"
          transition="scale-transition"
          width="130"
        />
      </div>
      <v-spacer></v-spacer>
      <nav id="nav" class="layout-default__nav">
        <router-link to="/" class="mr-2">Home</router-link> |
        <router-link to="/about" class="ml-2">Garden</router-link>
      </nav>
    </v-app-bar>
    <main class="layout-default__main">
      <slot/>
    </main>
    <footer class="layout-default__footer">
      &copy; Awesome Company
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutDefault',

  data: () => ({
    //
  })
}
</script>
