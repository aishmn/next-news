import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../../redux/actions/notificationActions";

const Alert = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const clientSide = typeof window !== "undefined";
  const [message, setMessage] = useState({
    notificationMessage: null,
    active: false,
  });
  const { notificationMessage, active } = message;
  useEffect(() => {
    if (notification.message !== null) {
      setMessage({ notificationMessage: notification.message, active: true });
      setTimeout(() => {
        setMessage({ notificationMessage: null, active: false });
        dispatch(removeNotification());
      }, 3000);
    }
  }, [notification.message]);
  if (!clientSide) return <div>Alert</div>;
  return (
    <>
      {clientSide ? (
        <div
          data-aos="fade-in"
          className="bg-danger text-center text-light p-2 shadow"
          style={{
            display: active ? "block" : "none",
            position: "absolute",
            zIndex: "100",
            left: "0",
            right: "0",
          }}
        >
          {notificationMessage}
        </div>
      ) : (
        <h6 className="bg-danger text-center text-light p-2 shadow">
          {"Loading"}
        </h6>
      )}
    </>
  );
};
export default Alert;
