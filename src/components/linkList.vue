<template>
  <b-row>
    <div class="col-md-6">
      <h2>
        Link List
        <b-link href="#/add-link">(Add List)</b-link>
      </h2>
      
      <div v-for="link in links" :key="link.key">
        <p>{{link.title}}</p>
        <div>
        <button @click="openlink(link.key)" class="btn btn-success mr-2" variant="success">go to link</button>
        <button @click="details(link.key)" class="btn btn-warning mr-2" variant="primary">details</button>
        </div>

      </div> 
    </div>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'linkList',
  data () {
    return {
      fields: [
        { key: 'title', label: 'Title', sortable: true, 'class': 'text-center' },
        { key: 'actions', label: 'Action', 'class': 'text-center' }
      ],
      links: [],
      errors: [],
      ref: firebase.firestore().collection('links'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.links = [];
      querySnapshot.forEach((doc) => {
        this.links.push({
          key: doc.id,
          title: doc.data().title
        });
      });
    });
  },
  methods: {
    openlink (link) {
      const ref = firebase.firestore().collection('links').doc(link);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.link = doc.data();
        window.open(doc.data().linkAwal, "_blank")
      } else {
        alert("No such document!");
      }
    });
    },
    details (link) {
      router.push({ name: 'Showlink', params: { id: link }})
    },
  }
}
</script>

<style>
  .table {
    width: 100%;
    margin: 0 auto;
  }
</style>
