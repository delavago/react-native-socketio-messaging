/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{sender: 'Delano', groupNumber: 1, message: 'This is a test'}],
      sender: null,
      groupNumber: 0,
      message: null,
    };
  }

  submitMessage = () => {
    let data = {
      sender: this.state.sender,
      groupNumber: this.state.groupNumber,
      message: this.state.message,
    };

    this.setState({messages: [...this.state.messages, data]});
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.messageContainer}>
          <FlatList
            data={this.state.messages}
            renderItem={({item}) => <MessageBubble data={item} />}
          />
        </View>
        <KeyboardAvoidingView
          style={styles.textFieldContainer}
          behavior="position">
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="UserName"
              onChangeText={text => this.setState({sender: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Group Number"
              onChangeText={text => this.setState({groupNumber: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Message"
              onChangeText={text => this.setState({message: text})}
            />
          </View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => this.submitMessage()}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const MessageBubble = props => {
  return (
    <View style={styles.messageBubbleContainer}>
      <View>
        <Text style={styles.senderText}>{props.data.sender}</Text>
      </View>
      <View>
        <Text>{props.data.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    margin: 10,
  },
  messageContainer: {
    flex: 4,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
    borderColor: '#E0E0E0',
    padding: 15,
  },
  textFieldContainer: {
    flex: 2,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    padding: 10,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  btnContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  messageBubbleContainer: {
    backgroundColor: '#03A9F4',
    borderRadius: 10,
    height: 60,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
  },
  senderText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
