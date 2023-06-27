import React from 'react';
import { Container, Btn, ButtonText } from './style';

interface BotaoProps {
    textoBotao: string;
    onPress: () => void;
}

const Botao: React.FC<BotaoProps> = ({ textoBotao, onPress }) => {

    return (
        <Container>
            <Btn onPress={onPress}>
                <ButtonText>{textoBotao}</ButtonText>
            </Btn>
        </Container>
    )
}
export default Botao;

