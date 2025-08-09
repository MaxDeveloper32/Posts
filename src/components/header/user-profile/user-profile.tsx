'use client'
import { useUserData } from "@/app/features/auth/get-user";
import Link from "next/link";



const UserProfile = () => {
const { data: user, } = useUserData();

   if (!user) {
    return <Link href="/user-auth">Войти</Link>;
  }

    return (
       <div>
           <span>{user?.username}</span>
           <span>{user?.email}</span>
       </div>
    )
}

export default UserProfile;