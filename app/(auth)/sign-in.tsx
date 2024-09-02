import { View, Text,Image, ScrollView } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField'
import { createUser } from '../../lib/appwrite'
import { images } from '../../constants'
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setform] = useState({
    email:'',
    password:'',
  })

  const [isSubmiting, setisSubmiting] = useState(false)

  const submit = () =>{
    createUser();
  }

  return ( 
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in Aora</Text>
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e)=> setform({...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"

          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e)=> setform({...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign in"
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmiting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary-100' >Sign Up</Link>


          </View>


 
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default SignIn;