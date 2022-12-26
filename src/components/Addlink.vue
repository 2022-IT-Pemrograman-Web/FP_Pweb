<template>
  <b-row>
    <b-col class="col-md-6">
      <h2>
        Add Link
        <b-link href="#/">(Link List)</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="titleGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Title">
            <b-form-input id="title" v-model.trim="link.title"></b-form-input>
          </b-form-group>
          <b-form-group id="descGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Description">
              <b-form-textarea id="description"
                         v-model="link.description"
                         placeholder="Enter something"
                         :rows="2"
                         :max-rows="6">{{link.description}}</b-form-textarea>
          </b-form-group>
          <b-form-group id="linkAwalGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Link">
            <b-form-input id="linkAwal" v-model.trim="link.linkAwal"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'Addlink',
  data () {
    return {
      ref: firebase.firestore().collection('links'),
      link: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.link).then(() => {
        this.link.title = ''
        this.link.description = ''
        this.link.linkAwal = ''
        router.push({
          name: 'linkList'
        })
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
