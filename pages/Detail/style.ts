import { FlatList } from "react-native";

import styled from "styled-components/native";

import { SystemParam } from "../../model/SystemParam";

export const VerticalList = styled(
  FlatList as new () => FlatList<SystemParam>
).attrs({
  horizontal: false,
  showsVerticalScrollIndicator: false,
  nestedScrollEnabled: true,
})`
  background: ${({ theme }) => theme.color.white};
`;

export const ParamCard = styled.View`
  margin: 0px 16px 16px;
  padding: 8px;
  background: ${({ theme }) => theme.color.heading};
  border-radius: 16px;
`;

export const ParamTitle = styled.Text`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary};
`;

export const ParamContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const ParamDetailsToggle = styled.View`
  flex: 1;
  margin: 8px 0;
  min-width: 24px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ParamGroupCard = styled.View`
  padding: 8px;
  background: ${({ theme }) => theme.color.background};
  border-radius: 8px;
  width: ${(props) => (props.active ? "100%" : "49%")};
  margin: 8px 0 0;
`;

export const ParamGroupHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ParamGroupTitle = styled.Text`
  color: ${({ theme }) => theme.color.gray};
  font-size: 16px;
  max-width: 70%;
`;

export const ParamGroupPercent = styled.Text`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
`;

export const ParamGroupDetails = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 4px;
`;

export const ParamGroupDetailItem = styled.View``;

export const ParamGroupDetailTitle = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.light};
  font-size: 14px;
  text-align: center;
`;

export const ParamGroupDetailValue = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.light};
  font-size: 16px;
  text-align: center;
  margin-top: 2px;
`;
