import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert, } from "react-native";

const Layout = () => {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validateEmail = (Email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo)\.com$/;
        return regex.test(Email);
  };

  const handleSubmit = () => {
    if (!firstname) {
      Alert.alert('Enter firstname');
      
    } else if (!lastname) {
      Alert.alert('Enter lastname');
    
    } else if (!Email) {
      Alert.alert('Enter email');
    
    } else if (! password) {
       Alert.alert('Enter password');
      
    }{
      
    }
    // checking length
    if (firstname.length < 3) {
      Alert.alert('first name cannot be lesser than 3')
      
    } else if (lastname.length < 3) {
        Alert.alert('last name cannot be lesser than 3')
        
    } else if (password.length < 6) {
      Alert.alert('password cannot be lesser than 6')
    }
    
  if (validateEmail(Email)) {
      Alert.alert("Success", "Valid email!");
    } else {
      Alert.alert("Invalid Email");
    }
   


    console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
    console.log("Email:", Email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.text}>First Name</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your first name"
          placeholderTextColor="black"
          value={firstname}
          onChangeText={setFirstName}
          style={{ flex: 1 }}
        />
      </View>

      <Text style={styles.text}>Last Name</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your last name"
          placeholderTextColor="black"
          value={lastname}
          onChangeText={setLastName}
          style={{ flex: 1 }}
        />
      </View>

      <Text style={styles.text}>Email</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="black"
          value={Email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={{ flex: 1 }}
        />
      </View>

      <Text style={styles.text}>Password</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ flex: 1 }}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    backgroundColor: "#EDEADE",
    width: "100%",
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 30,
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#E34234",
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
})