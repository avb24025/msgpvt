"use client"

import * as React from "react"
import  Login  from "./Login";

export function NavigationMenuDemo() {
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl font-bold">FeedFlow</a>
  </div>
    <ul className="menu menu-horizontal ">
      <button
        className="btn gap-4 mr-1"
        onClick={() => {
          const modal = document.getElementById("my_modal_2") as HTMLDialogElement | null;
          if (modal) modal.showModal();
        }}
      >
        Login
      </button>
      <Login />
      <span style={{ marginRight: "4px" }} /> {/* Spacer between buttons */}
      <button className="btn gap-2 ml-2">Signup</button>
    </ul>
  </div>

    </>
  )
}

