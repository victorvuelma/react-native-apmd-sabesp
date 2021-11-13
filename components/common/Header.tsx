import styled from "styled-components/native";

export const Header = styled.View`
  align-items: center;
  padding: 32px 16px 40px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.black};
  font-size: 32px;
  text-transform: uppercase;
  margin: 16px 0;
`;

export const HeaderReportTitle = styled.Text`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.black};
  font-size: 24px;
  text-align: center;
`;
