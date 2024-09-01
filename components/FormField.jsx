import { View, Text, TextInput, Image } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import {images, icons} from '../constants'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setshowPassword] = useState(false)
  
    return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 w-full border-black-200 h-16 px-4 rounded-2xl bg-black-100 focus:border-secondary-100 items-center flex-row">
        <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title==='Password' && !showPassword}
        />

        {title=== 'Password' && (
            <TouchableOpacity onPress={()=> setshowPassword(!showPassword)}>
                <Image
                source={!showPassword ? icons.eye : icons.eyehide} className='w-6 h-6'
                resizeMode='contain'
                />

            </TouchableOpacity>
        )}

      </View>
    </View>
  )
}

export default FormField