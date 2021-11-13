import { FlatList } from "react-native";

import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { System } from "../../model/System";

export const ContentTitle = styled.View`
  margin: 8px 16px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const ContentTitleText = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 16px;
  text-align: center;
`;

export const VerticalList = styled(
  FlatList as new () => FlatList<System>
).attrs({
  horizontal: false,
  showsVerticalScrollIndicator: false,
  nestedScrollEnabled: true,
})`
  background: ${({ theme }) => theme.color.white};
`;

export const SystemCard = styled(RectButton)`
  margin: 0 16px 16px;
`;

export const SystemHead = styled.View`
  background-color: ${({ theme }) => theme.color.heading};
  padding: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const SystemTitle = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 24px;
  text-align: center;
`;

export const SystemContent = styled.View`
  padding: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const SystemImage = styled.Image.attrs({})`
  width: 100%;
  height: undefined;
  aspect-ratio: 1.5;
`;
