import React from 'react';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from '../../../routes';
import { useNavigation } from "@react-navigation/native";
import Botao from '../../../components/Botao'
import { Fundo, Container, BotaoView } from './style';

const Capa = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    return (
        <Fundo source={require('../../../assets/imagens/amazon1.jpg')}>
            <Container>
                <BotaoView>
                    <Botao textoBotao="Entrar" onPress={() => { navigation.navigate("PreLogin") }} />
                </BotaoView>
            </Container>
        </Fundo>
    )
}
export default Capa