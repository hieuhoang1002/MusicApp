import React from "react";
import styles from "../scss/premium.module.scss";
import Header from "./Header";
import { Logo } from "../assets/img";
import { Music } from "../assets/img";
import { Music1 } from "../assets/img";
import { Music2 } from "../assets/img";
import { Music3 } from "../assets/img";
import { Music4 } from "../assets/img";
import { GiCheckMark } from "react-icons/gi";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

const linkIcons = [
  "https://www.instagram.com/hhieu102/",
  "https://twitter.com/Vagabond102",
  "https://www.fb.com/people/Hoàng-Trung-Hiếu/100009041766341/",
];

const company = ["About", "Jobs", "For the Record"];

const communities = [
  "For Artists",
  "Developers",
  "Advertising",
  "Investors",
  "Vendors",
];

const usefullinks = ["Support", "Web Player", "Free Mobile App"];

const rules = [
  "Legal",
  "  Privacy Center",
  "  Privacy Policy",
  "  Cookies",
  "  About Ads",
];

const Premium = () => {
  return (
    <div className={styles.containers}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.body1}>
        <div className={styles.container1}>
          <div className={styles.heading}>
            <h1>Dùng Premium miễn phí trong 3 tháng</h1>
            <p>
              Sau đó chỉ 69,000<small>đ</small>&ensp;/tháng. Hủy bất kỳ lúc nào.
            </p>
          </div>

          <div className={styles.button}>
            <button className={styles.button1}>NÂNG CẤP VIP</button>
            <a href="#body4">
              <button className={styles.button2}>XEM CÁC GÓI</button>
            </a>
          </div>

          <div className={styles.content}>
            <p>Áp dụng Điều khoản và điều kiện.</p>
            <span>
              &nbsp;Ưu đãi 1 tháng miễn phí không áp dụng cho người đã dùng thử
              gói Premium.
            </span>
          </div>
        </div>
        <img alt="" src={Music} />
      </div>

      <div className={styles.body2}>
        <div className={styles.container2}>
          <div className={styles.heading}>
            <h1>Giới thiệu gói Premium Mini</h1>
            <p>
              Tải 30 bài hát và nghe nhạc thỏa thích, không quảng cáo trên 1
              thiết bị.
            </p>
          </div>

          <div className={styles.button}>
            <button className={styles.button1}>
              DÙNG 1 NGÀY CHỈ VỚI 2,300<small>đ</small>
            </button>
            <button className={styles.button2}>
              DÙNG 1 TUẦN CHỈ VỚI 8,800<small>đ</small>
            </button>
          </div>

          <div className={styles.content}>
            <p>Áp dụng Điều khoản và điều kiện.</p>
          </div>
        </div>
      </div>

      <div className={styles.body3}>
        <div className={styles.container3}>
          <div className={styles.heading}>
            <h1>Lý do dùng gói Premium?</h1>
          </div>

          <div className={styles.content}>
            <div className={styles.containerContent}>
              <div className={styles.newContent}>
                <img alt="" src={Music1} />
              </div>
              <div className={styles.title}>
                <p>Tải nhạc miễn phí</p>
                <span>Nghe mọi nơi</span>
              </div>
            </div>
            <div className={styles.containerContent}>
              <div className={styles.newContent}>
                <img alt="" src={Music2} />
              </div>
              <div className={styles.title}>
                <p>Nghe nhạc không quảng cáo</p>
                <span>Thưởng thức âm nhạc không gián đoạn</span>
              </div>
            </div>
            <div className={styles.containerContent}>
              <div className={styles.newContent}>
                <img alt="" src={Music3} />
              </div>
              <div className={styles.title}>
                <p>Phát bài hát bất kỳ</p>
                <span>Ngay cả trên thiết bị di động</span>
              </div>
            </div>
            <div className={styles.containerContent}>
              <div className={styles.newContent}>
                <img alt="" src={Music4} />
              </div>
              <div className={styles.title}>
                <p>Chuyển bài không giới hạn</p>
                <span>Chỉ cần nhấn nút tiếp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="body4" className={styles.body4}>
        <div className={styles.container4}>
          <div className={styles.heading}>
            <h1>Chọn gói Premium của bạn</h1>
            <p>
              Nghe không giới hạn trên điện thoại, loa và các thiết bị khác.
            </p>
          </div>
          <div className={styles.contents}>
            <div className={styles.content}>
              <div className={styles.title}>
                <p>Miễn phí 1 tháng khi đăng ký</p>
                <button className={styles.button1}>Thanh toán 1 lần</button>
                <h2>Mini</h2>
                <div className={styles.spans}>
                  <span>
                    Từ 2,300<small>đ</small>&nbsp; /ngày
                  </span>
                  <span>1 tài khoản chỉ trên thiết bị di động</span>
                </div>
                <hr />
              </div>

              <div className={styles.notes}>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nghe nhạc không quảng cáo trên thiết bị di động</p>
                </div>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nhóm nghe chung</p>
                </div>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Tải 30 bài hát xuống 1 thiết bị di động</p>
                </div>
              </div>

              <div className={styles.footerContent}>
                <button>BẮT ĐẦU</button>
                <div className={styles.footerContentTitle}>
                  <p className={styles.condition}>
                    Áp dụng các điều khoản và điều kiện.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.title}>
                <p>Miễn phí 1 tháng khi đăng ký</p>
                <button className={styles.button1}>Thanh toán 1 lần</button>
                <h2>Individual</h2>
                <div className={styles.spans}>
                  <span>
                    69,000<small>đ</small>&nbsp; /tháng sau thời gian ưu đãi
                  </span>
                  <span>1 tài khoản</span>
                </div>
                <hr />
              </div>

              <div className={styles.notes}>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nghe nhạc không quảng cáo</p>
                </div>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nghe mọi nơi - ngay cả khi không có kết nối mạng</p>
                </div>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nghe lại tùy ý</p>
                </div>
              </div>

              <div className={styles.footerContent}>
                <button>BẮT ĐẦU</button>
                <div className={styles.footerContentTitle}>
                  <p className={styles.condition}>
                    Áp dụng các điều khoản và điều kiện.
                  </p>
                  <p className={styles.contentCondition}>
                    <span>
                      Một tháng dùng miễn phí không dành cho người đã dùng thử
                      gói Premium. Sau thời gian dùng thử, mức phí sẽ là 69,000
                    </span>
                    <small>đ</small>&nbsp; /tháng.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.title}>
                <p>Miễn phí 1 tháng khi đăng ký</p>
                <button className={styles.button1}>Thanh toán 1 lần</button>
                <h2>Student</h2>
                <div className={styles.spans}>
                  <span>
                    39,500<small>đ</small>&nbsp; /tháng sau thời gian ưu đãi
                  </span>
                  <span>1 tài khoản</span>
                </div>
                <hr />
              </div>

              <div className={styles.notes}>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Giảm giá đặc biệt cho sinh viên đủ điều kiện</p>
                </div>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nghe nhạc không quảng cáo</p>
                </div>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nghe mọi nơi - ngay cả khi không có kết nối mạng</p>
                </div>
                <div className={styles.note}>
                  <div>
                    <GiCheckMark className={styles.icon} />
                  </div>
                  <p>Nghe theo cách của bạn</p>
                </div>
              </div>

              <div className={styles.footerContent}>
                <button>BẮT ĐẦU</button>
                <div className={styles.footerContentTitle}>
                  <p className={styles.condition}>
                    Áp dụng các điều khoản và điều kiện.
                  </p>
                  <p className={styles.contentCondition}>
                    <span>
                      Gói chỉ dành cho sinh viên tại các trường cao đẳng và đại
                      học. Sau thời gian dùng thử, mức phí sẽ là 39,500
                    </span>
                    <small>đ</small>&nbsp; /tháng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footers}>
        <div className={styles.footer1}>
          <div className={styles.logoName}>
            <div className={styles.logo}>
              <img alt="" src={Logo} />
            </div>
            <div className={styles.name}>
              <p>Music</p>
              <span>Entertainment</span>
            </div>
          </div>

          <div className={styles.contents}>
            <p>COMPANY</p>
            <div className={styles.content}>
              {company.map((link, index) => (
                <span key={index}>{link}</span>
              ))}
            </div>
          </div>

          <div className={styles.contents}>
            <p>COMMUNITIES</p>
            <div className={styles.content}>
              {communities.map((link, index) => (
                <span key={index}>{link}</span>
              ))}
            </div>
          </div>

          <div className={styles.contents}>
            <p>USEFUL LINKS</p>
            <div className={styles.content}>
              {usefullinks.map((link, index) => (
                <span key={index}>{link}</span>
              ))}
            </div>
          </div>

          <div className={styles.icons}>
            {footerIcons.map((icon, index) => (
              <a href={linkIcons[index]} target="_blank" rel="noreferrer">
                <div className={styles.icon} key={index}>
                  {icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footer2}>
          <div className={styles.service}>
            {rules.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>

          <div className={styles.email}>© HTH1821050842@music.com.vn</div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
