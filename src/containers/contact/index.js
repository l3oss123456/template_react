import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      Contact
      <Loading loading={loading} />
    </div>
  );
};

export default Contact;
