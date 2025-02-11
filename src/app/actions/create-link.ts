"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/firebase";
import { create } from "domain";
import { Timestamp } from "firebase-admin/firestore";

export async function Createlink(link: string) {
  const session = await auth();

  if (!session?.user) return;

  try {
    await db.collection("profiles").doc(link).set({
      userId: session.user.id,
      totalVisits: 0,
      createdAt: Timestamp.now().toMillis(),
    });
    return true;
  } catch (e) {
    return false;
  }
}
