import styles from "../scss/footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

const linkIcons = [
  "https://www.instagram.com/hhieu102/",
  "https://twitter.com/Vagabond102",
  "https://www.fb.com/people/Hoàng-Trung-Hiếu/100009041766341/",
];

const footerLinks = [
  "Legal",
  "Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Additional CA Privacy Disclosures",
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.footer_links}>
          <div className={styles.footer_links_2}>
            {footerLinks.map((link, index) => (
              <div className={styles.links} key={index}>
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.footer_icons}>
          {footerIcons.map((icon, index) => (
            <a href={linkIcons[index]} target="_blank" rel="noreferrer">
              <div className={styles.icon} key={index}>
                {icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
