import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TextInput,
    Text,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import {
    typeName,
    storeName
} from '../../actions/landingPageActions';
import { connect } from 'react-redux';



class LandingPage extends Component {

    constructor() {
        super();
    }

    renderErrorMessage() {
        const {
            error
        } = this.props

        const {
            loginErrorText
        } = styles;

        if (error !== '') {
            return (
                <Text style={loginErrorText}>
                    {error}
                </Text>
            );
        }
    }

    renderButtonOrSpinner() {

        const {
            loading
        } = this.props;

        const {
            spinnerContainer,
            letsGoButtonContainer,
            letsGoButtonText
        } = styles;

        if (loading) {
            return (
                <View style={spinnerContainer}>
                    <ActivityIndicator
                        size="large"
                        color="#cb2d3e"
                    />

                </View>
            );
        } else {
            return (
                <TouchableOpacity onPress={() => this.props.storeName(this.props.name)}>
                    <View style={letsGoButtonContainer}>

                        <Text style={letsGoButtonText}>
                            Cool Lets Go
                        </Text>

                    </View>
                </TouchableOpacity>
            );
        }

    }

    render() {

        const {
            mainContainer,
            textInputContainer,
            textTextInputSpecs,
            letsGoButtonContainer,
            letsGoButtonText
        } = styles;

        return (

            <>
                <StatusBar backgroundColor="#ef473a" barStyle="light-content" />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={mainContainer}>

                        <View style={textInputContainer}>
                            <TextInput
                                placeholder="name"
                                placeholderTextColor="rgba(204, 50, 50, 0.56)"
                                value={this.props.name}
                                onChangeText={value => this.props.typeName(value)}
                                style={textTextInputSpecs}

                            />

                        </View>

                        {this.renderErrorMessage()}
                        {this.renderButtonOrSpinner()}


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

export default connect(mapStateToProps, { typeName, storeName })(LandingPage);



const {
    height, width
} = Dimensions.get('screen');


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#b2b2b2',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInputContainer: {
        width: width * 0.75,
        backgroundColor: 'white',
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTextInputSpecs: {
        color: '#cb2d3e',
        fontSize: height * 0.03,
        paddingVertical: height * 0.0125,


    },

    letsGoButtonContainer: {
        width: width * 0.45,
        borderRadius: width * 0.1,
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        paddingVertical: height * 0.0125,
        backgroundColor: '#ef473a',
        alignItems: 'center',
        justifyContent: 'center',

    },
    spinnerContainer: {
        width: width * 0.45,
        borderRadius: width * 0.1,
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        paddingVertical: height * 0.0125,
        alignItems: 'center',
        justifyContent: 'center',

    },
    letsGoButtonText: {
        fontSize: height * 0.03,
        color: 'white',

    },
    loginErrorText: {
        color: 'red'
    },
    spinnerContainer: {
        width: width * 0.45,
        borderRadius: width * 0.1,
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        paddingVertical: height * 0.0125,
        alignItems: 'center',
        justifyContent: 'center',

    },

})