var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`, 
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            zap: '45999999999',
            address: {
                postalcode: '85806-140',
                street: 'Rua Apinajés',
                number: '1000',
                details: 'casa branca',
                district: 'Santa Cruz',
                city_state: 'Cascavel/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}