import styled from 'styled-components';


const OuterContainer = styled.div`
    background-color:#1E90FF;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
`;

const InnerContainer = styled.div`
    background-color: white;
    width: 50%;
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    padding: 70px 30px 0 30px;
    border-radius: 20px;
`;

const Header = styled.h1`
    text-align: center;
`;

const FormWrapper = styled.div`
    margin-top: 30px;
`;

const BtnWrapper = styled.div`
    margin-top: 50px;
`;

const ErrorWrapper = styled.div`
    color: red;
`;

export const Styled = {
    OuterContainer,
    InnerContainer,
    Header,
    FormWrapper,
    BtnWrapper,
    ErrorWrapper
};
