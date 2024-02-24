import './Alert.css';

// //This comment describes how inline(built-in) styles are used. Usually they are not recommended as opposed to vanilla css.
// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   color: 'white',
// };

const getBgColor = variant => {
  switch (variant) {
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
    case 'error':
      return 'red';
    case 'warning':
      return 'orange';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ variant, children }) => {
  return (
    <p
      className="alert"
      style={{
        // Adding this variable if inline styles (above) are used:
        //...alertStyles,
        backgroundColor: getBgColor(variant),
      }}
    >
      {children}
    </p>
  );
};
