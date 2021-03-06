class Categoria{
    constructor(nome,cor){
        this._slug='';
        this._nome=nome;
        this._cor=cor;
        Object.freeze(this);
    }
    get slug(){
        return this._slug;
    }
    get nome(){
        return this._nome;
    }
    get cor(){
        return this._cor;
    }
    sslug(nome){
        var hash = 0, i, chr;
        if (nome.length === 0) this._slug=hash;
        for (i = 0; i < this.length; i++) {
            chr   = nome.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        this._slug=hash;
    }

}