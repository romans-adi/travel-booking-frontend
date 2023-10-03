/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import * as ReactRouterDom from 'react-router-dom';

ReactRouterDom.Link = ({ to, children }) => <a href={to}>{children}</a>;

export default ReactRouterDom;
