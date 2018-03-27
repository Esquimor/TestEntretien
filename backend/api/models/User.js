/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // ex., "Doe"
    nom: {
      type: 'string',
      required: true
    },
    // ex., "John"
    prenom: {
      type: 'string',
      required: true
    },
    // ex., "06/06/1996"
    dateNaissance: {
      type: 'date',
      required: true
    },
    // ex., "example@mail.com"
    mail: {
      type: 'string',
      required: true
    },
  }
};

