const Sails = require("sails/lib/app/Sails");

module.exports = {

    
    show : async function (req, res) {
        sails.log.debug("List all Ressources....")
        let currentUser;
        let currentUserId = req.session.userId;
        let currentUserRole = req.session.userRole;

        if(!currentUserId) {
            res.redirect('/');
        }else {
            sails.log.debug("CurrentUserId", currentUserId)
            sails.log.debug("CurrentUserRole", currentUserRole)
            currentUser = await Benutzer.findOne({id: currentUserId}).populate('role');
        }
        res.view('pages/ressourcen/show' , { currentUser: currentUser });
    },


}