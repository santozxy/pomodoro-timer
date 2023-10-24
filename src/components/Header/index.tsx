import { NavLink } from "react-router-dom";
import { HeaderContainer, Logo } from "./styles";
import logoPomodoro from "../../assets/logoPomodoro.png";
import { Timer } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logoPomodoro} alt="" />
        <h1>
          Pomodoro <span>Timer</span>
        </h1>
      </Logo>
      <nav>
        <NavLink to={"/"} title="Cronômetro">
          <Timer size={30} />
        </NavLink>
        <NavLink to={"/history"} title="Histórico">
          <Timer size={30} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
