import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  transition: 0.5s;

  &:hover {
    background-color: #d9dae0;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p {
    margin: 0;
    padding: 10px 0;
  }
`;
