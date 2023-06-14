import { useEffect, useRef, Ref, ReactNode, forwardRef, useState } from "react";

interface FancyButtonProps {
  children: ReactNode;
}

const FancyButton = ({ children }: FancyButtonProps) => {
  return <button className="FancyButton">{children}</button>;
};

const FancyButtonWithRef = forwardRef(
  (props: FancyButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <div>
        <p>Hello World</p>
        <button ref={ref}>{props.children}</button>{" "}
      </div>
    );
  }
);

function ParentComponent() {
  const ref = useRef<HTMLButtonElement>(null); // { current: null }

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <div>
      <FancyButton>Click me!</FancyButton>
      <FancyButtonWithRef ref={ref}>Click me with Ref!</FancyButtonWithRef>
    </div>
  );
}

export default ParentComponent;
