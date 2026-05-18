"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage/50 bg-sage-light/50 p-6 text-center">
        <p className="font-semibold text-sage-darker">Спасибо за интерес!</p>
        <p className="mt-2 text-sm text-muted">
          Демо-режим: заявка не сохраняется. На боевом сайте данные отправятся
          менеджеру, а вы перейдёте в Telegram.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" label="Имя *" required minLength={2} placeholder="Как к вам обращаться" />
      <Input
        name="phone"
        label="Телефон *"
        type="tel"
        required
        placeholder="+7 (900) 000-00-00"
      />
      <Input
        name="telegram"
        label="Telegram *"
        required
        placeholder="@username"
      />
      <Input
        name="email"
        label="Email (необязательно)"
        type="email"
        placeholder="email@example.com"
      />
      <Button type="submit" className="w-full">
        Отправить заявку
      </Button>
      <p className="text-center text-xs text-muted-light">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        (демо-версия)
      </p>
    </form>
  );
}
