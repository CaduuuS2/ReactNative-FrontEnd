import React, { useState } from 'react';
import InputModal from '../../../components/InputModal';
import { TituloImput, Container, Logo, ImputView, TermosAdesao, Main, Header, Footer, TextoPadrao, ViewEnvelope1, ViewEnvelope2, ViewEnvelope3, TextInc, Title, BotaoViewYellow, Btn, ButtonText, Subtitulo } from './style';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from '../../../routes';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()

    return (
        <Container>
            <Header>
            <Logo source={require('../../../assets/imagens/amazon3.jpg')}/>
            <Title>Bem-vindo(a)</Title>
            <Subtitulo>LOGIN. Já é cliente?</Subtitulo>
            </Header>
            <Main>
                <ImputView>
                    <TituloImput>E-mail ou número de telefone</TituloImput>
                    <InputModal
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                </ImputView>
                <ImputView>
                    <TituloImput>Senha amazon</TituloImput>
                    <InputModal
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </ImputView>
                <BotaoViewYellow>
                            <Btn onPress={() => navigation.navigate('Capa')}>
                                <ButtonText>{'Continuar'}</ButtonText>
                            </Btn>
                </BotaoViewYellow>
                <TermosAdesao>Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor
                    verifique a Notificação de Privacidade, Notificações de Cookies e a Notificação de
                    Anúncios Baseados em Interesse.
                </TermosAdesao>
                <TermosAdesao>Precisa de ajuda?</TermosAdesao>
            </Main>
            <Footer>
                <ViewEnvelope2>
                <ViewEnvelope1>
                    <TextoPadrao>
                        Condições de Uso
                    </TextoPadrao>
                    <TextoPadrao>
                        Ajuda
                    </TextoPadrao>
                </ViewEnvelope1>
                <ViewEnvelope1>
                    <TextoPadrao>
                        Política de Privacidade
                    </TextoPadrao>
                    <TextoPadrao>
                        Cookies
                    </TextoPadrao>
                </ViewEnvelope1>
            </ViewEnvelope2>
            <ViewEnvelope3>
            <TextoPadrao>Anúncios Baseados em Interesse</TextoPadrao>
            <TextInc>© 2021-2023 Amazon.com, Inc. ou suas afiliadas</TextInc>
            </ViewEnvelope3>
        </Footer>
        </Container >)
}
export default Login