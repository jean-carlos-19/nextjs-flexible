"use client";

import React from "react";
import { useAuthProviders } from "./hooks";
import { Provider } from "@/types/component.types";
import { signIn } from "next-auth/react";

const AuthProvides = () => {
  const { providers } = useAuthProviders();

  if (providers)
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i: number) => (
          <button onClick={() => signIn(provider?.id)} key={i}>
            {provider.id}
          </button>
        ))}
      </div>
    );

  return <div></div>;
};

export { AuthProvides };
