import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  background-color: #fff;
  transition: 0.5s;

  &:hover {
    background-color: #d9dae0;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
