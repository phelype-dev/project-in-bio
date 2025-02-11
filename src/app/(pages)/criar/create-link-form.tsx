"use client";

import { Createlink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import Button from "@/app/components/ui/buttons";
import TextInput from "@/app/components/ui/text-input";
import { sanitezeLink } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateLinkForm() {
  const router = useRouter();

  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitezeLink(e.target.value));
    setError("");
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (link.length === 0) return setError("O link não pode ser vazio");

    const isLinkTake = await verifyLink(link);

    if (isLinkTake) return setError("Esse link já está em uso");

    // create link

    const isLinkTakeAfterCreate = await Createlink(link);

    if (!isLinkTakeAfterCreate) return setError("Erro ao criar o link");

    router.push(`/${link}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span>projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  );
}
