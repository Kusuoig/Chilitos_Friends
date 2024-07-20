import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'tailwindcss-react-native';

const Container = styled(View);
const Title = styled(Text);
const Input = styled(TextInput);
const RegisterContainer = styled(View);
const RegisterText = styled(Text);
const RegisterLink = styled(Text);
const Button = styled(TouchableOpacity);
const ButtonText = styled(Text);

const LoginScreen: React.FC = () => {
  return (
    <Container className="flex-1 justify-center items-center bg-white px-4">
      <Title className="text-2xl font-bold mb-6">SIGN IN</Title>
      <Input
        className="w-full h-10 border border-gray-300 rounded px-2 mb-4"
        placeholder="Username"
        placeholderTextColor="#999"
      />
      <Input
        className="w-full h-10 border border-gray-300 rounded px-2 mb-4"
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <RegisterContainer className="flex-row mb-4">
        <RegisterText className="text-gray-600">Don't have an account? </RegisterText>
        <TouchableOpacity>
          <RegisterLink className="text-purple-600 underline">Register Here</RegisterLink>
        </TouchableOpacity>
      </RegisterContainer>
      <Button className="w-full h-10 bg-black justify-center items-center rounded">
        <ButtonText className="text-white font-bold">LOGIN</ButtonText>
      </Button>
    </Container>
  );
};

export default LoginScreen;
