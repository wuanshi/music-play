import Cookie from 'js-cookie'

export function setCookies(string) {
    const cookies = string.split(";;");
    cookies.map((cookie) => {
      document.cookie = cookie;
      console.log(cookie);
    });
  }