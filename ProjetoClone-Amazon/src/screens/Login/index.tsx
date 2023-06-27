import React, { useState } from 'react';
import InputModal from '../../../components/InputModal';
import { TituloImput, Container, ImputView, TermosAdesao, Main, Header, Footer, TextoPadrao, ViewEnvelope1, ViewEnvelope2, TextInc, Title } from './style';
import { TextoTitulo } from '../PreLogin/style';

const Login = () => {
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()

    return (
        <Container>
            <Header source={require('../../../assets/imagens/amazon3.jpg')}>
            </Header>
            <Title>Bem-vindo(a)</Title>
            <Main>
                <ImputView>
                    <TextoTitulo>Usuário</TextoTitulo>
                    <InputModal
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                </ImputView>
                <ImputView>
                    <TextoTitulo>Senha</TextoTitulo>
                    <InputModal
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </ImputView>
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
            <TextoPadrao>Anúncios Baseados em Interesse</TextoPadrao>
            <TextInc>© 2021-2023 Amazon.com, Inc. ou suas afiliadas</TextInc>
        </Footer>
        </Container >)
}
export default Login