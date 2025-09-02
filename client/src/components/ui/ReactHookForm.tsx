import { useForm } from "react-hook-form";
import Email from "../../assets/svg/Email";
import Password from "../../assets/svg/Password";

type FormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (data: FormValues) => void;
};

export default function ReactHookForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <label className="input validator">
        <Email />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            maxLength: 320,
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
      </label>
      <div className="validator-hint hidden">Enter valid email address</div>
      {errors.email && <span>{errors.email.message}</span>}
      <label className="input validator">
        <Password />
        <input
          type="password"
          placeholder="Password"
          minLength={8}
          maxLength={64}
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,64}$/,
              message: "Password must have upper, lower, number, 8-64 chars",
            },
          })}
        />
      </label>
      <p className="validator-hint hidden">
        Must be more than 8 characters, including
        <br />
        At least one number <br />
        At least one lowercase letter <br />
        At least one uppercase letter
      </p>
      {errors.password && <span>{errors.password.message}</span>}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
