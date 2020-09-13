import React, { Component } from 'react';
import { AppRegistry, FlatList , StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import flatListData from '../data/flatListData';

const WIDTH = Dimensions.get('window').width
const numColumns = 2
 
class FlatListItem extends Component{
    render(){
        return(
            <View
                style={{
                    flex:1,
                    backgroundColor: '#F2F2F2'
                }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor:'white',
                        margin: 7,
                        justifyContent:'center',
                        height: WIDTH/numColumns,
                        borderRadius: 20,
                        height:300
                    }} 
                >
                    <View
                        style={{
                            alignItems:'center',
                            height:200,
                            justifyContent:'center'
                        }}
                    >
                        <View
                            style={{
                                width:'70%',
                                height:'80%',
                                position:'absolute',
                            }}
                            >
                            <View
                                style={{
                                    alignItems:'flex-end',
                                }}
                            >
                                <Image
                                    style={{
                                        width:18,
                                        height:15
                                    }}
                                    source={require('../data/images/hwhite.png')}
                                ></Image>
                            </View> 
                        </View>
                        <Image
                            source={this.props.item.imageName}
                            style={{
                                width:100,
                                height:120,
                            }}
                        
                        ></Image>
                    </View>
                    <View
                        style={{
                            paddingTop:5
                        }}
                    >
                        <Text
                        style={{
                            fontSize: 15,
                            color: 'black',
                            paddingLeft: 15,
                            textAlign:'left'
                        }}
                        >
                            {this.props.item.name}
                        </Text>               
                    </View>
                    <View
                        style={{
                            paddingTop:5,
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                flexDirection:'row',
                                width:'75%'
                            }}
                        >
                            <Text
                                style={{
                                    color:'blue',
                                    fontSize:16,
                                    paddingLeft:15
                                }}
                            >
                                {this.props.item.price}
                            </Text>
                            <Image
                                source={require('../data/images/45.png')}
                                style={{
                                    width: 19,
                                    height: 12,
                                    marginTop: 5,
                                    marginLeft:2
                                }}
                            ></Image>
                        </View>
                        <View
                            style={{
                                flex:1,
                                alignItems:'flex-end',
                                flexDirection:'row'
                            }}
                        >
                            <Image
                                source={require('../data/images/star.png')}
                                style={{
                                    width: 10,
                                    height: 10,
                                    marginBottom:3,
                                    marginRight:2
                                }}
                            ></Image>
                            <Text
                                style={{
                                    fontSize:15,
                                    color: 'silver',
                                    marginTop: 2,
                                    marginRight:3
                                }}
                            >
                                4.7
                            </Text>
                        </View>        
                    </View>        
                </View>
            </View>
            
        );
    }
}

export default class BasicFlatList extends Component{
    render(){
        return(
            <View
                style={{
                    flex: 1,
                }}
            >
                <FlatList
                    data={flatListData}
                    renderItem={({item, index})=>{
                        return(
                            <FlatListItem
                                item={item}
                                index={index}
                            >

                            </FlatListItem>
                        );
                    }}
                    keyExtractor={(item, index)=> index.toString()}
                    numColumns={numColumns}
                >

                </FlatList>
            </View>
        );
    }
}