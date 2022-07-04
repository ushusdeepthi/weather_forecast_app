import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  gap: 1rem;
  h1 {
    margin-top: 2rem;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  display: flex;
  width: 90%;
  background: linear-gradient(to bottom right, skyblue, white);
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  margin: 4rem auto;
  padding: 3rem 0;
  border-radius: 10px;
  p {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;
export const MainSection = styled.div`
  margin: 1rem;
`;
export const ButtonBookmark = styled.button`
  /* align-self: flex-start; */
  background: transparent;
  border: none;
`;
export const ButtonDetail = styled.button`
  align-self: center;
  background: transparent;
  border: none;
  margin: 2rem;
`;
export const TableStyled = styled.table`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 3rem;
  @media (max-width: 768px) {
    padding: 0;
  }
  th {
    font-size: 1.2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  tbody tr td {
    text-align: center;
    padding: 10px;
    font-size: 1rem;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 1024px) {
      padding: 0;
    }
  }
`;
