import React from 'react';

import Frame from '../Frame';

import { Container, Panel } from './styles';

const data = [
  {
    title:"Personal",
    items:[
      { name:"Home" },
      { name:"Recent" },
      { name:"Documentos" },
      { name:"Music" },
      { name:"Videos" },
      { name:"Downloads" },
      { name:"Pictures" },
      { name:"Trash" }
    ]
  },
  {
    title:"Devices",
    items:[
      { name:"File System" },
      { name:"Rawhide" },
      { name:"64 GB Volume" },
      { name:"84 GB Volume" },
      { name:"WD Element" }
    ]
  },
  {
    title:"Network",
    items:[

    ]
  }
]

export default function Aside() {
  return (
    <Container>
      <Panel>
        {data.map((frame, index) => {
          return <Frame
            title={frame.title}
            items={frame.items}
          />
        })}
      </Panel>
    </Container>
  );
}
