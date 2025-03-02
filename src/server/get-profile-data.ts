import { db } from "@/lib/firebase";
import { Profile } from "next-auth";
import "server-only";

export type ProfileData = {
  userId: string;
  TotalVisits: number;
  createdAt: number;
};

export async function getProfileData(profileId: string) {
  const snapshot = await db.collection("profiles").doc(profileId).get();
  return snapshot.data() as ProfileData;
}
