import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      {/* <div className="logo-cont">
        <p className="logo">
          <span className="logo-one">Sree</span>
          <span className="logo-two">mikiL</span>
          <span className="logo-three">t</span>
        </p>
      </div>
      <div className="navbar-list-cont">
        <ul className="navbar-links-cont">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Portfolio</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
      <div className="social-list-cont">
        <ul className="social-buttons-cont">
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.669 18.268C17.0201 18.2761 16.3755 18.1617 15.769 17.931C15.2256 17.7197 14.7346 17.3928 14.33 16.973C13.9314 16.544 13.6236 16.0389 13.425 15.488C13.2069 14.8786 13.0989 14.2352 13.106 13.588C13.1014 12.9519 13.2125 12.3203 13.434 11.724C13.6405 11.168 13.9583 10.6599 14.368 10.231C14.7788 9.80741 15.2696 9.46955 15.812 9.23701C16.3995 8.98849 17.0322 8.86488 17.67 8.87401C18.3555 8.85936 19.0343 9.0103 19.649 9.31401C20.1977 9.59543 20.6735 10.0004 21.039 10.497C21.4077 11.0043 21.6737 11.5787 21.822 12.188C21.9838 12.8357 22.0416 13.5051 21.993 14.171H15.562C15.5364 14.8035 15.7532 15.4219 16.168 15.9C16.6038 16.2823 17.1736 16.4758 17.752 16.438C18.2063 16.4486 18.6527 16.3183 19.03 16.065C19.3295 15.8822 19.5594 15.6044 19.683 15.276H21.838C21.5938 16.2047 21.0319 17.0185 20.25 17.576C19.4761 18.0547 18.5786 18.2953 17.669 18.268ZM17.6 10.724C17.264 10.7114 16.9299 10.78 16.626 10.924C16.3884 11.0438 16.1775 11.2105 16.006 11.414C15.8551 11.5989 15.7435 11.8126 15.678 12.042C15.6203 12.2332 15.583 12.43 15.567 12.629H19.549C19.5203 12.1104 19.3226 11.6156 18.986 11.22C18.6135 10.8684 18.111 10.6885 17.6 10.724ZM7.97 18.036H2V5.73101H7.8C8.3373 5.7263 8.8736 5.77826 9.4 5.88601C9.84587 5.97305 10.2707 6.14556 10.651 6.39401C10.9945 6.63244 11.2702 6.956 11.451 7.33301C11.6507 7.78714 11.7463 8.28015 11.731 8.77601C11.7527 9.32461 11.6073 9.86686 11.314 10.331C10.9931 10.7741 10.5594 11.1232 10.058 11.342C10.7393 11.5123 11.3382 11.9187 11.748 12.489C12.1287 13.0758 12.3213 13.7648 12.3 14.464C12.3145 15.0232 12.1916 15.5774 11.942 16.078C11.7117 16.522 11.3776 16.9038 10.968 17.191C10.5434 17.4864 10.0692 17.7032 9.568 17.831C9.04477 17.9684 8.50598 18.0377 7.965 18.037L7.97 18.036ZM4.71 12.553V15.943H7.6C7.85541 15.9458 8.11033 15.9199 8.36 15.866C8.58857 15.8219 8.80611 15.7328 9 15.604C9.18672 15.4812 9.33834 15.312 9.44 15.113C9.5579 14.8634 9.61349 14.5888 9.602 14.313C9.65047 13.8011 9.45215 13.2968 9.068 12.955C8.65353 12.6697 8.15651 12.5291 7.654 12.555L4.71 12.553ZM4.71 7.82801V10.703H7.452C7.87616 10.7197 8.29433 10.5987 8.644 10.358C8.97362 10.0843 9.14719 9.66568 9.108 9.23901C9.11645 8.99409 9.06423 8.75088 8.956 8.53101C8.85824 8.35327 8.71413 8.20535 8.539 8.10301C8.35458 7.99364 8.15091 7.92066 7.939 7.88801C7.70824 7.84474 7.47377 7.82431 7.239 7.82701L4.71 7.82801ZM20.051 7.77201H15.061V6.55701H20.051V7.77101V7.77201Z"
                fill="#120055"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"
                fill="#120055"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.002 21.041C9.54195 21.041 9.25195 21.028 8.29195 20.986C7.54332 20.9614 6.80439 20.8092 6.10695 20.536C4.90026 20.0664 3.94609 19.1119 3.47695 17.905C3.21426 17.205 3.07257 16.4655 3.05795 15.718C3.00195 14.76 3.00195 14.446 3.00195 12.005C3.00195 9.538 3.01495 9.25 3.05795 8.295C3.07289 7.54853 3.21457 6.81001 3.47695 6.111C3.94558 4.90253 4.9013 3.94718 6.10995 3.479C6.8086 3.21521 7.5473 3.07315 8.29395 3.059C9.24895 3.005 9.56295 3.005 12.002 3.005C14.482 3.005 14.767 3.018 15.712 3.059C16.4605 3.07327 17.2012 3.21531 17.902 3.479C19.1103 3.94771 20.0658 4.90288 20.535 6.111C20.8021 6.8202 20.9445 7.57026 20.956 8.328C21.012 9.286 21.012 9.59901 21.012 12.039C21.012 14.479 20.998 14.799 20.956 15.746C20.9411 16.4942 20.799 17.2344 20.536 17.935C20.0656 19.1427 19.11 20.0976 17.902 20.567C17.2022 20.8292 16.4631 20.9709 15.716 20.986C14.761 21.041 14.448 21.041 12.002 21.041ZM11.968 4.588C9.52195 4.588 9.26795 4.6 8.31295 4.643C7.74294 4.65056 7.17843 4.75575 6.64395 4.954C5.85471 5.25601 5.23018 5.878 4.92495 6.666C4.72517 7.2063 4.61996 7.77698 4.61395 8.353C4.56095 9.322 4.56095 9.576 4.56095 12.005C4.56095 14.405 4.56995 14.696 4.61395 15.659C4.62291 16.2292 4.72805 16.7938 4.92495 17.329C5.23063 18.1165 5.85505 18.738 6.64395 19.04C7.17807 19.2396 7.7428 19.3448 8.31295 19.351C9.28095 19.407 9.53595 19.407 11.968 19.407C14.421 19.407 14.675 19.395 15.622 19.351C16.1924 19.3441 16.7573 19.2389 17.292 19.04C18.0764 18.7354 18.6969 18.1153 19.002 17.331C19.2014 16.7903 19.3065 16.2193 19.313 15.643H19.324C19.367 14.687 19.367 14.432 19.367 11.989C19.367 9.54601 19.356 9.289 19.313 8.334C19.304 7.76446 19.1988 7.20052 19.002 6.666C18.6976 5.88058 18.077 5.2593 17.292 4.954C16.7574 4.75475 16.1924 4.64953 15.622 4.643C14.655 4.588 14.402 4.588 11.968 4.588ZM12.002 16.624C10.1319 16.6252 8.44537 15.4997 7.72882 13.7725C7.01226 12.0452 7.40686 10.0563 8.72858 8.73347C10.0503 7.4106 12.0388 7.01428 13.7667 7.72934C15.4946 8.4444 16.6215 10.13 16.622 12C16.6192 14.5511 14.553 16.619 12.002 16.624ZM12.002 8.998C10.3451 8.998 9.00195 10.3412 9.00195 11.998C9.00195 13.6549 10.3451 14.998 12.002 14.998C13.6588 14.998 15.002 13.6549 15.002 11.998C14.9981 10.3427 13.6572 9.00185 12.002 8.998ZM16.802 8.28501C16.2074 8.2828 15.7269 7.79959 15.728 7.20501C15.7291 6.61043 16.2114 6.12901 16.806 6.12901C17.4005 6.12901 17.8828 6.61042 17.884 7.205C17.8842 7.49187 17.7702 7.76703 17.5672 7.96968C17.3642 8.17234 17.0888 8.2858 16.802 8.28501Z"
                fill="#120055"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"
                fill="#120055"
              ></path>
            </svg>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Header;
