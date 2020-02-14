<template>
  <v-window-item :value="value">
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
                <p class="text-center">
                  {{ insideCol.text }}
                  <router-link
                    v-if="insideCol.link_to_url"
                    :to="insideCol.link_to_url"
                    class="ml-1 font-weight-bold"
                  >
                    {{ insideCol.link_to_text }}
                  </router-link>
                </p>
                <v-form
                  v-if="insideCol.form_field"
                  v-model="valid"
                  class="pa-0 ma-0"
                >
                  <TextField
                    v-for="(item, position) in insideCol.form_field"
                    :element="item"
                    :key="position"
                  />
                  <VButton
                    className="mt-3 mb-3"
                    :block=true
                    :disabled="!valid"
                    :buttonText="insideCol.button"
                    @click="stepForward"
                  />
                </v-form>
                <v-form
                  v-if="insideCol.social_form"
                  class="pa-0 ma-0"
                >
                  <p
                    class="text-center ma-0 pa-2"
                    v-text="insideCol.other_options"
                  />
                  <VButton
                    v-for="(button, position) in insideCol.social_form"
                    :key="position"
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
import TextField from '@/components/Form/TextField.vue'
import VButton from '@/components/VButton.vue'

export default {
  name: 'WindowItem',

  props: ['value', 'outsideCols'],

  data: () => ({
    valid: true,
    disabled: false
  }),

  components: {
    TextField, VButton
  }
}
</script>
