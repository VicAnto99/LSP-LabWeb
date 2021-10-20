export class User {

    constructor(_id='', email='', password='', name='', last_name='', mom_last_name='', edad='', numero_telefonico=''){
        this._id = _id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.last_name = last_name;
        this.mom_last_name = mom_last_name;
        this.edad = edad;
        this.numero_telefonico = numero_telefonico;
    }

    _id!: string;
    email!: string;
    password!: string;
    name!: string;
    last_name!: string;
    mom_last_name!: string;
    edad!: string;
    numero_telefonico!: string;
}
