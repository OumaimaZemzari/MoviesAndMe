// Components/Favorites.js

import React from 'react'
import { connect } from 'react-redux'
import FilmList from "./FilmList";
import { StyleSheet,View , Text} from 'react-native'
import  Avatar from "./Avatar"

class Favorites extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            { films: [],
                isLoading: false }

    }
    componentDidMount()
    { console.log("i ma in FAVORIS page -------------------")
        console.log(this.props.favoritesFilm)
        this.setState(
            {films:this.props.favoritesFilm}
        )
    }
    render() {
        return (


            <View style={styles.main_container}>
                <View style={styles.avatar_container}>
                    <Avatar/>
                </View>

            <FilmList
                films={this.props.favoritesFilm} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
                navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                favoriteList={true}
                //loadFilms={this._loadFilms} // _loadFilm charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
                //page={this.page}
                //totalPages={this.totalPages} // les infos page et totalPages vont être utile, côté component FilmList, pour ne pas déclencher l'évènement pour charger plus de film si on a atteint la dernière page
            />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    avatar_container: {
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.toggleFavorite.favoritesFilm,
        Avatar:state.setAvatar.Avatar
    }
}

export default connect(mapStateToProps) (Favorites)