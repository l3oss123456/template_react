import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import * as R from "ramda";

const month_full = [
  {
    en: "January",
    lao: "ມັງກອນ",
    ho: "Tháng Một",
  },
  {
    en: "February",
    lao: "ກຸມພາ",
    ho: "Tháng Hai ",
  },
  {
    en: "March",
    lao: "ມີນາ",
    ho: "Tháng Ba",
  },
  {
    en: "April",
    lao: "ມີ່ຖຸນາ",
    ho: "Tháng Tư",
  },
  {
    en: "May",
    lao: "ພຶດສະພາ",
    ho: "Tháng Năm",
  },
  {
    en: "June",
    lao: "ມິຖຸນາ",
    ho: "Tháng Sáu",
  },
  {
    en: "July",
    lao: "ກໍລະກົດ",
    ho: "Tháng Bảy",
  },
  {
    en: "August",
    lao: "ສິງຫາ",
    ho: "Tháng Tám",
  },
  {
    en: "September",
    lao: "ກັນຍາ",
    ho: "Tháng Chín",
  },
  {
    en: "October",
    lao: "ສິງຫາມາ",
    ho: "Tháng Mười",
  },
  {
    en: "November",
    lao: "ພະຈິກ",
    ho: "Tháng Mười Một",
  },
  {
    en: "December",
    lao: "ທັນວາ",
    ho: "Tháng Mười Hai",
  },
];

export default {
  connectSocketio() {
    return io(process.env.REACT_APP_API_ENPOINT, {
      // auth: { Authorization: this.getCookie("access_token") },
    });
  },
  useWindowSize: () => {
    const [windowSize, setWindowSize] = useState({
      windowWidth: undefined,
      windowHeight: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  },
  useOutsideAlerter: (ref, handleOutsideClick) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleOutsideClick();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
  },
  useScrollPosition: () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return offset;
  },
  useGetTheme: () => {
    return useSelector((state) => state.theme);
  },
  getCurrentTime: () => {
    const GetCurrentLanguage = () => useSelector((state) => state.language);
    const languageCode = GetCurrentLanguage().toLowerCase();
    let currentTime = null;

    if (languageCode === "en" || languageCode === "th") {
      currentTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
      );
    } else if (languageCode === "lao") {
      currentTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Vientiane" })
      );
    } else if (languageCode === "ho") {
      currentTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
      );
    } else {
      currentTime = new Date();
    }

    return currentTime;
  },
  getMonth: (month_number = null) => {
    if (R.isNil(month_number)) {
      return null;
    }

    const GetCurrentLanguage = () => useSelector((state) => state.language);
    const languageCode = GetCurrentLanguage().toLowerCase();

    if (languageCode === "lao") {
      return month_full[month_number - 1][languageCode];
    }
  },
};

// export const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     windowWidth: undefined,
//     windowHeight: undefined,
//   });

//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         windowWidth: window.innerWidth,
//         windowHeight: window.innerHeight,
//       });
//     }
//     // Add event listener
//     window.addEventListener("resize", handleResize);
//     // Call handler right away so state gets updated with initial window size
//     handleResize();
//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount

//   return windowSize;
// };

// export const useOutsideAlerter = (ref, handleOutsideClick) => {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         handleOutsideClick();
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [ref]);
// };

// export const useScrollPosition = () => {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const onScroll = () => setOffset(window.pageYOffset);
//     // clean up code
//     window.removeEventListener("scroll", onScroll);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return offset;
// };

// export const useGetTheme = () => {
//   return useSelector((state) => state.theme);
// };

// export const getCurrentTime = () => {
//   const GetCurrentLanguage = () => useSelector((state) => state.language);
//   const languageCode = GetCurrentLanguage().toLowerCase();
//   let currentTime = null;

//   if (languageCode === "en" || languageCode === "th") {
//     currentTime = new Date(
//       new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
//     );
//   } else if (languageCode === "lao") {
//     currentTime = new Date(
//       new Date().toLocaleString("en-US", { timeZone: "Asia/Vientiane" })
//     );
//   } else if (languageCode === "ho") {
//     currentTime = new Date(
//       new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
//     );
//   } else {
//     currentTime = new Date();
//   }

//   return currentTime;
// };

// export const getMonth = (month_number = null) => {
//   if (R.isNil(month_number)) {
//     return null;
//   }

//   const GetCurrentLanguage = () => useSelector((state) => state.language);
//   const languageCode = GetCurrentLanguage().toLowerCase();

//   if (languageCode === "lao") {
//     return month_full[month_number - 1][languageCode];
//   }
// };
