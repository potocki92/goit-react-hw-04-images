import styled from 'styled-components';
export const SearchbarContainer = styled.form`
  z-index: 1;
  width: 100%;
  background-color: #4053b8;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  display: flex;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 20px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  padding: 5px 5px 5px 15px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 0 5px 5px 0;
`;

export const SearchIcon = styled.img`
  width: 100%;
  height: 100%;
`;
