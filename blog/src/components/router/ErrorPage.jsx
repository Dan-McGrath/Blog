import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oh no, this page doesn&apos;t exist!</h1>
      <div className="error-message">
        <p>{error.statusText || error.message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
