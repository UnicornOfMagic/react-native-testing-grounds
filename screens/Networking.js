import {ActivityIndicator, Button, FlatList, Text, View} from "react-native";
import React, {Component} from "react";


export default class Networking extends Component<Props> {
    static navigationOptions = {
        title: 'Networking Demo'
    };
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return this.getMovieData();
    }

    getMovieData() {
        return fetch('https://api.myjson.com/bins/prm7f.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){

        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <View style={{flex: 3}}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Button
                        onPress={() => {this.setState({isLoading: true,
                                                        dataSource: ''});
                                        this.getMovieData();
                                        }
                        }
                        title="Reload"
                    />
                </View>
            </View>
        );
    }
}