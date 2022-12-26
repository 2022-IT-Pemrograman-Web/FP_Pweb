<template>
  <b-row>
    <b-col class="col-md-6">
      <h2>
        Edit Link
        <b-link href="#/">(Link List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{link.title}}
        </template>
        <template slot="lead">
          Title: {{link.title}}<br>
          Description: {{link.description}}<br>
          Link: {{link.linkAwal}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editlink(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletelink(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'Showlink',
  data () {
    return {
      key: '',
      link: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('links').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.link = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editlink (id) {
      router.push({
        name: 'Editlink',
        params: { id: id }
      })
    },
    deletelink (id) {
      firebase.firestore().collection('links').doc(id).delete().then(() => {
        router.push({
          name: 'linkList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>
