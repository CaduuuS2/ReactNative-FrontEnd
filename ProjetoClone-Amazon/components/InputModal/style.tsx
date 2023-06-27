import styled from "styled-components/native"

export const Container = styled.View<{ inputWidthPercent: number }>`
  height: 60%;
  width: 100%;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  border-color: #999999;
  border-width: 1px;
  color: #ffffff;
`;

export const BtnInput = styled.TouchableOpacity<{ inputWidthPercent: number }>`
  height: 100%;
  width: 100%;
`

export const TxtGray = styled.Text`
  color: lightgray;
`

export const TxtInputWhite = styled.TextInput`
  color: #000000;
  font-size: 20px;
`

export const TxtBlack = styled(TxtGray)`
  color: black;
`

export const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(52, 52, 52, 0.8);
  align-items: center;
  justify-content: flex-end;
  
`

export const ViewInputModal = styled.View`
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  height: 12%;
  justify-content: center;
`