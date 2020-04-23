import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  order: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;


  display: flex;
  align-items: center;

  & + div {
      margin-top: 8px;
    }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #ff9000;

    &::placeholder {
    color: #666360;
    }
  }

  svg  {
    margin-right: 16px;
  }

  `;
