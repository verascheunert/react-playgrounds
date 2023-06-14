import { forwardRef } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const NestedInput = forwardRef(
  ({ ...props }, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <input {...props} ref={ref} />;
  }
);

function ReactHookFormPlayground() {
  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NestedInput {...register("firstName")} />
      <NestedInput {...register("lastName")} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookFormPlayground;
