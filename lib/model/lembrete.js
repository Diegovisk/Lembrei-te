'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lembrete = function () {
    function Lembrete(title, desc, tarefas, status) {
        _classCallCheck(this, Lembrete);

        this._title = title;
        this._desc = desc;
        this._tarefas = tarefas;
        this._categorias = [];
        this._status = status;
        this._tipoUser = '';
    }

    Lembrete.prototype.add_categoria = function add_categoria(categoria_slug) {
        this._categorias.push(categoria_slug);
    };

    Lembrete.prototype.remove_categoria = function remove_categoria(categoria_slug) {
        categoria_slug.slug = '';
        categoria_slug.nome = '';
        categoria_slug.cor = '';
    };

    Lembrete.prototype.converterTipo = function converterTipo(novoTipo) {
        this.tipoUser = novoTipo;
    };

    _createClass(Lembrete, [{
        key: 'title',
        get: function get() {
            return this._title;
        }
    }, {
        key: 'desc',
        get: function get() {
            return this._desc;
        }
    }, {
        key: 'status',
        get: function get() {
            return this._status;
        }
    }, {
        key: 'categorias',
        get: function get() {
            return [].concat(this._categorias);
        }
    }, {
        key: 'tipoUser',
        get: function get() {
            return this.tipoUser;
        }
    }]);

    return Lembrete;
}();