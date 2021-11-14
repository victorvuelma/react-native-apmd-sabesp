import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Header = styled.View`
  align-items: center;
  padding: 32px 16px 40px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.black};
  font-size: 28px;
  text-transform: uppercase;
  margin: 8px 0;
`;

export const HeaderReportTitle = styled.Text`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.black};
  font-size: 22px;
  text-align: center;
`;

export const HeaderButton = styled(RectButton)`
  align-self: flex-end;
  margin-right: 8px;
`;

export const HeaderButtonLabel = styled.Text`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 20px;
`;
