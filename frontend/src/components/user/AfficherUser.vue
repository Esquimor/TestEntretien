<!-- Element affichant un utilisateur -->
<template>
    <div class="element">
        <h2>Nom: {{ nom }}, Prénom: {{ prenom }}</h2>
        <p>Né le: {{ dateNaissance | formatDate }} et son mail est {{ mail }}</p>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    nom: {
      type: String,
      required: true
    },
    prenom: {
      type: String,
      required: true
    },
    dateNaissance: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true
    }
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    }
  }
}
</script>

<style scoped>
.element{
  margin-bottom: 10px;
}

.element:nth-child(even){
  background-color: #e0e0e0;
}
</style>
