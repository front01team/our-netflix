import { useState } from "react";
import "./TopContent.css";

function App({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="category-list">
        <div className="top-category>">
          <div className="category-title">오늘 대한민국의 TOP 10 시리즈</div>
          <div className="top-content-list">
            <div className="top-content">
              <svg
                id="rank-1"
                width="100%"
                height="100%"
                viewBox="-20 0 51 154"
                className="svg-icon svg-icon-rank-1 top-10-rank"
              >
                <path
                  stroke="#595959"
                  strokeLinejoin="square"
                  strokeWidth="4"
                  d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"
                ></path>
              </svg>
              <img
                src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABS5pVVybsnYFjGCMdqMsiB4UmUKTK2sDCDfno3ot46Bkc1nIchmPYVL-4BN4IKqyaTplzJTniWKoBdvW3kD4ywbejiCzQxOU9u6_wK9FPHTD8CP4hpsnG27z-olqW1jBS7J0IiKGGJMyPdG_lQEIp1U9TT4Cg9u9u6YPPKH-3DO6XqZoYlnuoCWH_c1UCe0EGoykka5uHDYjkufMuY6IDz3Pt5NCo-b6YnIt3o_JOTI0ejTUT8QkEL7ZeRXSvHfiOhr_puRESIA7TcQYpTaprkXraVGUZXSZlhu94NgGJDWXLG2PnddCh7HhZu0d6jqYHR1YCI2P--D-aXsSHFrBJKsW2vxD4PSwVOE8nkCQSfUzahiL6Esv5B_s-W1UhJ7ilsmp2QIAhvZO1sSFsaI2XQEwx9ssv_E2G-VXRE5XPnOvLSt6kkm6QQ_VAa8fZWyRdc1HAA2Hdg.webp?r=02f"
                alt="컨텐츠 이미지"
              />
            </div>
            <div className="top-content">
              <svg
                id="rank-2"
                width="100%"
                height="100%"
                viewBox="0 0 52 154"
                className="svg-icon svg-icon-rank-2 top-10-rank"
              >
                <path
                  stroke="#595959"
                  strokeLinejoin="square"
                  strokeWidth="4"
                  d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"
                ></path>
              </svg>
              <img
                src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVpLFuJ9tvnOdFcD__B2BOZvOqiBKEOXmMuN15hv-FTANabpoHElEYGovUBdbLjP5wCGwtmjq2ou0iMWAQxeeTBnVSmkAMobj7yBsBd_0zlKshrNon5ybDbzkesUePeHBRy_KEJOEN2ESY8BupDuv3dYjoA4wFlWFVAR65LPyhnoac5aAxCAkKPz7F3BicwweXEf3RZ7j9j2VdLIvVrYCz03Ojt8BQeeKEpzPtFisROi8QIFulsZZ2bh4tUpbn1-VKHlsZXsc1096Hlv75lHok91jf6GdvPnqxJXxYvUdFAbaS1qeiIVWSww.jpg?r=d0d"
                alt="컨텐츠 이미지"
              />
            </div>
            <div className="top-content">
              <svg
                id="rank-3"
                width="100%"
                height="100%"
                viewBox="0 0 52 154"
                className="svg-icon svg-icon-rank-3 top-10-rank"
              >
                <path
                  stroke="#595959"
                  strokeLinejoin="square"
                  strokeWidth="4"
                  d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"
                ></path>
              </svg>
              <img
                src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYBpUaXpWyOx2eDsUgJOGvKbbIaxUA5xYrIXnx_ZB0rKC7XWg3PTtVOo6w2w_Uq0RS9gnDCM-ozYCV6PR-zrxDzCF2FJWsQFez6GGp_18TVE-nKv0onNHCf3wXoQE89-dgd5N0GbUtGW-Iy5_Fe9fxGjdxj1h1z8VTv_Jzyhp54tmmFcBvCKZCAJasKJuaXKxB31YCgP9iF2p48kd7D9k8bO_pAAZ5Ktl7c19wp1TFjxWMhuM-jyyoWbRqbXfd9EDoDVvv-s2Ar8g-fXWqR278kWv-vZjLQTRLjJK0IN45MTrXrxUUc1RULtmYZgRdurM0p2VVR27MdFgCe0Ii1gSxN9LsTh9DzOTekcJiU2AbjTePlGjWNHw592u9-sP4CJzHo2SkMiC6ipcznmIV5MnNas0hn6EVUCYyFEVio1JnUk9wlIJoy5oTXV3-XwchtUmZitIVTIwA.webp?r=148"
                alt="컨텐츠 이미지"
              />
            </div>
            <div className="top-content">
              <svg
                id="rank-4"
                width="100%"
                height="100%"
                viewBox="10 0 54 154"
                className="svg-icon svg-icon-rank-4 top-10-rank"
              >
                <path
                  stroke="#595959"
                  strokeLinejoin="square"
                  strokeWidth="4"
                  d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"
                ></path>
              </svg>
              <img
                src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVmigRwcmyfHxsh-yUNdAsSOtbCxfvuuVmI6y3JLwobLEwGK4S-yXZYi7Eyt-VhD01Vg7f_9ty1bFY2TBS8B7BofgY4GdAvB_vYn653B78yKIMKPEvTSjbu8iKkCOizg3uS-Y6MIxCjNpfZk-lIiwFidfA2j7YyiYOD2F2i67ui5HRzdpYw72GfuPbEGimSghdK8OtvxWZREkdmWlpNogwykp0xNybhNZhBEAR6tXh3ERV31ap-PJx8NU2Xo2LP8Ui2HOZa5Zj29vV0cNFwL6mrqOW1G8ScvFALe44xRoAeyoNsZAcYFogZ_lkvzDQeHB203nLb_B1byBZYxMOx7p8ELnjA5BUiWjLbBook5n741mNdvg72Sjv6voHP9xRLzzo9NyxxcI3f5YKR5Z4lv2rH1mF9QrnTmF7P24BPoLS6rKwAKG8bmiy3Z2D181kpsrDPxus1nxQ.webp?r=f6a"
                alt="컨텐츠 이미지"
              />
            </div>
            <div className="top-content">
              <svg
                id="rank-5"
                width="100%"
                height="100%"
                viewBox="0 0 50 154"
                className="svg-icon svg-icon-rank-5 top-10-rank"
              >
                <path
                  stroke="#595959"
                  strokeLinejoin="square"
                  strokeWidth="4"
                  d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"
                ></path>
              </svg>
              <img
                src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXQU3hgM5fHcktMk46VNqQfHc4-NjSiM7rliEwtYZkHGuNf6OTihjb2l7jeLPPj593O6D3u_W9r2K407LswKbi7q-4Gft9Xp81bFLGKyl-pZYH2K85QDmAPLUrECXrRlSvuBrnyyf5fU1pjZgwJ0dJ8eNVxSViyRHFINoL64tmCHBAxT3f6Sqv-DPy7XmnYze06hqcDZvGAry0_snN1IDakjicR5oolK-Ocq5OTkBhKZDLZaxkjSb3Ja0cADJJ0AuVI23SrS9fQvvYcsil3RmvDsUyF-_hjDYqfg68GLMq7c-a6LFjun4lhs0qqyUClejNbz0ObHNkr3zfz_5g3YmZl_LALfM7f_9ub7wo3S_T2TMo-ys2Ksb9d0_kN78uy-Y36s6thmssFP8Ha9cj7s2DMgM6Gzlfi7V-L-XXuVFZWOd3cwgOg4O2YTha8iw6GNiNgQfzPHRA.webp?r=ced"
                alt="컨텐츠 이미지"
              />
            </div>
            <div className="top-content">
              <svg
                id="rank-6"
                width="100%"
                height="100%"
                viewBox="0 0 52 154"
                className="svg-icon svg-icon-rank-6 top-10-rank"
              >
                <path
                  stroke="#595959"
                  strokeLinejoin="square"
                  strokeWidth="4"
                  d="M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z"
                ></path>
              </svg>
              <img
                src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY91Y02lkIF_OXrm0X9jsy7xB0C4wuqsnMRkgy3DMZae01cmMpypWzOS61kS24byLqOSFPHLLuZ4VG_VaQonoCo6D7vBLPOE6ts8blWsqk7M2sJxLnN99vGjSOmwdfEX9yZfsnUKrhcZZ5nZ8QKCB0dNfl4I6Siom2gzECsG6_fPycQwbhsJrvH_L3Z6Z7-svdofwaMKnmVg2UHFowEvRncQqmPO7bAnxFhXEwTAlAflaszNlvqTeuL11VDc_YIHDKO1bQA3iLtgRBXS8gpP5yBN6GS4S5A2wcW-timkuDtvtcr5t66JMcn9O5XtahBAS9z98uuDM-rfOhlHZi9Hxa8CAryUQ9ZZhYFkzwVDaCGekeC5DBEmzRLIbGS_OdSHR1--kPFwU-blBj67wgg4c3hL94Ln6c5yzhlTc8ylz3UdfU1wfK5noOH8yQrWbGON0c-RJrtMCA.webp?r=fbc"
                alt="컨텐츠 이미지"
              />
            </div>
            <div className="top-content">
              <svg
                id="rank-7"
                viewBox="0 0 52 154"
                width="100%"
                height="100%"
                className="svg-icon svg-icon-rank-7 top-10-rank"
              >
                <path
                  stroke="#595959"
                  strokeWidth="4"
                  d="M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z"
                  strokeLinejoin="square"
                ></path>
              </svg>
              <img
                src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYTERqAcbr_t46zyYPzy7dwMJtL6GuKHnAi5Kv1sumBBRHMsbiKmajNKCFbpCwQ4TiBaRr_Vh7XgWe6Smyw5hYpfgyXh7tpZfH-GmxcVz3V3tWllJWEaXcfNHp6SSlcjACUcqBzg42BWuuh1Mukf9eF_KXVjcKHmpXrLgmVNpJK8UcLaVurOKtv2DJ4Y8rDcTbBdSjtiom9iLK1AIGsVgxSm6MJ_YDYkDdZfj6rmrWgmUUPgaycjvpXC77yELjfKwwPbBc94Ym9ExIq14flc51n1TDq3.webp?r=776"
                alt="컨텐츠 이미지"
              />
            </div>
          </div>
        </div>
        {/* <div className="category>">
            <div className="category-title">한국 시리즈</div>
            <div className="content-list">
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSzsUtcBSzLLYW8UkZucHIeFmaqK_tPeiA2xY5-Iqr6y599F746qWH-u_jCKQDVvTl82q6a3Oi9RCsghgoxFvxziYFFiDtBlHFI.webp?r=f17"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSTkhZ2S2lHbjDsrw7FvSiIudJge9rqzzDY4T5VTp4XdtiqskXpMkqJsZa1vzJZF1iWuBObaLhrJM5TTKg9O6MHCzf6nSfNSNG_5XUUZb0LSv9Q9THmb8Vr1PqRtwiPBxLDINIUCqIEizic3EWOBCK7fo9iKOjP2wTyYMjW8aBmbl4f3p9ZDBtOA4S0gqpdtkw_XOPvJ6xKj4FWkYk_A8cG4CsdVdLk8L4rJqj6oW0VkqJPormwlsbmGcCCCcAf2d34W-OZdriezzQAki1KLldFJ7s5yIuhSOUNUT3euDg13O9-CFEeOlxUyPOL-XVQJmCOWBt86sluj8KVJ30OJm0hpA5UA1hdByqdcBiprqMapIynWIA.jpg?r=2c0"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY87mMs5K38TNOM6TMwTWuUWP6JeOjdgrFhtUbWcgQpvytYSJetl0MF4-i5tqsS0rGYxCzldcthbV3csVRECYWFiQ7XBdQB1tXPLumEHIf9OW0qcqvZqDnlzErY8EIkDudv8.jpg?r=95f"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf_j2i1d-rBfC_dS7GGApbyy1b9GiJEikkc4mDIuSWZx84LHR-_-LY93h9074Yk4fdWBPcrmZx084mb7mMZhJ9_dp4uy9qHqH-s.webp?r=4fb"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0Y0Mghr3SDBAjndj4uOgF2Ru7ox_HPqEfRXEDb4xdl34gtxGclHL6yB_5fGS25XqhuwEqEBn9FsU-inDPtN03L_RrVWLu0p4yavQbn4IShD_YTk4RBEzB9sKpnRoTCyJ0U.jpg?r=59f"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaKzuXt1cR2rRI5vnQy4ytpTiNeiXR8efmsfFnWqB6cPjp8EidKTZHslF-GxFXO8EN4l7sTWc7F38PTfpkiNHe6l9P7cezk4RmY.webp?r=ef0"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZoNwsfTsnQZANWRmRDT9JNXSrd69t9yzYsar2036L4GK7Bv1mStuHHSOp81gmf1T0ZW7mHLKKHbtRVANGnL7_hwjrgQ0VZuU9161mj-DqF4RoSvTulhNGXtQyH5M4oArTJ0ucAkfuheVXrgO1VSyREXzXypXZMlO3tZfcHCtWSAiTyNHeLK8aKr3kewR0xiy1yGWWaWkTH6eMnirDFJLZNUrusYfkimjWzyzVmoy9nQ_WuK5BdxJ7x01N0pQjSj6Tfk6S2rMxSO_16XuUz-RdgGaw-Fyy18_j7uSZrWHBJIHLqCi1l7lqXjnI_-5DePdqyrBjdkTtSTS3nCKXR-n0RmEnhoyY4Vymi4wFew3B58APsFNivKnM9tBYi1HvVdzuMC1DFl7i0VAwRT_bnXg8UIczTRnEnT1Qy3q1801oQtKr37ls2P_cpyjavpUVe33ajZEauvwBpEmi9s0WPFRrj7xitCcszmGVeqSX3n3koyBROTUx5WOGEQrw65xr3uQcM.webp?r=14d"
                  alt="컨텐츠 이미지"
                />
              </div>
            </div>
          </div> */}
        {/* <div className="category>">
            <div className="category-title">평단의 찬사를 받은 영화</div>
            <div className="content-list">
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeAlKa6kJVDP8VV93rztHbMPwYv5tHEMKg8-aJl7-qqRJSgQfFsMj0FhOjmrw9KUv_QMSsdwqjIuYP7K_yEsIJijMIG6tuAMd_wVWSTJGC4UXAPXapp78X-DEitLqMZWEQaLx7Hbw7pprinLNunBl4eww6hebDMN6ZAtZslYweU-op8CU24zjYc6VobvowCZOaXmrwJNVcHeZRmwagcE8ujUA7RMh5Hx0MpRXZkeKru4OCbyr2bcpjUCqj5Tl2mo9l4V7EX75jcSj_51-TBDFPVKAA20egwOCJFawUBnGmc9DaFi0IT67T-nHJbQ5V9DIMolZl1IuYHHD0QNgNdycA.webp?r=f82"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQWjrwvr1l5orT5MYq2y7nrGVWeVJgzqXU_f2VJ868lBDCHG8A4RlQrOdVL9jtxpnbQWkFiIKoJhDls40EWxvu7a1xpcKvNSNK8.webp?r=f11"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfh7pU-01pMWMp9cFnZ_qYTNb9g2zaxJFotwCs07lzkAMabOPEf9gjWyO9_X4mt4qDQgYPV7DnojZUZdQETnWUTPQJoNKoJRhno.webp?r=087"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcYT8hijuzJ4qNn8l7jtADK8uLbkW2RbexO4Fbm7-0Hkyf9CKW6trs-4tv9rYFkV52H0zOsUFlEURuNyTQ8D5y7Twwxo89-3r0Wsm0DeeIKynQOUzW-gJTNEY166n1kiESx6.jpg?r=3f8"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXF1zR2nZgZyYIfUj1rJdUeEeVhv8mtdMYuKAPgC50WCt3ig1tDSooAO4Y-4eKlAkksSA3qlGh-7yXMErOEOcPkpTCKxPKvcCvM.webp?r=7c4"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABco5kFiQP-Y-PRQyatLMp3dZ5aQCcmtc3wYNMev8V64_vT8-5TNbjX8xEyagghLSWHOJZd81ca1odGyDxDzn2gBgmNIuM2akxSY.webp?r=c41"
                  alt="컨텐츠 이미지"
                />
              </div>
              <div className="content">
                <img
                  src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWL80RUZjJmQ0RfF8pKQEM6x-T77OlXzNkfIZdfF4Hp0uBcDWSbw5hUXft1rpX0inGsOLDVtGVx1Sqea4jTUmn1SBhBoxDtueQ4.webp?r=6bb"
                  alt="컨텐츠 이미지"
                />
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default App;
