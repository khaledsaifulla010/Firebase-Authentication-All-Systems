import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firbase.init";
const GoogleSignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    return (
        <div>
            <div className="w-[600px] h-[370px] border-2 ml-[490px] rounded-xl mt-24 bg-gradient-to-r from-cyan-500 to-blue-500">
                <h1 className="text-4xl font-bold mt-16 text-center text-white">Google Sign in With Pop Up</h1>
                <div className=" w-[250px] p-8 border-4 mt-16 ml-[170px] rounded-xl bg-white">
                    <button onClick={handleGoogleSignIn} className="bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold p-4 w-full text-xl rounded-xl text-white  ">Login</button>
                </div>
            </div>
        </div>
    );
};

export default GoogleSignIn;