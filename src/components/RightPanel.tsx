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
import React from "react";
import styled from "styled-components";
import Banner from "ushin-ui-components/dist/components/Banner";
import MessageList from "./MessageList";
import { AuthorI } from "../dataModels";

const RightPanel = (props: { author: AuthorI; addMessage: () => void; messageList: any; darkMode: boolean }) => (
 <>
  <TopPortion>
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 16 16"
      stroke={props.darkMode ? "white" : "black"}
      strokeWidth="1px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
    <Banner
      text={props.author.name}
      color={props.author.color}
      placement={{ top: "0.5rem", right: "0" }}
      darkMode={props.darkMode}
    />
  </TopPortion>
  <div>
   <button onClick={props.addMessage}>save</button>
   <MessageList messageList={props.messageList} />
  </div>
 </>
);

const TopPortion = styled.div`
  position: relative;
  top: 1rem;
  height: 2rem;
  margin: 0 1rem 0 1rem;
`;

export default RightPanel;
