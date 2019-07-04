import React from "react";
import {observer, inject} from "mobx-react";
import Favorites from "./Favorites";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            semester_selected: null,
            menus: [
                { title: 'Todos os semestres', value: null},
                { title: '2º semestre de 2019', value: '2019.2'},
                { title: '1º semestre de 2020', value: '2020.1' },
            ]
        }
    }

    changeFilter (menu) {

        console.log('menu.value', menu.value);

        this.setState({
            semester_selected: menu.value
        })
    }

    render() {
        const url = 'https://qb-assets.querobolsa.com.br/assets/logo-querobolsa-42a6f39ff851dea4c66ed0ab56e3fa8a9195dfef81b057031fb03ecffb20e34b.svg';
        const favorites = this.props.scholarships_store.getFilterFavorites(this.state.semester_selected);

        return (
            <div>
                <header className="header__menu">
                    <div className="header__menu-item">
                        <div className="header__menu-item--div">
                            <i className="fa fa-info-circle"></i>
                            <span>Ajuda</span>
                        </div>
                        <div className="header__menu-item--divider"></div>
                    </div>
                    <a>
                        <img src={url} className="logo" alt="logo"/>
                    </a>
                    <div className="header__menu-item">
                        <div className="header__menu-item--divider"></div>
                        <div className="header__menu-item--div">
                            <i className="fa fa-user-circle-o"></i>
                            <span>Conta</span>
                        </div>
                    </div>
                </header>

                <div className="container">

                    <div className="container__menus">
                        <a href="#contact">
                            Minha conta
                        </a>
                        <a href="#contact">
                            Menu <i className="fa fa-chevron-down"></i>
                        </a>
                    </div>

                    <div className="container__content">
                        <a className="container__menu" href="#">
                            <h3><i className="fa fa-chevron-left"></i> Minha conta</h3>
                        </a>

                        <h1>Bolsas favoritas</h1>

                        <p className="container__subtitle--p">
                            Adicione bolsas de cursos e faculdades do
                            seu interesse e receba atualizações com as
                            melhores ofertas disponíveis.
                        </p>

                        <div className="container__content__menu">
                            <ul>
                                {
                                    this.state.menus.map((menu, index)=> {
                                        return (
                                            <li className={menu.value === this.state.semester_selected ? 'selected' : ''}
                                                key={index}
                                                onClick={this.changeFilter.bind(this, menu)}>{menu.title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="container__content__card" onClick={this.props.openModal}>
                            <i className="fa fa-plus-circle fa-5x"></i>
                            <p className="container__content__card--title">Adicionar bolsa</p>
                            <p className="container__content__card--_subtitle">Clique aqui para adicionar bolsas de cursos do seu interesse</p>
                        </div>

                        <Favorites favorites={favorites} />
                    </div>
                </div>

                <footer>
                    <div className="footer__contact">
                        <div className="footer__contact--whatsapp">
                            <i className="fa fa-whatsapp"></i>
                        </div>
                        <div className="footer__contact__info">
                            <a href="tel:08001232222" className="footer__contact__info--a">0800 123 2222</a>
                            <span className="footer__contact__info--span">Segunda a sexta de 8h às 22h</span>
                        </div>
                    </div>
                    <div className="footer__alternatives">
                        <div>
                            <i className="fa fa-comments-o"></i>
                            <span>Chat</span>
                        </div>
                        <div>
                            <i className="fa fa-envelope-o"></i>
                            <span>E-mail</span>
                        </div>
                        <div>
                            <i className="fa fa-info-circle"></i>
                            <span>Ajuda</span>
                        </div>
                    </div>
                    <div className="footer__slogan">
                        Feito com <i className="fa fa-heart"></i> pela Quero Educação
                    </div>
                </footer>
            </div>
        )
    }

}

let container = observer(Home);
container = inject(['scholarships_store'])(container);

export default container;
