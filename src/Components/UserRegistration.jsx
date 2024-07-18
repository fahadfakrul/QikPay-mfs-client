import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const UserRegistration = () => {
    const axiosPublic =  useAxiosPublic();
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
        name: data.name,
        email: data.email,
        pin: data.pin,
        number: data.number,
        status: "pending",
        balance: 0
    }
    axiosPublic.post("/users", userInfo)
    .then((res)=> {
        if(res.data.insertedId){
            reset();
            toast.success('Registration successful!');
            navigate('/');
        }else{
            toast.error('Registration failed! User may exist already');
        }
    })
    
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
              <span className="text-red-500">This field is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pin</span>
              </label>
              <input
                type="password"
                {...register("pin", {
                  required: true,
                  pattern: /^[0-9]{5}$/,
                })}
                placeholder="*****"
                className="input input-bordered rounded-full"
                required
              />

              {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>
            {errors.pin?.type === "required" && (
              <span className="text-red-500">This field is required</span>
            )}
            {errors.pin?.type === "pattern" && (
              <span className="text-red-500">The pin should be a number and of 5 digits.</span>
            )}
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile No.</span>
              </label>
              <input
                type="number"
                placeholder="mobile number"
                {...register("number", { required: true })}
                className="input input-bordered rounded-full"
                required
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="text-red-500">This field is required</span>
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
              <span className="text-red-500">This field is required</span>
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
