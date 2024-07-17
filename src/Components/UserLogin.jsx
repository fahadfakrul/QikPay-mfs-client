import { Link } from "react-router-dom";


const UserLogin = () => {
    return (
        <div>
        <div className="flex gap-5 justify-end md:justify-between mt-3 mx-3">
          <div className="hidden md:flex justify-center ">
            <h1 className="text-4xl font-extrabold  bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-transparent bg-clip-text">
              QikPay
            </h1>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
           <Link to="/userregistration"> <button className="btn  rounded-full bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-white text-base  md:text-xl  hover:transition hover:scale-105 ">
              Register
            </button></Link>
            
            <Link to='/agentlogin'> <button className="btn  rounded-full bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-white text-base  md:text-xl   hover:transition hover:scale-105 ">
              Login Agent
            </button></Link>
            <Link to='/adminlogin'> <button className="btn  rounded-full bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-white text-base  md:text-xl   hover:transition hover:scale-105 ">
              Login Admin
            </button></Link>
          </div>
        </div>
        <div className="hero bg-base-200 px-4 lg:px-1 min-h-screen">
          <div className="card mt-2 lg:mt-0 bg-base-100 w-full max-w-sm md:max-w-2xl shadow-2xl">
            <form className="card-body">
              <div className="flex justify-center">
                <h1 className="text-6xl font-extrabold  bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-transparent bg-clip-text">
                  QikPay
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-2xl font-bold">
                  Login User
                </h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="email"
                  placeholder="name"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pin</span>
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="input input-bordered rounded-full"
                  required
                />
                {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile No.</span>
                </label>
                <input
                  type="email"
                  placeholder="mobile number"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  rounded-full bg-gradient-to-r from-[#15FFEE] via-[#2092DE] to-[#2092DE] text-white text-xl  hover:transition hover:scale-105 ">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UserLogin;