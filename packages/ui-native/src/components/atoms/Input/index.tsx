import React, { forwardRef, LegacyRef, useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import { text as textStyle, input as inputStyle} from './style'

interface InputI {
    /** Determines which keyboard to open */
    keyboardType?: 'email-address' | 'visible-password' | 'default' | 'phone-pad',
    /** Determines how the return key should look. */
    returnKeyType?: 'next' | 'done' | 'send' | 'go' | 'search',
    /** ios only Used for autofill */
    textContentType?: 'emailAddress' | 'givenName' | 'familyName' | 'fullStreetAddress' | 'name' | 'telephoneNumber' | 'username' | 'password' | 'newPassword' | 'none',
    label: string,
    // onBlur: () => void,
    defaultValue?: string,
    onKeyPress?: () => void
    onChangeText?: (value: any) => void;
    name: string;
    secureTextEntry?: boolean;
    value: any
}

export const Input = forwardRef(({value, secureTextEntry, onChangeText, name, label, defaultValue, keyboardType, returnKeyType, textContentType, onKeyPress}: InputI, ref) => {
    const [isFocused, setIsFocused] = useState(false)


    return (
        <View>
            <Text style={[textStyle().base]}>
                {label}
            </Text>
            <TextInput
                placeholder={label}
                ref={ref as LegacyRef<TextInput>}
                style={inputStyle().base}
                defaultValue={defaultValue}
                onEndEditing={(e)=> {
                    e.nativeEvent.text === '' ? setIsFocused(false) : null
                }}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                textContentType={textContentType}
                onFocus={()=> setIsFocused(true)}
                onKeyPress={onKeyPress}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
})