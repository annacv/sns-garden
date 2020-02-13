<template>
  <v-app class="layout-hello">
    <main class="layout-hello__main">
      <slot/>
    </main>
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
