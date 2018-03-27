/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Retourne la liste des utilisateurs dans la base de données
	list: function (req, res) {
        User.find({
        }).exec(function (err, list){
            if (err) { return res.serverError(err); }
            return res.json(list);
        });
    },
    // Créer un nouveau utilisateur dans la base de donnnée
    create: function (req, res) {
        User.create({
            nom: req.param('nom'),
            prenom: req.param('prenom'),
            dateNaissance: req.param('dateNaissance'),
            mail: req.param('mail')
        }).exec(function (err, user){
            if (err) { return res.serverError(err); }
            return res.created();
        });
    }
};

