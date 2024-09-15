import toast from "react-hot-toast";

const NotifyAlert = (icon, msg) => toast(msg, {
  duration: 4000,
  position: 'top-start',

  // Custom Icon
  icon: icon,

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
