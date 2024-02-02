
const SignUp = () => {
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('form submitted')
    }
    return (
        <div>
            <div className="w-[600px] h-[465px] border-2 ml-[490px] rounded-xl mt-24 bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <div className="hero-content flex-col lg:flex-row-reverse mt-12">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold p-4 w-full text-xl rounded-xl text-white ">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;