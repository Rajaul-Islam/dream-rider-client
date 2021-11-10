import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";
import firebaseInitialization from "../Pages/Login/firebase/firebase.init";

firebaseInitialization();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading]=useState(true)


    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name }
                setUser(newUser)
                // saveUser(email, name,'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                setError('');
                // history.replace('/')

            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);

            })
        .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // Signed in 
                setError('');
        
            })
            .catch((error) => {
               
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                console.log(user);
                setUser(user)
                // getIdToken(user)
                // .then(idToken=>{
                //     setToken(idToken);
                //     console.log(idToken);
                // })

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])



    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            console.log('logout is clicked');

        }).catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        error,
        logout,
        isLoading,

    };
};

export default useFirebase;