<!-- Formulaire permettant d'ajouter un utilisateur à la base de donnée -->
<template>
    <default-layout>
      <h1>Créer un utilisateur</h1>
      <ul>
        <li v-for="erreur in listErreur"
          :key="erreur.key">
          {{ erreur }}
        </li>
        <li v-if="ajouter">
          Utilisateur ajouté
        </li>
      </ul>
      <form>
          <div class="elementForm">
              <label for="nom">Nom</label>
              <input type="text" name="nome" placeholder="Nom" v-model="nom"/>
          </div>
          <div class="elementForm">
              <label for="prenom">Prénom</label>
              <input type="text" name="prenom" placeholder="Prénom" v-model="prenom"/>
          </div>
          <div class="elementForm">
              <label for="dateNaissance">Date de Naissance</label>
              <input type="date" name="dateNaissance" placeholder="Date de Naissance" v-model="dateNaissance"/>
          </div>
          <div class="elementForm">
              <label for="mail">Mail</label>
              <input type="email" name="mail" placeholder="Mail" v-model="mail"/>
          </div>
          <input type="submit" value="Créer un Utilisateur" @click="checkForm($event)"/>
      </form>
      <afficher-user class="utilisateur"
        :nom="nom"
        :prenom="prenom"
        :dateNaissance="dateNaissance"
        :mail="mail">
      </afficher-user>
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
      nom: '',
      prenom: '',
      dateNaissance: '',
      mail: '',
      listErreur: [],
      ajouter: false
    }
  },
  methods: {
    checkForm (e) {
      e.preventDefault()
      this.listErreur = []
      if (!this.nom) this.listErreur.push('Nom Obligatoire.')
      if (!this.prenom) this.listErreur.push('Prenom Obligatoire.')
      if (!this.dateNaissance) this.listErreur.push('Date de Naissance Obligatoire.')
      if (!this.mail) this.listErreur.push('Mail Obligatoire.')
      if (this.listErreur.length === 0) {
        this.axios
          .post(`http://localhost:1337/user/create`, {
            nom: this.nom,
            prenom: this.prenom,
            dateNaissance: this.dateNaissance,
            mail: this.mail,
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': 'localhost',
              'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin'
          })
          .then(response => {
            this.nom = ''
            this.prenom = ''
            this.dateNaissance = ''
            this.mail = ''
            this.ajouter = true
          })
          .catch(e => {
            this.listErreur.push("Une Erreur s'est produite veuillez réessayer !")
          })
      }
    }
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 25px;
}

input[type="submit"]{
  background-color: #0277bd;
  color:white;
  padding:10px;
  border: none;
  border-radius: 20px;
  font-size: 0.9em;
  cursor: pointer;
}

input[type="submit"]:hover{
  background-color: #7b1fa2;
}

.elementForm{
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.elementForm *{
  font-size: 1.4em;
}

.elementForm label{
  margin-right: 10px;
}

.utilisateur{
  margin-top:50px;
  font-size: 1.4em;
}
</style>
