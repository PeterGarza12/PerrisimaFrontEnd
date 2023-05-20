
export default function VerifyLogIn() {
    const user = JSON.parse(window.sessionStorage.getItem("user"));

  if(user!== null){
    return user;
  }
  return null;
}

