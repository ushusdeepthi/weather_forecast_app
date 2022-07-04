import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <S.Container>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" />{" "}
        </Link>
      </div>
      <S.Nav>
        <h6>
          {" "}
          <Link to="/">Home</Link>
        </h6>
        <h6>
          {" "}
          <Link to="/bookmark">Bookmarks</Link>
        </h6>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
