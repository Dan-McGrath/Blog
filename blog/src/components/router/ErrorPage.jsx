import { useRouteError } from "react-router-dom";
import { Wrapper, Title, ErrorText, ErrorWrapper } from "./errorPageStyles";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <Title>Oh no, this page doesn&apos;t exist!</Title>
      <ErrorWrapper className="error-message">
        <ErrorText>{error.statusText || error.message}</ErrorText>
      </ErrorWrapper>
    </Wrapper>
  );
};

export default ErrorPage;
