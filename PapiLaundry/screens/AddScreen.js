import { useState, useEffect } from 'react';
import * as React from 'react';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { Image, View, Text, Pressable, KeyboardAvoidingView, StyleSheet } from 'react-native';
import placeholderImage from '../assets/pngegg.png';
import { useMutation, gql } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

const ADD_POST = gql`
mutation CreatePost($formPost: CreatePostInput) {
    createPost(formPost: $formPost) {
        content
        tags
        imgUrl
    }
  }`


const AddPost = () => {
    const navigate = useNavigation()
    console.log(navigate);
  const [isValidHttpUrl, setIsValidHttpUrl] = useState(false);
  const theme = useTheme();
  const [input, setInput] = useState({
    content: '',
    tags: '',
    imgUrl: ''
  })
  const [addPost, {data, error, loading}] = useMutation(ADD_POST)
  
  useEffect(() => {
    // Check if the image state is a valid HTTP URL using a simple regular expression
    const isHttpUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(input.imgUrl);
    
    // Handle initial render or changes to the image state
    if (isHttpUrl !== isValidHttpUrl) {
      setIsValidHttpUrl(isHttpUrl);
    }
  }, [input.imgUrl, isValidHttpUrl]); // Re-run the effect when the image state or isValidHttpUrl changes
  
  const handleChange = (name, text) => {
    setInput({
      ...input,
      [name]: text,
    });
  };
  
  
  const handlePost = async () => {
    try {
    //   console.log(input)
      await addPost({
        variables:
          {
            "formPost": {
                "authorId": "6565c52f9e4ed10499058482",
                "content": input.content,
                "imgUrl": input.imgUrl,
                "tags": input.tags
            }
          }
      })
      navigate.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <View style={styles.container}>
        {isValidHttpUrl && (
          <Image
            source={{ uri: input.imgUrl }}
            style={{ height: 350, width: 350, marginBottom: 20 }}
          />
        )}
        <TextInput
        theme={{ colors: { primary: 'blue' } }}
        mode="outlined"
        style={{ width: 350, backgroundColor: 'white' }}
        label="Image"
        value={(input.imgUrl)}  
        onChangeText={text => handleChange("imgUrl", text)}
        />

        <TextInput
          theme={{ colors: { primary: 'blue' } }}
          mode="outlined"
          style={{ width: 350, backgroundColor: 'white' }}
          label="Tags"
          value={input.tags}
          onChangeText={text => handleChange("tags", text)}
        />

        <TextInput
          theme={{ colors: { primary: 'blue' } }}
          mode="outlined"
          style={{ width: 350, backgroundColor: 'white' }}
          label="Content"
          value={input.content}
          onChangeText={text => handleChange("content", text)}
        />

        <Button mode="contained" style={{ marginTop: 30, backgroundColor: 'blue' }} onPress={handlePost}>
          AddPost
        </Button>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddPost;
