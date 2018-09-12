import React from 'react';
import Spinner from "../../components/UI/Spinner/Spinner";

const Load = ({ loading, children }) => (
    <React.Fragment>
        { loading ? <Spinner /> : children }
    </React.Fragment>
);

export default Load;