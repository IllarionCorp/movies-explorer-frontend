import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <header className={"header " + props.modefi}>
      {props.modefi !== "header_sign" ? (
        <>
          <Link to="/">
            <button type="button" className="header__logo" />
          </Link>
          <nav className={"header__menu"}>{props.children}</nav>
          <button className="header__burger-button" />
          <nav className="header__burger-menu">{props.children}</nav>
        </>
      ) : (
        <>
          <div className="header__sign-block">
            <Link to="/">
              <button
                type="button"
                className="header__logo header__logo_sign"
              />
            </Link>
            <h1 className="header__title">{props.titleText}</h1>
          </div>
        </>
      )}
    </header>
  );
}
