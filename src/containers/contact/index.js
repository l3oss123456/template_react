import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import ProgressBar from "../../components/ProgressBar";

const Contact = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 20);
    } else {
      setLoading(false);
    }
  }, [progress]);

  return progress < 100 ? (
    <>
      <ProgressBar progress={progress} background="darkblue" />
      <Loading loading={loading} />
    </>
  ) : (
    <>Contact</>
  );
};

export default Contact;
