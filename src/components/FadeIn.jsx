import React, { useEffect, useState } from "react";

export default function FadeIn({
  delay = 100,
  transitionDuration = 800,
  wrapperTag: WrapperTag = "div",
  childTag: ChildTag = "div",
  visible = true,
  children,
  className,
  childClassName
}) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const count = React.Children.count(children);
    
    if (maxIsVisible < count) {
      const timeout = setTimeout(() => {
        setMaxIsVisible((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [maxIsVisible, visible, delay, children]);

  return (
    <WrapperTag className={className} style={{ overflow: 'hidden' }}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return null;

        return (
          <ChildTag
            key={i}
            className={childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
              transform: maxIsVisible > i ? "none" : "translateY(50px)",
              opacity: maxIsVisible > i ? 1 : 0,
              display: 'block', // Memastikan tag pembungkus punya dimensi
              width: '100%'
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}