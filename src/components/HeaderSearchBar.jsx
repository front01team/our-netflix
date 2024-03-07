import React, { useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const SearchingTool = styled.div`
  padding: 0 10px 0 10px;
`;

const StyledIoSearch = styled(IoSearch)`
  vertical-align: middle;
  display: inline-block;
`;

const HeaderSearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <SearchingTool>
      <StyledIoSearch onClick={handleSearchIconClick} />
      {isSearchOpen && <input type="text" placeholder="제목, 사람, 장르" />}
    </SearchingTool>
  );
};

export default HeaderSearchBar;
