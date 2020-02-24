<template>
  <v-window-item :value="value" :user="user">
    <v-row no-gutters>
      <template v-for="(outsideCol, index) in outsideCols">
        <v-col
          :key="index"
          cols=12
          :sm="outsideCol.sm"
          :class="outsideCol.class"
        >
          <v-row no-gutters v-if="outsideCol.hasRow === true">
            <template v-for="(insideCol, position) in outsideCol">
              <v-col
                v-if="insideCol.class"
                :key="position"
                cols="12"
                :md="insideCol.md"
                :lg="insideCol.lg"
                :xl="insideCol.xl"
                :class="insideCol.class"
              >
                <v-icon
                  v-if="insideCol.icon"
                  color="primary"
                  size="64"
                  class="d-flex justify-center"
                  v-text="insideCol.icon"
                />
                <p
                  v-if="insideCol.stepCount"
                  class="caption font-weight-bold text-center"
                  v-text="insideCol.stepCount"
                />
                <div class="window-item__headings">
                  <h1
                    v-if="insideCol.title"
                    class="headline font-weight-bold text-center"
                    v-text="insideCol.title"
                  />
                  <p
                    v-if="insideCol.subtitle"
                    class="subtitle-1 font-weight-bold text-center"
                    v-text="insideCol.subtitle"
                  />
                </div>
                <p
                  v-if="insideCol.text"
                  class="text-center">
                  {{ insideCol.text }}
                  <router-link
                    v-if="insideCol.link_to_url"
                    :to="insideCol.link_to_url"
                    class="ml-1 font-weight-bold"
                  >
                    {{ insideCol.link_to_text }}
                  </router-link>
                  <span :class="insideCol.userStyle" v-if="insideCol.user === true">
                    {{ user }}
                  </span>
                </p>
                <v-form
                  v-if="insideCol.form_field || insideCol.tabs || insideCol.form_checkbox || insideCol.stepButtons"
                  v-model="valid"
                  class="pa-0 ma-0"
                >
                  <TextField
                    v-for="(item, position) in insideCol.form_field"
                    :element="item"
                    :key="position"
                  />
                  <VTabs
                    v-if="insideCol.hasTabs === true"
                    :tabs="insideCol.tabs"
                    :content="insideCol.content"
                  />
                  <Checkbox
                    v-for="(item, position) in insideCol.form_checkbox"
                    :key="position"
                    :element="item"
                  />
                  <VButton
                    v-for="button in insideCol.stepButtons"
                    :key="button.key"
                    className="mt-3 mb-3"
                    :type="button.type"
                    :block=true
                    :disabled="button.hasOwnProperty('disabled') ? button.disabled : !valid"
                    :buttonText="button.text"
                    :color="button.color"
                    :outlined="button.outlined"
                    @click="setActions(button.key)"
                  />
                </v-form>
                <p
                  v-if="insideCol.caption"
                  class="text-center caption ma-0 pa-2"
                  v-text="insideCol.caption"
                />
                <v-form
                  v-if="insideCol.social_form"
                  class="pa-0 ma-0"
                >
                  <VButton
                    v-for="button in insideCol.social_form"
                    :key="button.name"
                    :type="button.type"
                    :block=true
                    :buttonText="button.text + `\t` + `${button.name}`"
                    :className="`btn-social mt-3 mb-3 ${button.name.toLowerCase()}`"
                    :color="button.color"
                    :dark="button.isDark"
                    :name="button.name"
                    :outlined="button.outlined"
                    :iconClass="button.iconClass"
                    :iconContent="button.iconContent"
                    :isLeft="button.left"
                    @click="socialRegister"
                  />
                </v-form>
              </v-col>
            </template>
          </v-row>
          <v-img
            v-if="outsideCol.image"
            :src="outsideCol.image"
            height="100vh"
          />
        </v-col>
      </template>
    </v-row>
  </v-window-item>
</template>

<script>
import Checkbox from '@/components/Form/Checkbox.vue'
import TextField from '@/components/Form/TextField.vue'
import VButton from '@/components/VButton.vue'
import VTabs from '@/components/VTabs.vue'

export default {
  name: 'WindowItem',

  props: ['value', 'user', 'rules', 'outsideCols'],

  data: () => ({
    valid: true,
    disabled: false
  }),

  methods: {
    setActions (param) {
      this.$emit(param)
    },
    socialRegister () {
      console.log('Here we will register using social account')
    }
  },

  components: {
    Checkbox, TextField, VButton, VTabs
  }
}
</script>
