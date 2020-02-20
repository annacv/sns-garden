<template>
  <div>
    <v-tabs
      v-model="tab"
      :centered="centered"
      :color="controlColor"
    >
      <v-tab
        v-for="(item, position) in tabs"
        :key="position"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-card class="pt-6 pb-6">
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="(item, position) in content"
          :key="position"
        >
          <v-card
            flat
            class="pt-2 pb-2 pr-6 pl-6"
            id="scroll-target"
            style="max-height: 400px; overflow-y: auto;"
          >
            <p
              v-scroll:#scroll-target="onScroll"
              class="text-left pr-10"
              style="height: auto"
            >
              {{ item }}
            </p>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Tabs',

  props: {
    centered: {
      type: Boolean,
      default: true
    },
    controlColor: {
      type: String,
      default: '#1300a3'
      // the default color setted is the one defined in zeroheight as accent color
    },
    tabs: {
      type: Array,
      default: () => []
    },
    content: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    tab: null,
    offsetTop: 0
  }),

  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    }
  }
}
</script>

<style scoped>
  .v-tab {
    text-transform: none;
  }
</style>
