import React from 'react';

import './team.scss';

import InfoBlock from '../general/info-block';

const Team = () => {
  const contents = [
    {
      url: '/',
      name: 'Name1',
      position: 'Superhero'
    },
    {
      url: '/',
      name: 'Name2',
      position: 'Superhero'
    },
    {
      url: '/',
      name: 'Name3',
      position: 'Superhero'
    }
  ];

  const elements = contents.map((item) => {
    const { url, name, position } = item;

    return(
      <div className="team__item" key={ name }>
        <img src={ url } alt={ name } />
        <b>{ name }</b>
        <span>{ position }</span>
      </div>
    )
  });

  return(
    <section className="team" id="team">
      <InfoBlock>
        <InfoBlock.Title>
          Superheros
          </InfoBlock.Title>
        <InfoBlock.Content>
          {elements}
        </InfoBlock.Content>
      </InfoBlock>
    </section>
  );
};

export default Team;