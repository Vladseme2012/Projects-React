// const App = (props) => {
//   const {initialButtonText, initialClassesList} = props
// const [buttonText, setButtonText] = React.useState(props.initialButtonText);
//   const [buttonText, setButtonText] = React.useState(initialButtonText);
//   const [className, useClassName] = React.useState(initialClassesList);
//   const onButtonClick = () => {
//     setButtonText('Hello from react');
//     useClassName('green-button');
//   };
//   return (
//     <div className="app">
//       <button className = {className} onClick={onButtonClick}>
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// Еще один вариант деструктуризации пропсов в передаваемых параметрах!!!!!!

const App = ({ initialButtonText, initialClassesList }) => {
  // const {initialButtonText, initialClassesList} = props Теперь эта часть тоже не нужна мы дестрруктурировали наши пропсы на уровне параметров!!!!
  // const [buttonText, setButtonText] = React.useState(props.initialButtonText);
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [className, useClassName] = React.useState(initialClassesList);
  const onButtonClick = () => {
    setButtonText('Hello from react');
    useClassName('green-button');
  };
  return (
    <div className="app">
      <button className={className} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassesList="" />);
