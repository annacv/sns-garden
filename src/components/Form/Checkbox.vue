<template>
  <v-checkbox
    v-model="element.model"
    :label="element.label"
    :disabled="element.disabled"
    :mandatory="element.mandatory"
  />
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['element']
}
</script>
