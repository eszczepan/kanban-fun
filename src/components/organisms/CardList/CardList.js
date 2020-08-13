import React from 'react';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 0;
  max-width: 30rem;
`;

const CardList = ({ title, tasks }) => (
  <StyledFlex>
    <CardHeader title={title} tasks={tasks.length} />
    {tasks.map((task) => (
      <Card title={task.title} content={task.content} key={task.id} />
    ))}
  </StyledFlex>
);

export default CardList;