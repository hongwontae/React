export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? "text-button " : "button ";
  cssClasses += className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}

// 인자내에서 ...props는 모든 props를 받는 rest 파라미터를 사용한 것이다.
// return에서 사용한 ...props는 spread 연산자이다.
