import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <span className="save-btn" {...props}>
    <img href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADz8/Pk5OQZGRloaGjn5+eBgYGSkpKhoaEkJCQ4ODgRERF4eHhsbGzAwMDt7e3R0dGurq7b29svLy/5+fm4uLinp6dNTU1gYGBbW1t8fHwcHByGhoZFRUUpKSkzMzOamprU1NQF5Ci9AAACHUlEQVR4nO3c2W7CQAxAUfZA2NdCKev/f2QroVZNGEgoNuO497yOBnMVKQjBpFYDAAAAAAAAAAAAAAAAgDKWjYu/7fqxzK7nl0OW4ZcWNT+9r4/pReehnUkrzWgNs+uLtFB+i4JVWv/lscJhPWeUXR/k1wPagi0h0352nrvCWX6et8Lu1TxnhVdX0FvhOTDPV+HRe+EqNM9V4cJ74Tw4z1PhyX1h233h2nvhMnij8VTYaFFYAoUUUvgUCkuhkEIKn0JhKRRSSOFTRApH+e2b7Hr1C8/jnGl2vfqFRSik8CkUirBYOBEdYrFw1xV0KhH48sLXo5BCCuOjkEIK46OQQgrjo5BCCuOjkEIK46NQpfAw2iaCPqwV9qfCB+b6tyZFKtyKjzJWuCne+ihjhQ+eIi3DVuFOYZStwrPCKFuFTYVRtgplfyG9oFAJhYIoVEKhIAqVUCiIQiUUCqJQCYWCKFRCoSAKlVAoiEIlFAqiUAmFgihUQqEgCpVQKIhCJRQKcl944wmNjgo7dwM9FI7dF4YflOqo8O1+YPULg8/Ujlko+9SIWnNbFPjywm5PULIv7OO/+hRSaAGF1S+UP99hrbDnvnDmvnDuvXCgFWimMHFfqHGExVSh3iW0Uij8bc1e4bT4jVa7UO2z0ErhWDPQQOFR7bPeRmG60u37KoxYd9jvNG8x35rRTBROUwMAAAAAAAAAAAAAAAAAAOA/+gSfz0qwg9BrpQAAAABJRU5ErkJggg==">
  </span>
);

export default SaveBtn;
