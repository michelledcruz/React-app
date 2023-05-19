import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h3>Oops something went wrong....</h3>
            <h4>{err.status +"-"+ err.data}</h4>
        </div>
    );
  };

  export default Error;