
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class FilmVusItem extends React.Component {
    constructor(props) {
        super(props)
        this.pressed=false
        this.state =
            {title: "" }
        this._onLongPressButton=this._onLongPressButton.bind(this)

    }
    componentDidMount(){
        this.setState(
            {title:this.props.film.title}
        )

    }

    _displayFavoriteImage(id) {
        var sourceImage = require('../Images/ic_favorite.png')
        if (this.props.isFavorisFilm(id) === true)
        // Film dans nos favoris

            return (
                <Image
                    style={styles.favorite_image}
                    source={sourceImage}
                />
            )
    }
    _onLongPressButton() {
        if(this.pressed==false)
       // console.log('You long-pressed the button!')
        { this.setState(
            {title:this.props.film.release_date
            }
        )
        this.pressed=true}
        else
        {  this.setState(
                {title:this.props.film.title
                }
            )
        this.pressed=false}

    }
    render() {
        //console.log(this.props)
        const { film, displayDetailForFilm, isFavorisFilm } = this.props

        return (

                <TouchableOpacity
                    style={styles.main_container}
                    onPress={() => displayDetailForFilm(film.id)}
                    onLongPress={this._onLongPressButton}>
                    <Image
                        style={styles.image}
                        source={{uri:  getImageFromApi(film.poster_path)
                        }}
                    />
                    <View style={styles.content_container}>
                            <Text style={styles.title_text}>{this.state.title}</Text>


                        </View>

                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row'
    },
    image: {
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 60/2,
    },
    content_container: {
        flex: 1,
        margin: 5
    },

    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },


})

export default FilmVusItem