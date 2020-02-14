<template>
  <v-text-field
    v-model.lazy="element.value"
    :id="element.id"
    :label="element.label"
    :name="element.label"
    :type="element.type"
    :rules="element.rules"
  />
</template>

<script>
export default {
  name: 'TextField',
  props: ['element']
}
</script>
