import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Screen1 extends Component{
    render(){
        return(
            <View
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: '12%',
                        justifyContent:'flex-end'
                    }}
                >
                    <View
                        style={{
                            flexDirection:'row',
                            height:'60%',
                        }}
                    >
                        <View
                            style={{
                                width: '50%',
                                marginLeft: 15,
                                justifyContent:'center'
                            }}
                        >
                            <Image
                                source={require('../data/images/arrowleft.png')}
                                style={{
                                    width: 11,
                                    height: 20
                                }}
                            ></Image>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems:'flex-end',
                                marginRight:15
                            }}
                        >
                            <Image
                                source={require('../data/images/Fill1.png')}
                                style={{
                                    width:13,
                                    height:7
                                }}
                            ></Image>
                            <Image
                                source={require('../data/images/Fill2.png')}
                                style={{
                                    width:12,
                                    height:13,
                                    marginRight:10
                                }}
                            ></Image>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        height:'34%',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Image
                        source={require('../data/images/classic1.png')}
                        style={{
                            width:200,
                            height:220
                        }}
                    ></Image>
                </View>
                <View
                    style={{
                        height:'15%',
                        flexDirection:'row'
                    }}
                >
                    <View
                        style={{
                            width:'15%',
                            height: '100%'
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '50%',
                                backgroundColor: 'white'
                            }}
                        >

                        </View>
                        <View
                            style={{
                                width: '100%',
                                height: '50%',
                                backgroundColor:'white'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: '#F7F9FC',
                                    borderTopLeftRadius: 40
                                }}
                            >

                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width:'70%',
                            height: '100%',
                            backgroundColor:'#F7F9FC'
                        }}
                    >
                        <View
                            style={{
                                width:'100%',
                                height: '100%',
                                backgroundColor:'white',
                                borderRadius: 20
                            }}
                        >
                            <View
                                style={{
                                    height:'50%',
                                    width: '100%',
                                    flexDirection:'row',
                                }}
                            >
                                <View
                                    style={{
                                        width:'70%',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight:'bold',
                                            marginLeft:15
                                        }}
                                    >
                                        Classic Chair
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width:'30%',
                                        justifyContent: 'center',
                                        alignItems:'flex-end',
                                    }}
                                >
                                    <Image
                                        source={require('../data/images/share.png')}
                                        style={{
                                            width: 19,
                                            height: 19,
                                            marginRight: 15
                                        }}
                                    ></Image>
                                </View>
                            </View>
                            <View
                                style={{
                                    width:'100%',
                                    height: '50%',
                                    flexDirection:'row',
                                }}
                            >
                                <View
                                    style={{
                                        width: '70%',
                                        height: '100%',
                                        flexDirection:'row',
                                        alignItems:'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: '500',
                                            color:'#2E4B9C',
                                            paddingLeft: 15
                                        }}
                                    >
                                        42$
                                    </Text>
                                    <Image
                                        source={require('../data/images/45.png')}
                                        style={{
                                            width: 22,
                                            height: 13,
                                            marginTop: 8,
                                            marginLeft: 5
                                        }}
                                    ></Image>
                                </View>
                                <View
                                    style={{
                                        width:'30%',
                                        alignItems:'center',
                                        flexDirection:'row',
                                        justifyContent:'flex-end',
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 16,
                                            height: 16,
                                            marginRight: 5
                                        }}
                                        source={require('../data/images/star.png')}
                                    ></Image>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: '#808080',
                                            fontWeight:'300',
                                            marginRight: 15
                                        }}
                                    >
                                        4.7
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width:'15%',
                            height: '100%'
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '50%',
                                backgroundColor: 'white'
                            }}
                        >

                        </View>
                        <View
                            style={{
                                width: '100%',
                                height: '50%',
                                backgroundColor:'white'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: '#F7F9FC',
                                    borderTopRightRadius: 40
                                }}
                            >

                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#F7F9FC'
                    }}
                >
                    <View
                        style={{
                            height:'30%',
                            width: '100%',
                        }}
                    >
                        <View
                            style={{
                                height: '50%',
                                width: '100%',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight:'600',
                                    color: '#343241',
                                    marginLeft: 25,
                                    marginTop: 20,
                                }}
                            >
                                COLOR
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                height: '50%',
                                marginTop: 10,
                                marginLeft: 25,
                                flexDirection:'row',
                            }}
                        >
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#E5BCBE',
                                    borderRadius: 10
                                }}
                            >

                            </View>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#DEC369',
                                    borderRadius: 10,
                                    marginLeft: 20
                                }}
                            >

                            </View>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#55AECC',
                                    borderRadius: 10,
                                    marginLeft: 20
                                }}
                            >

                            </View>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#994C90',
                                    borderRadius: 10,
                                    marginLeft: 20
                                }}
                            >

                            </View>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#3D3D98',
                                    borderRadius: 10,
                                    marginLeft: 20
                                }}
                            >

                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: '40%',
                            marginTop: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#3B394B',
                                marginLeft: 25
                            }}
                        >
                            DETAIL
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color:'#8F9BB3',
                                marginLeft: 25,
                                marginTop: 10
                            }}
                        >
                            Nam libero tempore, cum soluta nobis est eligendi {'\n'} optio cumque nihil impedit quo minus id quod {'\n'} maxime placeat facere possimus, omnis voluptas {'\n'} assumenda est
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                width:'100%',
                                height:'80%',
                                flexDirection:'row'
                            }}
                        >
                            <View
                                style={{
                                    width: 45,
                                    height: 45,
                                    backgroundColor: 'white',
                                    marginLeft: 25,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    style={{
                                        width:25,
                                        height:25
                                    }}
                                    source={require('../data/images/Path.png')}
                                ></Image>
                            </View>
                            <View
                                style={{
                                    width: 270,
                                    height: 45,
                                    backgroundColor:'#2E4B9C',
                                    marginLeft: 25,
                                    borderRadius: 10,
                                    justifyContent:'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color:'#FFFFFF'
                                    }}
                                >
                                    ADD TO MY CART
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}