import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex gap-5 justify-end md:justify-between mt-3 mx-3">
        <div className="hidden md:flex justify-center ">
          <h1 className="text-4xl font-extrabold  bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-transparent bg-clip-text">
            QikPay
          </h1>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <Link to="/">
            {" "}
            <button className="btn  rounded-full bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-white text-base  md:text-xl  hover:transition hover:scale-105 ">
              Login
            </button>
          </Link>
          <Link to="/agentregistration">
            {" "}
            <button className="btn  rounded-full bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-white text-base  md:text-xl   hover:transition hover:scale-105 ">
              Reg Agent
            </button>
          </Link>
        </div>
      </div>
      <div className="hero bg-base-200 px-4 lg:px-1 min-h-screen">
        <div className="card mt-2 lg:mt-0 bg-base-100 w-full max-w-sm md:max-w-2xl shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex justify-center">
              <h1 className="text-6xl font-extrabold  bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-transparent bg-clip-text">
                QikPay
              </h1>
            </div>
            <div className="flex justify-center">
              <h1 className="text-2xl font-bold">Register User</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                className="input input-bordered rounded-full"
                required
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="">This field is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pin</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 5,
                })}
                placeholder="*****"
                className="input input-bordered rounded-full"
                required
              />

              {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>
            {errors.password?.type === "required" && (
              <span className="">This field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="">The minimum length is 5</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="">The maximum length is 5</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile No.</span>
              </label>
              <input
                type="email"
                placeholder="mobile number"
                {...register("number", { required: true })}
                className="input input-bordered rounded-full"
                required
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="">This field is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered rounded-full"
                required
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="">This field is required</span>
            )}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn  rounded-full bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-white text-xl  hover:transition hover:scale-105 "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
