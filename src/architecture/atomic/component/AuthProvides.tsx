"use client";

import React from "react";
import { useAuthProviders } from "./hooks";
import { Provider } from "@/types/component.types";
import { signIn } from "next-auth/react";
import { Button } from "../element";

const AuthProvides = () => {
  const { providers } = useAuthProviders();

  if (providers)
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i: number) => (
            <Button key={i} title='Sign In' handleClick={() => signIn(provider?.id)}  />
        ))}
      </div>
    );

  return <div></div>;
};

export { AuthProvides };
