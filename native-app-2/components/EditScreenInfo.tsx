import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

NfcManager.start();

function App() {
  const [val, set] = useState('')
  // useEffect(() => {
  //   NfcManager.start();
  //   return () => {
  //     NfcManager.cancelTechnologyRequest().catch(() => 0);
  //     NfcManager.stop();
  //   };
  // }, []);

  async function readNdef() {

    set("Start reading")
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      const text = Ndef.util.bytesToString(tag?.ndefMessage[0].payload);
      set(text);
    } catch (ex) {
      set(ex + 'error');
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  async function writeNdef() {
    let result = false;
    set("Start writing")
    try {
      // STEP 1
      await NfcManager.requestTechnology(NfcTech.Ndef);
  
      const bytes = Ndef.encodeMessage([Ndef.textRecord('Hello NFC')]);
  
      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        result = true;
      }
    } catch (ex) {
      set(ex + 'error');
    } finally {
      // STEP 4
      NfcManager.cancelTechnologyRequest();
      set("End writing")
    }

  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={readNdef}>
        <Text>Read NFC Tag</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={writeNdef}>
        <Text>Write NFC Tag</Text>
      </TouchableOpacity>
      <Text>{val}</Text>
    </View>
  );
}

export default App;
