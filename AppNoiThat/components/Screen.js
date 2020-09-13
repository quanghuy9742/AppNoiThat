import React, { Component } from 'react';
import { AppRegistry, FlatList , StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import BasicFlatList from './BasicFlatList';


export default class Screen extends Component{
    render(){
        return(
            <View
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        width:'100%',
                        height:'15%'
                    }}
                >
                    <View
                        style={{
                            flexDirection:'row',
                            width: '100%',
                            height: '50%',
                            marginTop: 25
                        }}
                    >
                        <View
                            style={{
                                width:'15%',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={require('../data/images/icon.png')}
                                style={{
                                    width:30,
                                    height:30
                                }}
                            ></Image>
                        </View>
                        <View
                            style={{
                                width:'70%',
                                height:'60%',
                                marginTop:10,
                                borderRadius: 10,
                                borderTopColor: 'silver',
                                borderTopWidth: 1,
                                borderBottomColor: 'silver',
                                borderBottomWidth: 1,
                                borderLeftColor: 'silver',
                                borderLeftWidth: 1,
                                borderRightColor:'silver',
                                borderRightWidth: 1
                            }}
                        >
                            <View
                                style={{
                                    flex:1,
                                    flexDirection:'row',
                                    justifyContent:'center',
                                }}
                            >
                                <View
                                    style={{
                                        width:'90%',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontWeight: '300',
                                            marginLeft: 16
                                        }}
                                    >
                                        What are you looking for ...
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex:1,
                                        justifyContent:'center'
                                    }}
                                >
                                    <Image
                                        source={require('../data/images/find.png')}
                                        style={{
                                            width:14,
                                            height:14
                                        }}
                                    ></Image>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                width:'15%',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={require('../data/images/bag.png')}
                                style={{
                                    width:20,
                                    height:23
                                }}
                            ></Image>
                        </View>
                    </View>
                    <View
                        style={{
                            height:'17%',
                            justifyContent:'space-between',
                            flexDirection:'row',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                marginLeft: 20
                            }}
                        >
                            Trending
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                marginLeft: 20
                            }}
                        >
                            New
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                marginLeft: 20
                            }}
                        >
                            Sale
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                marginLeft: 20
                            }}
                        >
                            Most ordered
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                marginLeft: 20
                            }}
                        >
                            Favorite
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width:'100%',
                        height:'80%',
                    }}
                >
                    <BasicFlatList></BasicFlatList>
                </View>
                <View
                    style={{
                        flex:1,
                        backgroundColor:'#F2F2F2'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            borderTopRightRadius:10,
                            borderTopLeftRadius:10,
                            justifyContent:'center',
                            backgroundColor:'#FFFFFF'
                        }}
                    >
                        <View
                            style={{
                                width: '40%',
                                alignItems:'center',
                                flexDirection:'row',
                                justifyContent:'center'
                            }}
                        >
                            <Image
                                source={require('../data/images/home.png')}
                                style={{
                                    width:16,
                                    height:16
                                }}
                            ></Image>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight:'900',
                                    color:'#2E4B9C',
                                    marginLeft: 10
                                }}
                            >
                                Home
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent:'space-around',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={require('../data/images/group.png')}
                                style={{
                                    width: 16,
                                    height: 16
                                }}
                            ></Image>
                            <Image
                                source={require('../data/images/heart.png')}
                                style={{
                                    width: 14,
                                    height: 13
                                }}
                            ></Image>
                            <Image
                                source={require('../data/images/list.png')}
                                style={{
                                    width: 16,
                                    height: 10
                                }}
                            ></Image>
                        </View>
                    </View>
                </View>
            </View>

            
        );
    }
}