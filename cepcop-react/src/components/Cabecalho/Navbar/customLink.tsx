import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./styledComponents";

function CustomLink(props: { to: string; children: React.ReactNode }) {
    return (
        <Link
            to={props.to}
            style={{
                textDecoration: "none",
            }}
        >
            <NavLink>{props.children}</NavLink>
        </Link>
    );
}

export default CustomLink;
