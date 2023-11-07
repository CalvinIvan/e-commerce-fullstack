"use client";

import { Session } from "next-auth";
import Image from "next/image";
import tempProf from "@/app/assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        {user ? (
          <Image
            src={user?.image || tempProf}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box menu-sm z-30 mt-3 w-52 bg-white p-2 shadow"
      >
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              <span className="font-bold">Sign Out</span>
            </button>
          ) : (
            <button
              className="btn-primary items-center justify-center p-2 text-lg font-medium text-white"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
