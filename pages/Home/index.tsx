import React, { useEffect, useState, useCallback } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";

import { System } from "../../model/System";
import { HeaderAsset } from "../../components/assets/Header";
import { SabespAsset } from "../../components/assets/Sabesp";
import {
  HeaderTitle,
  Header,
  HeaderReportTitle,
} from "../../components/common/Header";

import {
  ContentTitle,
  ContentTitleText,
  SystemCard,
  SystemContent,
  SystemHead,
  SystemImage,
  SystemTitle,
  VerticalList,
} from "./style";

interface NavigationProps {
  navigation: NativeStackNavigationProp<any>;
}

export default function Home({ navigation }: NavigationProps) {
  const [systems, setSystems] = useState<Array<System>>([]);

  useEffect(() => {
    async function load() {
      const response = await axios.get<Array<System>>(
        "https://json-server-apmd-sabesp.herokuapp.com/systems"
      );
      setSystems(response.data);
    }
    load();
  }, []);

  const renderSystem = useCallback(
    ({ item }) => (
      <SystemCard onPress={() => handleDetail(item)}>
        <SystemHead>
          <SystemTitle>{item.name}</SystemTitle>
        </SystemHead>

        <SystemContent>
          <SystemImage source={{ uri: item.imageUrl }} />
        </SystemContent>
      </SystemCard>
    ),
    []
  );

  function handleDetail(system: System) {
    navigation.navigate("Detail", { system });
  }

  return (
    <VerticalList
      data={systems}
      keyExtractor={(item) => String(item.name)}
      renderItem={renderSystem}
      ListHeaderComponent={HomeHeader()}
    ></VerticalList>
  );
}

function HomeHeader() {
  return (
    <>
      <Header>
        <HeaderAsset
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <SabespAsset></SabespAsset>
        <HeaderTitle>São Paulo</HeaderTitle>
        <HeaderReportTitle>
          Qualidade da Água Distribuída por Sistema de Abastecimento
        </HeaderReportTitle>
      </Header>

      <ContentTitle>
        <ContentTitleText>
          Selecione um dos sistema de abastecimento para visualizar mais
          detalhes:
        </ContentTitleText>
      </ContentTitle>
    </>
  );
}
