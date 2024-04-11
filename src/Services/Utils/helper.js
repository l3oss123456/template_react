import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import * as R from "ramda";
import store from "../Redux/store";

const month_full = [
  {
    eng: "January",
    laos: "ມັງກອນ",
    hanoi: "Tháng Một",
  },
  {
    eng: "February",
    laos: "ກຸມພາ",
    hanoi: "Tháng Hai ",
  },
  {
    eng: "March",
    laos: "ມີນາ",
    hanoi: "Tháng Ba",
  },
  {
    eng: "April",
    laos: "ມີ່ຖຸນາ",
    hanoi: "Tháng Tư",
  },
  {
    eng: "May",
    laos: "ພຶດສະພາ",
    hanoi: "Tháng Năm",
  },
  {
    eng: "June",
    laos: "ມິຖຸນາ",
    hanoi: "Tháng Sáu",
  },
  {
    eng: "July",
    laos: "ກໍລະກົດ",
    hanoi: "Tháng Bảy",
  },
  {
    eng: "August",
    laos: "ສິງຫາ",
    hanoi: "Tháng Tám",
  },
  {
    eng: "September",
    laos: "ກັນຍາ",
    hanoi: "Tháng Chín",
  },
  {
    eng: "October",
    laos: "ສິງຫາມາ",
    hanoi: "Tháng Mười",
  },
  {
    eng: "November",
    laos: "ພະຈິກ",
    hanoi: "Tháng Mười Một",
  },
  {
    eng: "December",
    laos: "ທັນວາ",
    hanoi: "Tháng Mười Hai",
  },
];

const connectSocketio = () => {
  return io(process.env.REACT_APP_API_ENPOINT, {
    // auth: { Authorization: this.getCookie("access_token") },
  });
};

const useWindowSize = () => {
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
};

const useOutsideAlerter = (ref, handleOutsideClick) => {
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
};

const useScrollPosition = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return offset;
};

const useGetTheme = () => {
  return useSelector((state) => state.theme);
};

const getCurrentLanguage = () => {
  const state = store.getState();
  return state.language;
};

const getCurrentTime = () => {
  // const GetCurrentLanguage = () => useSelector((state) => state.language);
  // const languageCode = GetCurrentLanguage().toLowerCase();
  const state = store.getState();
  const languageCode = state.language;

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
};

const getMonth = (month_number = null) => {
  if (R.isNil(month_number)) {
    return null;
  }

  // const GetCurrentLanguage = () => useSelector((state) => state.language);
  // const languageCode = GetCurrentLanguage().toLowerCase();
  const state = store.getState();
  const languageCode = state.language;

  if (languageCode === "laos") {
    return month_full[month_number - 1][languageCode];
  }
};

const getCookie = (params) => {
  let name = params + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const ConvertJsonToFormData = (json_data = {}) => {
  const form_data = new FormData();

  Object.keys(json_data).forEach((key) => {
    if (
      !Array.isArray(json_data[key])
      // && typeof json_data[key] !== "object"
    ) {
      form_data.append(key, json_data[key]);
    } else {
      form_data.append(key, JSON.stringify(json_data[key]));
    }
  });

  return form_data;
};

export default {
  connectSocketio,
  useWindowSize,
  useOutsideAlerter,
  useScrollPosition,
  useGetTheme,
  getCurrentLanguage,
  getCurrentTime,
  getMonth,
  getCookie,
  ConvertJsonToFormData,
};
