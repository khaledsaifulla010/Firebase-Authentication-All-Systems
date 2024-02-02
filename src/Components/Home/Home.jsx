import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div className="flex items-center justify-center mt-12   gap-4 font-bold">


            <NavLink
                to="/googleSignIn"
                className={() =>
                    " text-white bg-purple-600 p-2 rounded-xl "
                }
            >
                Google Sign In 
            </NavLink>
            <NavLink
                to="signUp"
                className={() =>
                     " text-white bg-purple-600 p-2 rounded-xl "
                }
            >
                Sign Up
            </NavLink>

        </div>
    );
};

export default Home;