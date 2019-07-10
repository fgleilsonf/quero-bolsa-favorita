import React from "react";

import {observer, inject} from 'mobx-react';

class AddScholarships extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemsSelected: []
        };
    }

    componentWillMount() {
        this.props.scholarships_store.fetch();
    }

    addScholarship = (scholarship) => {
        let itemsSelected = this.state.itemsSelected;

        itemsSelected.push(scholarship);

        this.setState({
            itemsSelected: itemsSelected
        })
    };

    confirm = () => {
        this.props.scholarships_store.add(this.state.itemsSelected);

        this.props.closeModal();
    };

    render() {
        const scholarships_store = this.props.scholarships_store;

        if (scholarships_store.loading) {
            return <p>Carregando...</p>
        }

        return (
            <div className="modal__add_scholarships">
                <h1>Adicionar Bolsa</h1>
                <p>Filtre e adicione as bolsas de seu interesse</p>

                <form>
                    <div>
                        <label htmlFor="">Selecione sua cidade</label>
                        <select name="" id="">
                            <option value="">Selecione sua cidade</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Selecione o curso de sua preferência</label>
                        <select name="" id="">
                            <option value="">Selecione o curso de sua preferência</option>
                        </select>
                    </div>

                    <div>
                        <p htmlFor="">Como você quer estudar</p>

                        <label htmlFor="">
                            <input type="checkbox" id="check_presential" name="check_presential" /> Presencial
                        </label>

                        <label htmlFor="">
                            <input type="checkbox" id="check_distance" name="check_distance" />A distância
                        </label>
                    </div>

                    <div>
                        <p>Até quanto você pode pagar ?</p>

                    </div>
                </form>

                <div>
                    <h3>Resultado</h3>

                    <h3>Ordenar por </h3>
                    <ul>
                        <li>Nome da faculdade</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        {
                            scholarships_store.scholarships.map((scholarship, index)=> {
                                const course = scholarship.course;

                                return (
                                    <li key={index} onClick={this.addScholarship.bind(this, scholarship)}>
                                        <input type="checkbox" />
                                        <img src={scholarship.university.logo_url} alt=""/>
                                        <h3>{course.name}</h3>
                                        <p>{course.level}</p>
                                        <p>Bolsa de {scholarship.discount_percentage}%</p>
                                        <p>R$ {scholarship.price_with_discount}/Mês</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <button type="button" onClick={this.props.closeModal}>Canecelar</button>
                    <button type="button" onClick={this.confirm}
                            disabled={!this.state.itemsSelected.length}>Adicionar bolsa(s)</button>
                </div>
            </div>
        )
    }
}

let container = observer(AddScholarships);
container = inject(['scholarships_store'])(container);

export default container;
