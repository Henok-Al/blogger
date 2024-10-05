import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../config/firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          const userRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userRef);
          setUser(userDoc.data());
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.code.replace(/[/-]/g, " "));
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
