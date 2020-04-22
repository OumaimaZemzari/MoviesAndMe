import React from 'react'
import { FlatList,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem";

class FilmList  extends React.Component{

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })

    }
    _isFavorisFilm = (idFilm) => {
        if (this.props.favoritesFilm.findIndex(item => item.id === idFilm) !== -1)
            return true
        else
            return false


    }

    render() {
        const { films,navigation,favoriteList,loadFilms,page,totalPages}=this.props
        if(favoriteList==false)
        return (
            <FlatList
                style={styles.list}
                data={films}
                extraDta={this.props.favoritesFilm}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} isFavorisFilm={this._isFavorisFilm}/>}

            />
        )
        else
            return(
                <FlatList
                    style={styles.list}
                    data={films}
                    extraDta={this.props.favoritesFilm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} isFavorisFilm={this._isFavorisFilm}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (page < totalPages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                            loadFilms()
                        }}}
                />

            )
    }


}
const styles = StyleSheet.create({
    list: {
        flex: 1
    }
})

const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.toggleFavorite.favoritesFilm
    }
}
export default connect(mapStateToProps)(FilmList)



