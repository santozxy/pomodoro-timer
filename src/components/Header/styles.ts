import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-bottom: 3px solid transparent;

      &:hover {
        border-color: ${(props) => props.theme["purple-700"]};
      }

      &.active {
        color: ${(props) => props.theme["purple-600"]};
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;
  }

  span {
    color: ${(props) => props.theme["purple-600"]};
  }
`;
