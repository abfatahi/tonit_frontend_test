import styled from 'styled-components';

export default styled.div`
  // width: 100%;

  p {
    margin-bottom: 2rem !important;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TransferContainer = styled.form`
  width: 50%;
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  // gap: 1.2rem;

  @media screen and (max-width:1024px){
    width:60%;
  }

  @media screen and (max-width:768px){
    width:100%;
  }

  h3 {
    font-weight: bold;
  }

  p {
    font-size:0.8em;
    margin: 0 !important;
    padding: 0 !important;
  }
.group{
  display:flex;
  gap: 1rem;
}
  .input__group {
    // width: 50px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
