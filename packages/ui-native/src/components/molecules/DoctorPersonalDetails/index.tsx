import React, { useState } from "react";
import { Container } from "../../atoms/Container";
import { ScrollView } from "react-native";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";

interface DoctorPersonalDetailViewsI {
    doctor: DoctorDetailsI;
    onSave: (patient: DoctorDetailsI) => void
}

export const DoctorPersonalDetailViews = ({doctor, onSave}: DoctorPersonalDetailViewsI) => {
    const [data, setData] = useState<DoctorDetailsI>(doctor);

    const handleInputBlur = ({value, name}: {value: string, name: string}) => {
        setData((prevData) => ({ ...prevData, [name]: value }));
      };
    return (
        <Container>
            <ScrollView style={{marginBottom: 100}}>
                <Input value={data.name} label="Name" keyboardType="default" name="name"  returnKeyType="next" defaultValue={data.name} onChangeText={(value)=>handleInputBlur({value, name: "name"})}/>
                <Input value={data.surname} label="Surname" keyboardType="default" name="surname"  returnKeyType="next" defaultValue={data.surname} onChangeText={(value)=>handleInputBlur({value, name: "surname"})}/>
                <Input value={data.doctor_number} label="Doctor id" keyboardType="default" name="doctor_number"  returnKeyType="next" defaultValue={data.doctor_number} onChangeText={(value)=>handleInputBlur({value, name: "doctor_number"})}/>
                <Input value={data.id} label="ID" keyboardType="default" name="id"  returnKeyType="next" defaultValue={data.id} onChangeText={(value)=>handleInputBlur({value, name: "id"})}/>
                <Input value={data.email} label="Email" keyboardType="email-address" name="email"  returnKeyType="next" defaultValue={data.email} onChangeText={(value)=>handleInputBlur({value, name: "email"})}/>
                <Input value={data.mobile} label="Mobile" keyboardType="phone-pad"  name="mobile"  returnKeyType="next" defaultValue={data.mobile} onChangeText={(value)=>handleInputBlur({value, name: "mobile"})}/>
                <Input value={data.address} label="Address" name="address"  returnKeyType="next" defaultValue={data.address} onChangeText={(value)=>handleInputBlur({value, name: "address"})}/>
                <Input value={data.address_2} label="Address 2" name="address_2"  returnKeyType="next" defaultValue={data.address_2} onChangeText={(value)=>handleInputBlur({value, name: "address_2"})}/>
                <Input value={data.postcode} label="Postcode" name="postcode" returnKeyType="done" defaultValue={data.postcode} onChangeText={(value)=>handleInputBlur({value, name: "postcode"})}/>            
                <Button label="Save" onPress={() => onSave(data)} /> 
            </ScrollView>
        </Container>
    )
}