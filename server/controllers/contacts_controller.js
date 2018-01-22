let contacts = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        // info req.body
        id++
        let newContact = {
            id: id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        }
        contacts.push(newContact);
        res.status(200).send('Contact Added')
    },
    get: (req, res) => {
        res.status(200).send(contacts);

    },
    update: (req, res) => {
        
        for(let i =0; i< contacts.length; i++) {
            if (contacts[i].id === parseInt(req.params.id)) {
                contacts[i].firstName = req.body.firstName;
                contacts[i].lastName = req.body.lastName;
                contacts[i].userName = req.body.userName;
                contacts[i].email = req.body.email;
                contacts[i].password = req.body.password;
            }
        }
        res.status(200).send('Contact Updated!')
    },
    delete: (req, res) => {
        for (let i  = 0; i < contacts.length; i++) {
            if (contacts[i].id === parseInt(req.params.id)) {
                contacts.splice(i, 1);
            }
            res.status(200).send('Contact deleted :(');

        }
        
    }

}