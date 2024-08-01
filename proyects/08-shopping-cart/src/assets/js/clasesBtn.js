import { useState } from "react";
export const clasesBtn = () => {
  const [classbtn, setClassbtn] = useState(false);
  const classBnttxt = classbtn ? "btnActive" : undefined;
  return { classBnttxt, setClassbtn, classbtn };
};
