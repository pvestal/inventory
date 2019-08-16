<template>
  <v-dialog max-width="600px">
      <v-btn flat slot="activator" class="success">Add Item</v-btn>
      <v-card>
        <v-card-title>
            <h2>Scan</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field labe="barcode"></v-text-field>
            </v-form>
        </v-card-text>
      </v-card>
  </v-dialog>
</template>

<script>

export default {

}
</script>

<style>

</style>