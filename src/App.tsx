/*
  Copyright (C) 2020 by USHIN, Inc.

  This file is part of U4U.

  U4U is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  U4U is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with U4U.  If not, see <https://www.gnu.org/licenses/>.
*/
import React, { useState } from "react";

import SemanticScreen from "ushin-ui-components/dist/components/SemanticScreen";

import RightPanel from "./components/RightPanel";
import OpenPanelButton from "./components/OpenPanelButton";
import ClosePanelButton from "./components/ClosePanelButton";
import ParkingSpace from "./components/ParkingSpace";

import usePanel, { PanelState } from "./hooks/usePanel";

import { messages } from "./initialState";
import { MessageI } from "./dataModels";

import styled from "styled-components";

const App = () => {
  const readOnly = false;
  const darkMode = true;

  const author = { name: "KindWoman", color: "#7d3989" };

  const [message, setMessage] = useState<MessageI>(messages[0]);
  const onChangeMessage = (message: MessageI) => {
    setMessage(message);
  };

  const [selectedPointIds, setSelectedPointIds] = useState<string[]>([]);
  const onChangeSelectedPointIds = (selectedPointIds: string[]) => {
    setSelectedPointIds(selectedPointIds);
  };

  const [panelState, panelDispatch] = usePanel();

  return (
    <AppStyles darkMode={darkMode}>
      <SemscreenPanel right={panelState.right} bottom={panelState.bottom}>
        <SemanticScreen
          message={message}
          onChangeMessage={onChangeMessage}
          selectedPointIds={selectedPointIds}
          onChangeSelectedPointIds={onChangeSelectedPointIds}
          readOnly={readOnly}
          darkMode={darkMode}
        />
      </SemscreenPanel>
      {!panelState.right && (
        <OpenPanelButton
          side={"right"}
          onClick={() => {
            panelDispatch({ panel: "right", show: true });
          }}
          darkMode={darkMode}
        />
      )}
      {panelState.right && (
        <RightPanelContainer darkMode={darkMode}>
          <RightPanel author={author} darkMode={darkMode} />
          <ClosePanelButton
            side={"right"}
            onClick={() => panelDispatch({ panel: "right", show: false })}
            darkMode={darkMode}
          />
        </RightPanelContainer>
      )}
      {!panelState.bottom && (
        <OpenPanelButton
          side={"bottom"}
          onClick={() => {
            panelDispatch({ panel: "bottom", show: true });
          }}
          darkMode={darkMode}
        />
      )}
      {panelState.bottom && (
        <BottomPanelContainer darkMode={darkMode}>
          <ParkingSpace />
          <ClosePanelButton
            side={"bottom"}
            onClick={() => panelDispatch({ panel: "bottom", show: false })}
            darkMode={darkMode}
          />
        </BottomPanelContainer>
      )}
    </AppStyles>
  );
};

const AppStyles = styled.div<{ darkMode: boolean }>`
  height: 100%;

  ${(props) =>
    props.darkMode
      ? `
    --thumbBG: #7e7e7e;
    --scrollbarBG: black;
  `
      : `
    --thumbBG: #696969;
    --scrollbarBG: white;
  `}

  *>div {
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    scrollbar-width: thin;
  }
  * > div ::-webkit-scrollbar {
    width: 11px;
  }
  * > div ::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border: 3px solid var(--scrollbarBG);
  }
`;

const SemscreenPanel = styled.div<PanelState>`
  height: ${(props) => (props.bottom ? "calc(100% - 4rem)" : "100%")};
  width: ${(props) => (props.right ? "calc(100% - 16rem)" : "100%")};
`;

interface ContainerProps {
  darkMode: boolean;
}

const RightPanelContainer = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 16rem;
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
`;

const BottomPanelContainer = styled.div<ContainerProps>`
  position: absolute;
  height: 4rem;
  width: 100%;
  background-color: black;
`;

export default App;
