class Lembrete{
    constructor(title,desc,tarefas,status){
        this._title = title;
        this._desc=desc;
        this._tarefas=tarefas;
        this._categorias=[];
        this._status=status
        this._tipoUser='';

    }
    get title(){
        return this._title;
    }
    get desc(){
        return this._desc;
    }
    get status(){
        return this._status;
    }
    get categorias(){
        return [].concat(this._categorias);
    }
    get tipoUser(){
        return this.tipoUser
    }
    add_categoria(categoria_slug){
        this._categorias.push(categoria_slug);
    }
    remove_categoria(categoria_slug){
        categoria_slug.slug='';
        categoria_slug.nome='';
        categoria_slug.cor='';
    }
    converterTipo(novoTipo){
        this.tipoUser=novoTipo;
    }



}