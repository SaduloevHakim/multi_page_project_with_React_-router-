const Button1 = ({ text, bg, brd, borRadius, h, w, col, borNone, txt }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: bg,
          borderRadius: borRadius,
          height: h,
          width: w,
          color: col,
          border: borNone,
          border: brd,
        }}
          >
              {txt}
      </button>
    </div>
  );
};
export default Button1;
