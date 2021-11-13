import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";
import dayjs from "dayjs";
import { useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { System } from "../../model/System";
import { SystemParam } from "../../model/SystemParam";
import {
  Header,
  HeaderReportTitle,
  HeaderTitle,
} from "../../components/common/Header";
import { HeaderAsset } from "../../components/assets/Header";
import { SabespAsset } from "../../components/assets/Sabesp";

import {
  ParamCard,
  ParamContent,
  ParamDetailsToggle,
  ParamGroupCard,
  ParamGroupDetailItem,
  ParamGroupDetails,
  ParamGroupDetailTitle,
  ParamGroupDetailValue,
  ParamGroupHead,
  ParamGroupPercent,
  ParamGroupTitle,
  ParamTitle,
  VerticalList,
} from "./style";
import { PlusAsset } from "../../components/assets/Plus";
import { MinusAsset } from "../../components/assets/Minus";

interface NavigationProps {
  navigation: NativeStackNavigationProp<any>;
}

export function Detail({ navigation }: NavigationProps) {
  const route = useRoute();

  const system: System = route.params!["system"];
  const [params, setParams] = useState<Array<SystemParam>>([]);

  useEffect(() => {
    async function load() {
      const response = await axios.get<Array<SystemParam>>(
        "https://json-server-apmd-sabesp.herokuapp.com/params",
        { params: { sistema: system.name.toUpperCase() } }
      );
      setParams(response.data);
    }
    load();
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  const renderSystem = useCallback(
    ({ item }) => <ParamsView param={item} />,
    []
  );

  return (
    <VerticalList
      data={params}
      keyExtractor={(item) => String(item.data)}
      renderItem={renderSystem}
      ListHeaderComponent={
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
            <HeaderTitle>{system.name}</HeaderTitle>
            <HeaderReportTitle>
              Qualidade da Água Distribuída por Sistema de Abastecimento
            </HeaderReportTitle>
          </Header>
        </>
      }
    ></VerticalList>
  );
}

export function ParamsView({ param }: { param: SystemParam }) {
  const month = dayjs(param.data).format("MMMM");

  const [viewDetails, setViewDetails] = useState(false);

  return (
    <ParamCard>
      <ParamTitle>{month}</ParamTitle>

      <ParamContent>
        <ParamGroup
          param={param}
          paramTitle="Turbidez"
          paramName="turbidez"
          viewDetails={viewDetails}
        />
        <ParamGroup
          param={param}
          paramTitle="Cor Aparente"
          paramName="corAparente"
          viewDetails={viewDetails}
        />
        <ParamGroup
          param={param}
          paramTitle="Cloro"
          paramName="crl"
          viewDetails={viewDetails}
        />
        <ParamGroup
          param={param}
          paramTitle="E. Coli"
          paramName="eColi"
          viewDetails={viewDetails}
        />
        <ParamGroup
          param={param}
          paramTitle="Coliforme Total"
          paramName="coliforme"
          viewDetails={viewDetails}
        />

        <ParamDetailsToggle>
          {viewDetails ? (
            <MinusAsset onPress={() => setViewDetails(false)}></MinusAsset>
          ) : (
            <PlusAsset onPress={() => setViewDetails(true)}></PlusAsset>
          )}
        </ParamDetailsToggle>
      </ParamContent>
    </ParamCard>
  );
}

export function ParamGroup({
  param,
  paramName,
  paramTitle,
  viewDetails,
}: {
  param: SystemParam;
  paramName: "turbidez" | "corAparente" | "crl" | "coliforme" | "eColi";
  paramTitle: string;
  viewDetails: boolean;
}) {
  const required: number = param[`${paramName}Exigido`];
  const realized: number = param[`${paramName}Realizado`];
  const positive: number = param[`${paramName}Conforme`];

  const percent = (positive / realized).toLocaleString("pt-br", {
    style: "percent",
  });

  return (
    <ParamGroupCard>
      <ParamGroupHead>
        <ParamGroupTitle>{paramTitle}</ParamGroupTitle>
        <ParamGroupPercent>{percent}</ParamGroupPercent>
      </ParamGroupHead>

      {viewDetails && (
        <ParamGroupDetails>
          <ParamGroupDetailItem>
            <ParamGroupDetailTitle>Exigidos</ParamGroupDetailTitle>
            <ParamGroupDetailValue>{required}</ParamGroupDetailValue>
          </ParamGroupDetailItem>
          <ParamGroupDetailItem>
            <ParamGroupDetailTitle>Realizados</ParamGroupDetailTitle>
            <ParamGroupDetailValue>{realized}</ParamGroupDetailValue>
          </ParamGroupDetailItem>
          <ParamGroupDetailItem>
            <ParamGroupDetailTitle>Conforme</ParamGroupDetailTitle>
            <ParamGroupDetailValue>{positive}</ParamGroupDetailValue>
          </ParamGroupDetailItem>
        </ParamGroupDetails>
      )}
    </ParamGroupCard>
  );
}
