"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import useSession from "./useSession";

export interface SigninType {
  admin_id: string;
  password: string;
}

const serverRequest = async (signinType: SigninType) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/admin-signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...signinType,
        }),
        credentials: "include",
      }
    );
    if (!res?.ok) throw await res.json();
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const useAdminSignin = () => {
  const { refetch } = useSession();
  const { push } = useRouter();
  const { mutate, data, error } = useMutation({
    mutationKey: ["admin-signin"],
    mutationFn: serverRequest,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { mutate, data, error };
};

export default useAdminSignin;
