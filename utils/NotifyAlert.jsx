import toast from "react-hot-toast";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const NotifyAlert = (icon, msg) => toast(msg, {
  duration: 4000,
  position: 'top-start',

  // Custom Icon
  icon: icon === 'green' ?
    <FaCheckCircle className="text-green-500" /> :
    <FaInfoCircle className="text-blue-500" />,

  // Styling (Tambahkan style atau className jika perlu)
  style: {},
  className: '',

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
});

export default NotifyAlert;
