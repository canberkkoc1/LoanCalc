import React, { useRef } from "react";
import { useEffect } from "react";
import FormCredit from "../../components/Form";

export default function Home() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <FormCredit ref={inputRef} />
    </div>
  );
}
