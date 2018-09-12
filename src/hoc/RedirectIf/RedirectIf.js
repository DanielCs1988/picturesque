import React from 'react';
import { Redirect } from "react-router-dom";

const RedirectIf = ({ shouldRedirect, to, children }) => (
    <React.Fragment>{
        shouldRedirect ?
            <Redirect to={to} /> :
            children
    }</React.Fragment>
);

export default RedirectIf;