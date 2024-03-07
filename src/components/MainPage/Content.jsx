import { useState } from "react";
import "./content.css";
import { IoIosPlay } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";

function Content({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://www.youtube.com/embed/6zbsUtQL4nY?si=3sqBombrm6EwbCCA";
  return (
    <div
      className="content-Item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcoi3SLZPSmZrKpjAbbddOGnwzAQtK4pA5dI6dCMKDRFfUMKTw3ZxNz4kE4BcfKQRfgBvNJRpBCWcr9nEMZb0yBA-YMo6q5pkD0ojDH2mXvdvu1hbqOMGudfOjejEHzfY8KBwcwukgnLZt52V5MAeVoDHHoxanxsmfXxCW1HtnH74Fhh4ZZnnhB5cBHaKy48G3_hUrKH0boEyZvIuJVxbuY7l8x7EDoOBAa5S0H1w7S5nC7qND1u_Z2mPeAmwvR3El-kPGJPs-_vPOKsBrhlddDShr1_vArhYED9wGkia-PCAb6IOYhtahlYQLR8SYH3BVqyWn0zdRHWuqUrKazjzkdE21IlpDqH5JnOfquxGQD87c9DAyhNQ7pS219eiHiJf5wzFbS3cOdESkwy9ZIlVAkYAzesSl0ET8kMBkonD7f4Xdx8KjjUExPTcfJvGfNDq5j-nRZHClF5N1zB2nS2BqwAkn4Wrt9mLHFv6ecqMzmZJXPyKuDtnd7i7p9Z0lifyF0.webp?r=d0c"
        alt=""
      />
      {isHovered && (
        <>
          <iframe src={trailer} autoPlay={true} loop muted />
          <div className="item-info">
            <div className="icons">
              <IoIosPlay className="icon" />
              <IoAddOutline className="icon" />
              <AiOutlineLike className="icon" />
              <div style={{ flexGrow: 1 }}></div>
              <SlArrowDown className="icon" />
            </div>
            <div className="item-info-top">
              <span>2시간 19분</span>
              <span className="limit">+15</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              nostrum.
            </div>
            <div className="genre">액션</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Content;
