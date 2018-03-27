<!-- Element affichant la liste des utilisateurs dans la base de donnée -->
<template>
    <default-layout>
        <h1>La liste des utilisateurs</h1>
        <div v-if="loading" class="attente">
          En Attente des données...
        </div>
        <div v-else>
          <div v-if="vide">
            <span id="utilisateurVide">Merci de remplir au moins un utilisateur.</span>
          </div>
          <afficher-user class="utilisateur" v-else
              v-for="utilisateur in utilisateurs"
              :key="utilisateur.key"
              :nom="utilisateur.nom"
              :prenom="utilisateur.prenom"
              :dateNaissance="utilisateur.dateNaissance"
              :mail="utilisateur.mail">
          </afficher-user>
        </div>
    </default-layout>
</template>

<script>
import defaultLayout from '@/layout/defaultLayout'
import AfficherUser from '@/components/user/AfficherUser'

export default {
  components: {
    'default-layout': defaultLayout,
    'afficher-user': AfficherUser
  },
  data: function () {
    return {
      utilisateurs: [],
      loading: true
    }
  },
  computed: {
    vide () {
      if (this.utilisateurs.length === 0) return true
      return false
    }
  },
  mounted () {
    this.axios
      .get('http://localhost:1337/user/list', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'localhost',
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'same-origin'
      })
      .then(
        response => (this.utilisateurs = response.data),
        this.loading = false
      )
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 25px;
}

#utilisateurVide{
  font-size: 1.4em;
}
</style>
