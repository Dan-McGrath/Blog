import Nav from "./Nav";
import { HeaderWrapper, ImgWrapper, Img, NavWrapper } from "./headerStyles";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <ImgWrapper className="logo">
          <Img src="" alt="logo" />
        </ImgWrapper>
        <NavWrapper>
          <Nav />
        </NavWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
