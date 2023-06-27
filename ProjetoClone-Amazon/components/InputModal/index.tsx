import React, { Dispatch, SetStateAction, useState } from 'react';
import { KeyboardTypeOptions, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, TxtBlack, TxtGray, ViewInputModal, ModalBackground, TxtInputWhite, BtnInput } from './style';

type Types = {
    value: string;
    placeholder: string;
    onChangeText?: Dispatch<SetStateAction<string>>;
    keyboardType: KeyboardTypeOptions | undefined;
    inputWidth: number;
}

const InputModal = (props: Types) => {

    const [modalVisibility, setModalVisibility] = useState(false)
    const inputRef: React.RefObject<TextInput> = React.createRef()

    function setFocus() {
        setTimeout(() => inputRef.current?.focus(), 50)
    }

    return (
        <Container inputWidthPercent={props.inputWidth}>
            <BtnInput
                inputWidthPercent={props.inputWidth}                
                activeOpacity={1}
                onPress={() => setModalVisibility(true)}>
                {props.value === ''
                    ? (<TxtGray>{props.placeholder}</TxtGray>)
                    : (<TxtBlack>{props.value}</TxtBlack>)
                }
                <Modal
                    visible={modalVisibility}
                    transparent={true}
                    animationType="slide"
                    onShow={setFocus}>
                    <ModalBackground
                        onPressIn={() => setModalVisibility(false)}>
                        <ViewInputModal>
                            <View>
                                <TxtInputWhite
                                    {...props}
                                    placeholderTextColor={'#6d6d6d'}
                                    onSubmitEditing={() => setModalVisibility(false)}
                                    onBlur={() => setModalVisibility(false)}
                                    ref={inputRef} />
                            </View>
                        </ViewInputModal>
                    </ModalBackground>
                </Modal>
            </BtnInput>

        </Container>
    )
}
export default InputModal;
