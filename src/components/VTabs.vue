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
          v-for="item in tabs"
          :key="item"
        >
          <v-card
            flat
            class="pt-2 pb-2 pr-6 pl-6"
            id="scroll-target"
            style="max-height: 400px; overflow-y: auto;"
          >
            <div v-if="item === tabs[0]">
              <p
                v-scroll:#scroll-target="onScroll"
                v-text="item1"
                style="height: auto"
              />
            </div>
            <div v-else-if="item === tabs[1]">
              <p
                v-scroll:#scroll-target="onScroll"
                v-text="item2"
                style="height: auto"
              />
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'

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
    }
  },

  data: () => ({
    tab: null,
    offsetTop: 0,

    tabs: [i18n.t('register.terms_of_use.title'), i18n.t('register.privacy_policy.title')],
    item1: i18n.t('register.terms_of_use.text'),
    item2: i18n.t('register.privacy_policy.text')
  }),

  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    }
  }
}
</script>
