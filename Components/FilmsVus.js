// Components/Favorites.js

import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet,View , FlatList} from 'react-native'
import  Avatar from "./Avatar"
import FilmVusItem from './FilmVusItem'

class FilmsVus extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            { films: [],
                isLoading: false }

    }
    componentDidMount()
    { console.log("i ma in FAVORIS page -------------------")
        console.log(this.props.vusFilm)
        this.setState(
            {films:this.props.vusFilm}
        )
    }
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
        return (


            <View style={styles.main_container}>
                <View style={styles.avatar_container}>
                    <Avatar/>
                </View>


                <FlatList
                    style={styles.list}
                    data={this.props.vusFilm}
                    extraDta={this.props.favoritesFilm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmVusItem film={item} displayDetailForFilm={this._displayDetailForFilm} isFavorisFilm={this._isFavorisFilm}/>}


                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    list: {
        flex: 1
    },
    avatar_container: {
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.toggleFavorite.favoritesFilm,
        vusFilm:state.toggleVus.vusFilm,
        Avatar:state.setAvatar.Avatar
    }
}

export default connect(mapStateToProps) (FilmsVus)