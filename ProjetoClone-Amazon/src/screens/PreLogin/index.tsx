import React, { useState, useEffect } from 'react';
import { BotaoViewGray, BotaoViewYellow, Container, ButtonText, Btn, TextoPadrao, BotoesViews, TextoTitulo, TextosViews, Imagem, ImagemView } from './style';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from '../../../routes';
import { useNavigation } from "@react-navigation/native";

interface PreLoginComponentsObject {
    id: number;
    texto: string;
    rota: string;
}

const PreLogin = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const [preLoginComponents, setPreLoginComponents] = useState<PreLoginComponentsObject[]>([]);

    useEffect(() => {
        setPreLoginComponents([
            { id: 1, texto: "Já é um cliente? Faça seu login", rota: "Login" },
            { id: 2, texto: "Novo na Amazon? Crie uma conta", rota: "Cadastro" },
            { id: 3, texto: "Pular login", rota: "Capa" }
        ]);
    }, []);

    return (
        <Container>
            <ImagemView>
                <Imagem source={require('../../../assets/imagens/amazon3.jpg')}></Imagem>
            </ImagemView>
            <TextosViews>
                <TextoTitulo>Fazer login na sua conta</TextoTitulo>
                <TextoPadrao>Ver Sua lista de desejos</TextoPadrao>
                <TextoPadrao>Encontrar e ordenar compras anteriores</TextoPadrao>
                <TextoPadrao>Rastreie suas compras</TextoPadrao>
            </TextosViews>
            <BotoesViews>
                {preLoginComponents.map((itemMap) => (
                    itemMap.id === 1 ?
                        <BotaoViewYellow key={itemMap.id}>
                            <Btn onPress={() => navigation.navigate(itemMap.rota)}>
                                <ButtonText>{itemMap.texto}</ButtonText>
                            </Btn>
                        </BotaoViewYellow> : <BotaoViewGray key={itemMap.id}>
                            <Btn onPress={() => navigation.navigate(itemMap.rota)}>
                                <ButtonText>{itemMap.texto}</ButtonText>
                            </Btn>
                        </BotaoViewGray>
                ))}</BotoesViews>
        </Container >
    );
};
export default PreLogin
