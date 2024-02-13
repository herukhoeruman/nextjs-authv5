"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // some logout stuff
  await signOut();
};
