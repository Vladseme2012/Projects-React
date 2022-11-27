function ResetButton({ style, onClick }) {
  return (
    <>
      {/* {!count ? (<></>) : (<button style={buttonStyle} onClick={resetCounter}>
        Reset
      </button>)} */}
      {/* {count > 0 && (<button style={buttonStyle} onClick={resetCounter}>
        Reset
      </button>)} */}
      <button style={style} onClick={onClick}>
        Reset
      </button>
    </>
  );
}

export default ResetButton;
