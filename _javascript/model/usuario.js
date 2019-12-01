class usuario{
    constructor(nome,sobrenome,email,tokenGoogle){
        this._nome=nome;
        this._sobrenome=sobrenome;
        this._email=email;
        this._token=tokenGoogle;
        this._tipoUser='';
    }
    get nome(){
        return this._nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
    get email(){
        return this._email;
    }
    get tipoUser(){
        return this._tipoUser;
    }
    get tokeGoogle(){
        return this._token;
    }
}