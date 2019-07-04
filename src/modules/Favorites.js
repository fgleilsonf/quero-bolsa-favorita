import React from "react";

class Favorites extends React.Component {

    render() {
        const favorites = this.props.favorites || [];

        return (
            <div>
                <ul>
                    {
                        favorites.map((favorite, index) => {
                            const university = favorite.university;
                            const course = favorite.course;

                            return (
                                <li key={index}>
                                    <img src={university.logo_url} alt=""/>
                                    <h4>{university.name}</h4>
                                    <h4>{course.name}</h4>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default Favorites;
