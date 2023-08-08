"use client";
import { RecoilRoot } from "recoil";

type props = {
  children: React.ReactNode;
};

export default function Recoil({ children }: props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
