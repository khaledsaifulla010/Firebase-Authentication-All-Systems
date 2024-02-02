import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div className="flex items-center justify-end mt-12 mr-8  gap-4 font-bold">
            

            <NavLink
                to="/googleSignIn"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "bg-purple-500 text-white p-2 rounded-xl "
                }
            >
                Google Sign In
            </NavLink>
            <NavLink
                to="/googleSignIn"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "bg-purple-500 text-white p-2 rounded-xl "
                }
            >
                Google Sign In
            </NavLink>
            
        </div>
    );
};

export default Home;