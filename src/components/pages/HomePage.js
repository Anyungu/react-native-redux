import React, { Component } from 'react';

import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,

} from 'react-native';

import { connect } from 'react-redux';



class HomePage extends Component {

    constructor() {
        super();
    }

    render() {

        const {
            styleText,
            mainContainer
        } = styles;


        return (

            <>
                <StatusBar backgroundColor="#ef473a" barStyle="light-content" />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={mainContainer}>

                        <Text style={styleText}>
                            {this.props.name}
                        </Text>

                        <Text style={styleText}>
                            {this.props.loading.toString()}
                        </Text>

                        <Text style={styleText}>
                            {this.props.error}
                        </Text>



                    </View>
                </SafeAreaView>
            </>

        );
    }
}

const mapStateToProps = ({ landingPageReducer }) => {

    const { name, error, loading } = landingPageReducer;

    return { name, error, loading };

};

export default connect(mapStateToProps, {})(HomePage);



const {
    height, width
} = Dimensions.get('screen');


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#b2b2b2',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    styleText: {
        color: 'red',
        fontSize: height * 0.05,
    },


})