const uuidv4 = require('uuid/v4')

module.exports = app => {
    const customerWalletsDB = app.data.customerWallets
   
    const controller = {}

    const { customerWallets: customerWalletsMock} = customerWalletsDB

    controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB)

    controller.saveCustomerWallets = (req, res) => {
        customerWalletsMock.data.push({
            ...req.body,
            id: uuidv4(),
            parentId: uuidv4(),
            name: req.body.name,
            birthDate: req.body.birthDate,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state
        })

        res.status(201).json(customerWalletsMock)
    }

    controller.wise = (req, res) => {
        customerWalletsMock.wise.push({
            ...req.body
        })
        console.log('Wise resquested')
        res.status(200)
    }



    return controller
}