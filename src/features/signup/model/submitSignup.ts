export const submitSignup = async <T>(data:T) => {
  console.log("data== ", data);
  // const respones = await fetch("/어쩌구저쩌구", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  return true; // respones.json() 회원가입 통과 or 실패
};
