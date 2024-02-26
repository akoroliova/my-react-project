import clsx from 'clsx';
import css from './Alert.module.css';
//import './Alert.module.css';
// console.log(css); // { alert: "Alert_alert_ax7yz" }

// //This comment describes how inline(built-in) styles are used. Usually they are not recommended as opposed to vanilla css.
// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   color: 'white',
// };
//
// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

export const Alert = ({ variant, outlined, elevated, children }) => {
  // // Use if not importing clsx lib
  // const classNames = ['alert', variant];
  // if (outlined) {
  //   classNames.push('is-outlined');
  // }
  // if (elevated) {
  //   classNames.push('is-elevated');
  // }

  return (
    <p
      // //Use if not importing clsx lib
      // className={classNames.join(' ')}

      // // Use if inline styles (above) are used:
      // style={{
      //   ...alertStyles,
      //   backgroundColor: getBgColor(variant),
      // }}

      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
      // className={clsx(
      //   'alert',
      //   variant,
      //   outlined && 'is-outlined',
      //   elevated && 'is-elevated'
      // )}
    >
      {children}
    </p>
  );
};
